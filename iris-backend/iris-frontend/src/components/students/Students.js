import React, {useState} from 'react'

let Students = (props) => {
   
    return(
        <div>
            <p>My name is {props.studentName}</p>
            <p>My grade is {props.studentGrade}</p>
        </div>
    )
};

export default Students;