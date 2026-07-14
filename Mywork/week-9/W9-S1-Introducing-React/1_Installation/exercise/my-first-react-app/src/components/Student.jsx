import React from 'react'

const Student = ({ student, age, index, onClick }) => {

  return (
    <div key={index} onClick={() => onClick(student.name)}>
     
      {student.name} is {age} years old.
    </div>
  )
}

export default Student