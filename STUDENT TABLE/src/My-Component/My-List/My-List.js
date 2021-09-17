import React from "react";
import "./My-List.css"

function MyList({link, url, title, description}){
    return(
        <div className="container">
            <a className="main-a" href={link}>
            <h3 className="h3">
                {url}
            </h3>
            <h1 className="h1">
                {title}
            </h1>    
            </a>
            <p className="p">
                {description}
            </p>    
        </div>
    )
}

export default MyList