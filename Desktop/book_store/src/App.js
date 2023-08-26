import React,{useState, useEffect} from "react";
import Navbar from "./Components/Navbar";
import Book from "./Components/Book";
import axios from "axios";
import "./styles.css"


const App=()=>{
    const [books, setBooks] = useState([]); 
    useEffect(() => {
        async function fetchBooksByQuery(query) {
          try {
            const response = await axios.get(
              "https://www.googleapis.com/books/v1/volumes",
              {
                params: {
                  q: query,
                },
              }
            );
            return response.data.items;
          } catch (error) {
            console.log(error);
            return [];
          }
        }
    
        async function fetchData() {
          const query1 = "Sherlock Holmes";
          const query2 = "harry potter";
    
          const booksQuery1 = await fetchBooksByQuery(query1);
          const booksQuery2 = await fetchBooksByQuery(query2);
    
          const allBooks = [...booksQuery1, ...booksQuery2];
    
          setBooks(allBooks);
        }
    
        fetchData();
      }, []);

    return (
        <div>
            <Navbar setBooks={setBooks}/>
            <Book books={books}/>
        </div>
    )
}

export default App;