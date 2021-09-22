import React from "react";

function Students(){
    const allStudents = {
        2643: {
            name: 'haider',
            rollNum: 2643,
            subject: 'JavaScript'
        },
        2644: {
            name: 'abdullah',
            rollNum: 2644,
            subject: 'React'
        },
        2645: {
            name: 'muzammil',
            rollNum: 2645,
            subject: 'HTML'
        },
        2646: {
            name: 'ahmed',
            rollNum: 2646,
            subject: 'CSS'
        }
    }


    return(
        Object.keys(allStudents).map((keys)=>{
            let { name } = allStudents[keys]
            return <p keys={keys}>{name}</p>
        })
    )
}

export default Students