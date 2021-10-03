import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/context'
import "../App.css"
import { Link } from 'react-router-dom'

function AddStudentData() {
    let [studentName, setStudentName] = useState('')
    let [rollNo, setRollNo] = useState('')
    let [totalMarks, setTotalMarks] = useState('')
    let [feedback, setFeedback] = useState('')
    let {state, dispatch} = useContext(GlobalContext)
    // console.log(state.authUser)
    let marginTop = {"margin-top": "0px"}
    return (
        <div>
            <ul style={marginTop}>
                <li>
                    <Link to="/all-students-page">All Students</Link>
                </li>
                <li>
                    <Link to="/signin">Sign Out</Link>
                </li>
            </ul>
            <h1>
                TEACHER's PORTAL
            </h1>
            <br/>
            <br/>
            <label>
                STUDENT NAME: <input type="text" value={studentName} onChange={(ev)=>{setStudentName(ev.target.value)}}/>
            </label>
            <br/>
            <br/>
            <label>
                ROLL NO: <input type="number" value={rollNo} onChange={(ev)=>{setRollNo(ev.target.value)}}/>
            </label>
            <br/>
            <br/>
            <label>
                TOTAL MARKS: <input type="number" value={totalMarks} placeholder="Out of 1100" onChange={(ev)=>{setTotalMarks(ev.target.value)}}/>
            </label>
            <br/>
            <br/>
            <label>
                TRAINER FEEDBACK: <input type="text" value={feedback} onChange={(ev)=>{setFeedback(ev.target.value)}}/>
            </label>
            <br/>
            <br/>  
            <button onClick={()=>{
                let grade
                if ((totalMarks/1100)*100 >= 80 && (totalMarks/1100)*100 < 100) {
                    grade = "A+ Grade"
                }
                else if ((totalMarks/1100)*100 >= 70 && (totalMarks/1100)*100 < 80) {
                    grade = "A Grade"
                }
                else if ((totalMarks/1100)*100 >= 60 && (totalMarks/1100)*100 < 70) {
                    grade = "B Grade"
                }
                else if ((totalMarks/1100)*100 >= 50 && (totalMarks/1100)*100 < 60) {
                    grade = "C Grade"
                }
                else if ((totalMarks/1100)*100 < 50) {
                    grade = "FAIL"
                }
                else{
                    alert("ENTER VALID INFORMATION")
                }
                let studentData = {
                    studentName,
                    rollNo,
                    totalMarks,
                    grade,
                    feedback
                }
                console.log(studentData)
                dispatch({type:"SAVE_STUDENT_DATA", payload:studentData})
                console.log(state.studentInfo)

                setStudentName('')
                setRollNo('')
                setTotalMarks('')
                setFeedback('')

            }}>
                SAVE STUDENT DATA
            </button>
        </div>
    )
}

export default AddStudentData
