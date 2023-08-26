import React from "react";


const SmallBookPoster=({thumbnail})=>{
    return(
        <div className="smallbookposter">
            <img src={thumbnail} alt="pic"/>
        </div>
    )
}

export default SmallBookPoster