import React,{useState,useEffect} from 'react'

function Users() {
    const[users,setUser]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setUser(data))},[])
  return (
    <div>
        <h1>Users</h1>
        {
        users.map((user,index)=>(
        <li key={index}>{user.id} - {user.name}</li>)
        )}
    </div>
  )
}

export default Users