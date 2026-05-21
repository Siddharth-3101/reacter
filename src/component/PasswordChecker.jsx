import React,{useState,useEffect} from 'react'

function PasswordChecker() {
  const[pass,setPass]=useState("")
  const[message,setMessage]=useState("")
  useEffect(()=>{
    if(pass.length<8 && pass.length>0){
      setMessage("Password is too short")}
    else if(pass.length==0){
        setMessage("")}
    else if(pass.length>15){
        setMessage("Password is too long")}
    else{
          setMessage("Password is valid")}
    },[pass])
    return (
    <div>
        <h1>Password Checker</h1>
        <input type='password' onChange={(e)=>setPass(e.target.value)} placeholder='password'/>
        <p>{message}</p>
    </div>
  )
}

export default PasswordChecker