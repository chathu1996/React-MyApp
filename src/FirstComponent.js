import React from "react";

const FirstComponents = ( {students}) =>{
    // const studentList = students.map(student =>{
    //     if (student.age > 20) {
    //         return(
    //         <div className="first-component" key={student.id}>
    //             <div>Name: { student.name }</div>
    //             <div>Age: { student.age }</div>
    //             <div>Belt: { student.belt }</div>
    //             <br />
    //             </div>
    //         )
    //     } else {
    //         return null;
    //     }
    //  });
 
    return(
        <div className="student-list">
           { 
            students.map( student => {
                    return student.age > 20 ? (
                        <div className="first-component" key={student.id}>
                            <div>Name: { student.name }</div>
                            <div>Age: { student.age }</div>
                            <div>Belt: { student.belt }</div>
                            <br />
                        </div> 
                    ) : null;
                }) 
            } 
        </div>
     ); 
}

export default FirstComponents;