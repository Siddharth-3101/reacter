import React from 'react'

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "10px",
      backgroundColor: "black",
      color: "white"
    }}>
        <h2>Navbar</h2>
      <div>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a> 
      </div>
    </nav>
  )
}

export default Navbar