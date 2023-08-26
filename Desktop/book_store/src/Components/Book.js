import React,{useState} from "react";
import BookPoster from "./BookPoster";
import SmallBookPoster from "./SmallBookPoster";
import LargeBookPoster from "./LargeBookPoster";

const Book=({books})=>{
    const firstThree=books.slice(0,3)
    const otherBooks=books.slice(3)

    let[selectedBook,setSelectedBook]=useState(null);
    let[index,setIndex]=useState(0);

    const handleBookClick = (book,index) => {
        console.log(book)
        setSelectedBook(book);
        
        setIndex(index)
      };
  

    return (
        <div className="book">
            <div className="display-books">
                { selectedBook ? 
                      (
                        <LargeBookPoster book={selectedBook} index={index} />
                       ): 
                    (
                        firstThree.map((book,index)=>(
                            <div className="item-container" onClick={()=>handleBookClick(book,index)}>
                                <BookPoster thumbnail={book.volumeInfo.imageLinks.thumbnail} title={book.volumeInfo.title} description={book.volumeInfo.description} index={index} previewLink={book.volumeInfo.previewLink}/>
                            </div>
                    )
                 ))}
            </div>
            <h1>More Books</h1>
            <div className="other-books">
                {
                    otherBooks.map((book)=>(
                        <SmallBookPoster thumbnail={book.volumeInfo.imageLinks.thumbnail} />
                    ))
                }
            </div>
        </div>
    )
}        

export default Book