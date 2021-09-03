import React from "react";
import ReactDom from "react-dom";
import Google from "./My-Components/My-Google"

// let google = React.createElement("a", {"href" : "https://www.google.com/"}, "GOOGLE")

// let h1 = React.createElement("h1", null, google)

// ReactDom.render(h1,document.getElementById("root"))




ReactDom.render(<Google/>, document.getElementById("root"))