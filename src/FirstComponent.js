import React from "react";

const FirstComponents = ( {students, deleteStudent }) =>{
    const studentList = students.map(student =>{
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