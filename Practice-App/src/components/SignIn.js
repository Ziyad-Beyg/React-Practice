import React,{useState, useContext} from 'react'
import { GlobalContext } from '../context/context'
import {useHistory} from "react-router-dom"

export let loginStudent


function SignIn() {
    let History = useHistory()
    let [logInEmail, setLogInEmail] = useState('')
    let [logInPassword, setLogInPassword] = useState('')
    let {state, dispatch} = useContext(GlobalContext)
    return (
        <div>
            <h1>
                USER SIGN IN
            </h1>
            <label>
                EMAIL : <input type="text" value={logInEmail} onChange={(ev)=>{setLogInEmail(ev.target.value)}}/>
            </label>
            <br/>
            <br/>
            <label>
                PASSWORD : <input type="password" value={logInPassword} onChange={(ev)=>{setLogInPassword(ev.target.value)}}/>
            </label>
            <br/>
            <br/>
            <button onClick={()=>{
                state.users.map((arrayValue)=>{
                    if(logInEmail == arrayValue.email && logInPassword == arrayValue.password){
                        console.log("USER FOUND")
                        console.log(state.authUser)
                        dispatch({ type: "SAVE_AUTH_USER", payload: arrayValue });
                        // console.log(state.authUser)
                        if(arrayValue.role == "trainer"){
                            History.push("/add-student-data")
                        }
                        else if(arrayValue.role == "student"){
                            loginStudent = arrayValue
                            History.push("/my-details")
                        }
                    }
                })
            }}>
                LOGIN
            </button>
        </div>
    )
}

export default SignIn
