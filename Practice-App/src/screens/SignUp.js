import React,{useState, useContext, useEffect} from 'react'
import { GlobalContext } from '../context/context'
import {useHistory} from "react-router-dom"

function SignUp() {
    let History = useHistory()
    let [userName, setUserName] = useState('')
    let [userEmail, setUserEmail] = useState('')
    let [userPassword, setUserPassword] = useState('')
    let [userRole, setUserRole] = useState('')
    let {state, dispatch} = useContext(GlobalContext)
    // let [userInfo, setUserInfo] = useState([])

    // useEffect(() => {
    //     console.log(state.users)
    // }, [userInfo])
    return (
        <div>
            <h1>
                USER SIGNUP
            </h1>
            <label>
                USERNAME : <input type="text" value={userName} onChange={(ev)=>{setUserName(ev.target.value)}}/>
            </label>
            <br/>
            <br/>
            <label>
                EMAIL : <input type="text" value={userEmail} onChange={(ev)=>{setUserEmail(ev.target.value)}}/>
            </label>
            <br/>
            <br/>
            <label>
                PASSWORD : <input type="password" value={userPassword} onChange={(ev)=>{setUserPassword(ev.target.value)}}/>
            </label>
            <br/>
            <br/>
            <label>
                ROLE :  <input name="userRole" type="radio" value="Student" onClick={(ev)=>{setUserRole(ev.target.value)}}/> STUDENT
                        <input name="userRole" type="radio" value="Trainer" onClick={(ev)=>{setUserRole(ev.target.value)}}/> TRAINER                
            </label>
            <br/>
            <br/>

            <button onClick={()=>{
                if(userName == "" || userEmail == "" || userPassword == "" || userRole == ""){
                    alert("USER NOT FOUND!!!")
                }
                else{
                    let userInfoOBJ = {
                        userName : userName.toLowerCase(),
                        email : userEmail.toLowerCase(),
                        password : userPassword,
                        role : userRole.toLowerCase()
                    }
                    // setUserInfo(userInfoOBJ)
                    console.log(userInfoOBJ)
                    console.log(state.users)
                    dispatch({type:"REGISTER_USER", payload:userInfoOBJ})
                    console.log(state.users)

                    History.push("/signin")
                }
            }}>
                SUBMIT
            </button>
        </div>
    )
}

export default SignUp
