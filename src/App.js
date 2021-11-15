import './App.css';
import FirstComponents from './FirstComponent';
import React from 'react';
import AddStudents from './AddStudent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state  ={
      students : [
        { name: "Chathu", age: 18, belt: 'Black', id: 1},
        { name: "Hiru", age: 24, belt: 'Red', id: 2},
        { name: "Jaya", age: 25, belt: 'Green', id: 3}
      ]
    }
  }
  addStudents = ( student ) => {
    student.id = Math.random();
    let students = [...this.state.students, student];
    this.setState({
      student: students
    });
  }
  deleteStudent = (id) => {
    let students = this.state.students.filter(student => {
      return student.id !== id;
    });
    this.setState({
      students: students
    });

  }
  render() {
    return (
      <div>
        <h1>My First React App</h1>
        <FirstComponents deleteStudent={ this.deleteStudent } students = { this.state.students }/>
        <AddStudents addStudents = { this.addStudents }/>
      </div>
    );
  }
}

export default App;
