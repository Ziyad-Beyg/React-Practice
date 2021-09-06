import React from "react";

function Mystory({storyName, storyTagline, storyText}){
    return(
        <div>
            <h1>
                {storyName}
            </h1>
            <h3>
                {storyTagline}
            </h3>
            <p>
                {storyText}
            </p>
            <br/>
            <br/>   
        </div>
    )
}

export default Mystory;