import React, {useState, useEffect} from "react";

function SetCounter(){
    var useEffectBgColor;
    let [myCounter, setMyCounter] = useState(0)
    let [myUsername, setmyUsername] = useState("ZIYAD")
    let [randGeneratedNames, setRandGeneratedNames] = useState(["ZIYAD", "SALMAN", "MAVIA", "ANIQ", "SHERRY", "HAMMAD", "SAIF"])
    let [H1BgColor, setH1BgColor] = useState("yellow")


    // let changingColor = () => {
    //     if(myCounter % 2 == 0){
    //         // useEffectBgColor = `${H1BgColor[0]}` 
    //         // useEffectBgColor = {"backgroundColor" : "yellow"}
    //         useState(H1BgColor)
    //         console.log(H1BgColor)
    //     }
    //     else if (myCounter% 2 != 0){
    //         // useEffectBgColor = `${H1BgColor[1]}` 
    //         useState("red")

    //     }
    //     else if(myCounter% 5 == 0){
    //         // useEffectBgColor = `${H1BgColor[2]}` 
    //         useState("green")
    //     }
    // }


    useEffect(() => {
        console.log(`********** WELLCOME ${H1BgColor} **********`)
    })

    useEffect(() => {
        console.log(`********** WELLCOME ${myUsername} **********`)
    })
    useEffect(() => {
        document.title = `${myCounter} Times Clicked`
        if(myCounter % 2 == 0 && myCounter % 5 != 0){
            let newColor = "yellow" 
            // useEffectBgColor = `${H1BgColor[0]}` 
            // useEffectBgColor = {"backgroundColor" : "yellow"}
            setH1BgColor(newColor)
            console.log(newColor)
        }
        else if (myCounter% 2 != 0 && myCounter % 5 != 0){
            // useEffectBgColor = `${H1BgColor[1]}` 
            // useEffectBgColor = {"backgroundColor" : "red"}
            let newColor = "red"
            setH1BgColor(newColor)
            console.log(newColor)

        }
        else if(myCounter% 5 == 0){
            // useEffectBgColor = `${H1BgColor[2]}` 
            // useEffectBgColor = {"backgroundColor" : "green"}
            let newColor = "green"
            setH1BgColor(newColor)
            console.log(newColor)
            
        }
    }, [myCounter])

    let addCounter = ()=>{
        // console.log(myCounter)
        setMyCounter(myCounter + 1)
    }

    let subtractCounter = ()=>{
        // console.log(myCounter)
        setMyCounter(myCounter - 1)
    }

    let randomNamesGenerated = () => {
        let randomIndex = Math.floor(Math.random() * 6 )
        let newName = randGeneratedNames[randomIndex]
        // console.log(myUsername, randGeneratedNames[randomIndex])
        setmyUsername(newName)
    }

    return(
        <div>
            <p>
                <button onClick={subtractCounter}>
                    -
                </button>
                &nbsp;
                {myCounter}
                &nbsp;
                <button onClick={addCounter}>
                    +
                </button>
            </p>
            <p>
                {myUsername}
            </p>
            <button onClick={randomNamesGenerated}>
                    UPDATE USER NAME
                </button>
            <br/>    
            <br/>    
            <br/>
            <h1 style={{backgroundColor: H1BgColor}}>
                HELLO USE EFFECT    
            </h1>    
        </div>
    )
}

export default SetCounter