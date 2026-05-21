import React,{useState} from 'react'

function Mode() {
    const [dark,setDark]=useState(false)
  return (
    <div style={{backgroundColor:dark? "black":"white",color:dark?"white":"black",height:"5vh"}}>
        <button onClick={()=>setDark(!dark)}>Toggle Button</button>

    </div>
  )
}

export default Mode