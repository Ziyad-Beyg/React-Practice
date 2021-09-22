import React,{useState} from "react";

// let userCredetials = {
//     email:"salman+kanzza@gmail.com",
//     password:"kanzamylife"
// }

function Login(){
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    return(
        <div>
            <label>
                EMAIL: <input type="text"
                 value={userEmail}/>
            </label>
            {
                console.log(userEmail)
            }
            <br/>
            <label>
                PASSWORD: <input type="password"/>
            </label>
            <br/>
        
            <button>
                LOGIN
            </button>
        </div>
    )
}

export default Login