import React from "react";



const LargeBookPoster=({book,index})=>{
    

    let color=["#547c94","#725394","#96536e"]

    function btn1Click(){
        console.log(book.volumeInfo.previewLink)
        window.open(book.volumeInfo.previewLink);
    }
    function btn2Click(){
        console.log(book.volumeInfo.infoLink)
        window.open(book.volumeInfo.infoLink);
    }
    
    return(
        <div className="largebookposter" >
            <div className="imagesection">
                <img src={book.volumeInfo.imageLinks.thumbnail} alt="pic"/>
            </div>
            <div className="details" style={{backgroundColor:color[index]}}>
                <h2 className="title">{book.volumeInfo.title}</h2>
                <div className="author-pdate">
                    <div className="author">{book.volumeInfo.authors[0]}</div>
                    <div className="publishdate">Published on: {book.volumeInfo.publishedDate}</div>
                </div>
                <div className="describe">{book.volumeInfo.description}</div>
                <div className="rates">
                    <div className="avgrating">Avg Rating: {book.volumeInfo.averageRating}</div><div className="line"></div>
                    <div className="ratingscount">Rating Count: {book.volumeInfo.ratingsCount}</div><div className="line"></div>
                    <div className="publisher">Publisher: {book.volumeInfo.publisher}</div><div className="line"></div>
                    <div className="language">Language: {book.volumeInfo.language}</div>
                </div>
                <div className="buttons">
                    <button style={{backgroundColor:color[index]}} onClick={btn1Click}>Now Read</button>
                    <button style={{backgroundColor:color[index]}} onClick={btn2Click}>More Info!</button>
                </div>
            </div>
        </div>
    )
}

export default LargeBookPoster