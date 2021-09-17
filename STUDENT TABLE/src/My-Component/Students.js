import React,{useState} from "react";
import MyTable from "./Table";




function StudentData(){

    const [studentName, setStudentName] = useState("")
    const [studentRollNo, setStudentRollNo] = useState("")
    const [studentArray, setStudentArray] = useState([])
    function clickFunction(){
        console.log(studentName,studentRollNo)
        
        let student = {
            StudentName : studentName,
            StudentRollNO : studentRollNo
        }

        setStudentArray(studentArray.concat([student]))
        // studentArray.push(student)
        // setStudentArray(studentArray.push(student))
        console.log(studentArray)
        setStudentName("")
        setStudentRollNo("")
    }

    return(
        <div>
            <br/>
            <br/>

            <label>
                Student Name : <input type="text" onChange={(event)=>{setStudentName(event.target.value)}}  value={studentName}/>
            </label>
            <br/>
            <br/>
            <label>
                Roll Number  : <input type="text" onChange={(event)=>{setStudentRollNo(event.target.value)}} value={studentRollNo}/>
            </label>
            <br/>
            <br/>

            <button onClick={clickFunction}>
                SAVE INFO
            </button>
            
            <MyTable myArray= {studentArray}/>


        </div>
    )

    // function ShowTable(){
    //     return(
    //         <div>
    //             {
    //                 studentArray.map((arrayValues)=>{
    //                     return(
    //                         <MyTable stName={arrayValues.StudentName} stRollNo={arrayValues.StudentRollNO}/>
    //                     )
    //                 })
    //             }
    //         </div>
    //     )
    // }
}

export default StudentData