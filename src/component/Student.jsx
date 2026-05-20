import React from 'react'

function Student(props) {
  return (
    <div style={{
      border: "5px solid white",
      padding: "5px",
      margin: "5px",
      borderRadius: "10px"
    }}>
      <h2>Student Details</h2>
      <h3>{props.name}</h3>
      <p>Department: {props.dept}</p>
      <p>Year: {props.year}</p>
    </div>
  )
}

export default Student