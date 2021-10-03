import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/context'
import { Link } from 'react-router-dom'
import "../App.css"
import {loginStudent} from "./SignIn"

function AllStudents() {
    let marginTop = {"margin-top": "0px"}
    let {state, dispatch} = useContext(GlobalContext)
    console.log(state.authUser)
    console.log(loginStudent)
    return (
        <div>
            <ul style={marginTop}>
                <li>
                    <Link to="/signin">Sign Out</Link>
                </li>
            </ul>
            {/* <h1>
                MY DETAILS
            </h1> */}
            <div className="center-div">
                <h1>
                    MY REPORT
                </h1>
                <br/>
                <br/>
                <table>
                    <tr>
                        <td className="report-info">
                            <strong>
                                Student Name : 
                            </strong>
                        </td>
                    </tr>
                    <tr>
                        <td className="report-info">
                            <strong>
                                Roll No : 
                            </strong>
                        </td>
                    </tr>
                    <tr>
                        <td className="report-info">
                            <strong>
                                Total Marks : 
                            </strong>
                        </td>
                    </tr>
                    <tr>
                        <td className="report-info">
                            <strong>
                                Grade : 
                            </strong>
                        </td>
                    </tr>
                    <tr>
                        <td className="report-info">
                            <strong>
                                Trainer's Feedback : 
                            </strong>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default AllStudents
