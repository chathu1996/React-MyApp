import React from "react";

const FirstComponents = ( {students}) =>{
    const studentList = students.map(student =>{
        return(
        <div className="first-component" key={student.id}>
            <div>Name: { student.name }</div>
            <div>Age: { student.age }</div>
            <div>Belt: { student.belt }</div>
            <br />
            </div>
          ); 
     });
    return(
        <div className="student-list">
           { studentList } 
        </div>
     ); 
}

export default FirstComponents;