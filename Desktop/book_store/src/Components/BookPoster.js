import React from "react";

const BookPoster=({thumbnail,title,description,index,previewLink,handleClick})=>{
    let color=["#547c94","#725394","#96536e"]

    function btnClick(){
        window.open(previewLink);
    }


    return(
        <div className="bookposter" onClick={handleClick}>
            <div className="imgsection">
                <img src={thumbnail} alt="pic"/>
            </div>
            <div className="description" style={{backgroundColor:color[index%3]}}>
                <h4>{title}</h4>
                <div className="desc">
                    <p>{description}</p>
                </div>
                <button style={{backgroundColor:color[index%3]}} onClick={btnClick}>Now Read</button>
            </div>
        </div>
    )
}

export default BookPoster