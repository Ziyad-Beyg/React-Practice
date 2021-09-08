import React from "react";


function ImageInfo({imageTitle, imagePara}){
    return(
        <div>
            <h1>
                {imageTitle}
            </h1>
            <p>
               {imagePara} 
            </p>
            <br/>
            <br/>
        </div>
    )
}

export default ImageInfo