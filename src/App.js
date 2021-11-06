import './App.css';
import FirstComponents from './FirstComponent';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state  ={
      students : [
        { name: "Chathu", age: 25, belt: 'Black', id: 1},
        { name: "Hiru", age: 24, belt: 'Red', id: 2},
        { name: "Jaya", age: 25, belt: 'Green', id: 3}
      ]
    }
  }
  render() {
    return (
      <div>
        <h1>My First React App</h1>
        <FirstComponents students = { this.state.students }/>
      </div>
    );
  }
}

export default App;
