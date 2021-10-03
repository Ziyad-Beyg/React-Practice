import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/context'
import "../App.css"


function AllStudentPage() {
    let marginTop = {"margin-top": "0px"}
    let {state, dispatch} = useContext(GlobalContext)
    return (
        <div>
            <ul style={marginTop}>
                <li>
                    <Link to="/add-student-data">Add Student Data</Link>
                </li>
                <li>
                    <Link to="/signin">Sign Out</Link>
                </li>
            </ul>
            <h1>
                STUDENT'S DETAILS
            </h1>
            <table>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Roll No</th>
                        <th>Total Marks</th>
                        <th>Grade</th>
                        <th>Feedback</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.studentInfo.map((objValues)=>{
                            return(
                                    <tr>
                                        <td>{objValues.studentName}</td>
                                        <td>{objValues.rollNo}</td>
                                        <td>{objValues.totalMarks}</td>
                                        <td>{objValues.grade}</td>
                                        <td>{objValues.feedback}</td>
                                    </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default AllStudentPage
