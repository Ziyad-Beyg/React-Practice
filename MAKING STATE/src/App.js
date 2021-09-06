import React from "react";
import SetCounter from "./my-components/my-counter";
import Greeting from "./my-components/my-greetings"
import Mystory from "./my-components/my-story";

function App() {
  return(
    <div>
      {/* <Greeting username="ZIYAD" />
      <Greeting username="SALMAN" />
      <Greeting username="MAVIA" />
      <Greeting username="HAMMAD" />
      <Greeting username="ANIQ" />
      <Greeting username="SHAHERYAR" />
      <Greeting username="SAIF" /> */}

      {/* <Mystory storyName="LAZY DOG" storyTagline="Lorem, ipsum dolor sit amet consectetur adipisicing elit." storyText=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus autem fuga non aliquid debitis tempora dolor optio nihil quia alias iure minima culpa, at, natus perferendis reiciendis fugiat cumque!"/>

      <Mystory storyName="LOIN AND THE MICE" storyTagline="Lorem, ipsum dolor sit amet consectetur adipisicing elit." storyText=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus autem fuga non aliquid debitis tempora dolor optio nihil quia alias iure minima culpa, at, natus perferendis reiciendis fugiat cumque!"/>
      
      <Mystory storyName="3 MUSKATEER" storyTagline="Lorem, ipsum dolor sit amet consectetur adipisicing elit." storyText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus autem fuga non aliquid debitis tempora dolor optio nihil quia alias iure minima culpa, at, natus perferendis reiciendis fugiat cumque!"/> */}

      <SetCounter/>

    </div>
  )
}

export default App;
