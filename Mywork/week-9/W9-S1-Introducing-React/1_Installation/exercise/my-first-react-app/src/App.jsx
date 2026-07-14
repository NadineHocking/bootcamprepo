
// import { useState } from "react";
import './App.css'
import Student from './components/student'

function App() {

  const myName = 'Vite';

  const students
   = [
    {"name": "Helen", "age": 20},
    {"name": "Tom", "age": 22},
    {"name": "Alice", "age": 21},
    {"name": "Ben", "age": 23},
    {"name": "Lyn", "age": 19}
  ];

  const handleClick = (name) => {
    alert(`Hello, ${name}!`);
  }

  return (
    <>
      <div>
        <h1>Student List</h1>
        My name is {myName}
        {students.map((student, index) => (
        //   <div key={student.name}>
        //     <h3>{student.name}</h3>
        //     <p>Age: {student.age}</p>
        //   </div>
        <Student key={index} student={student} age={student.age} onClick={handleClick} />

        ))}
      </div>
    </>
  )
}


export default App
