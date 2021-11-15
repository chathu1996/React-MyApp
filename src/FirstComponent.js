import React from "react";
import './FirstComponent.css'

const FirstComponents = ( {students, deleteStudent }) =>{
    students.map(student =>{
        if (student.age > 20) {
            return(
            <div className="first-component" key={student.id}>
                <div>Name: { student.name }</div>
                <div>Age: { student.age }</div>
                <div>Belt: { student.belt }</div>
                <button onClick={ deleteStudent( student.id) }>Delete Student</button>
                <br />
                </div>
            )
        } else {
            return null;
        }
     });
}

export default FirstComponents;