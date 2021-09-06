import React, {useState} from "react";

function SetCounter(){

    let [myCounter, setMyCounter] = useState(100000)
    let [myUsername, setmyUsername] = useState("ZIYAD")
    let [randGeneratedNames, setRandGeneratedNames] = useState(["ZIYAD", "SALMAN", "MAVIA", "ANIQ", "SHERRY", "HAMMAD", "SAIF"])

    // let addCounter = ()=>{
    //     console.log(myCounter)
    //     setMyCounter(myCounter + 1)
    // }

    // let subtractCounter = ()=>{
    //     console.log(myCounter)
    //     setMyCounter(myCounter - 1)
    // }

    let randomNamesGenerated = () => {
        let randomIndex = Math.floor(Math.random() * 6 )
        let newName = randGeneratedNames[randomIndex]
        console.log(myUsername, randGeneratedNames[randomIndex])
        setmyUsername(newName)
    }

    return(
        <div>
            {/* <p>
                <button onClick={subtractCounter}>
                    -
                </button>
                &nbsp;
                {myCounter}
                &nbsp;
                <button onClick={addCounter}>
                    +
                </button>
            </p> */}
            <p>
                {myUsername}
            </p>
            <button onClick={randomNamesGenerated}>
                    UPDATE USER NAME
                </button>
        </div>
    )
}

export default SetCounter