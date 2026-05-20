import React from 'react'

function Hi() {
  const Name="siddharth"
  const sayHi = () => {
    alert("hi")
  }
  return (
    <div>
        <h1>welcome to the hi page</h1>
        <br></br>
      <h2>this is the hi page</h2>
      <button fontColor="black" onClick={sayHi}>say hi</button>
      <br></br>
      <div>
      <center>
      <table align ="center" border="1px solid">
        <tr>
        <th>name</th>
        <th>age</th>
        </tr>
        <tr>
          <td>{Name}</td>
          <td>25</td>
        </tr>
        
      </table>
    </center>
    </div>

    </div>
  )
}

export default Hi