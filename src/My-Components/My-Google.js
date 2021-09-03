import React from "react"

function Google(){
    // let a = React.createElement("a", {href: "https://www.google.com/"}, "GOOGLE")
    // let h1 = React.createElement("h1", null, "CLICK " , a)
    // return React.createElement("div", null , h1 )
    return(
      <div>
          <h1>
            CLICK &nbsp;
            <a href="https://www.google.com/">
                GOOGLE
            </a>
          </h1>
      </div>
    );
  }

export default Google