import React,{useState} from 'react'

export default function College() {

    const[name,setName]=useState("KCE")
    const[show,setShow]=useState(true)
  return (
    <div style={{ padding: '20px' }}>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <p>College: {name}</p>
      <button style={{ padding: '10px', margin: '5px' }} onClick={() => setShow(!show)}>
        {show ? "show" : "Hide"}
      </button>
      {show && <p>college Details: {name}</p>}
    </div>
  )
}
