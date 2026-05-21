import React,{useState} from 'react'

function UserForm() {
    const[form,setForm]=useState({
        name:"",
        email:"",
        dob:"",
        phone:"",
        password:""
    })
    const[submittedData,setSubmittedData]=useState(null)
    const handleSubmit=(e)=>{
        e.preventDefault()
        setSubmittedData(form)
        setShow(true) 
    }
    const[show,setShow]=useState(false)

  return (
    <div>
        {!show &&(<>
        <h2>User Form</h2>
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name='name' onChange={(e)=>setForm({...form,name:e.target.value})}/>
            <br></br>
            <label>Email</label>
            <input type="email" name="email" onChange={(e)=>setForm({...form,email:e.target.value})}/>
            <br></br>
            <label>Password</label>
            <input type="password" name="password" onChange={(e)=>setForm({...form,password:e.target.value})}/>
            <br></br>
            <label>Date Of Birth</label>
            <input type="date" name="dob" onChange={(e)=>setForm({...form,dob:e.target.value})}/>
            <br></br>
            <label>Phone</label>
            <input type="tel" name="phone" onChange={(e)=>setForm({...form,phone:e.target.value})}/>
            <br></br>
            <button type='submit'>Submit</button>
        </form>
        </>)}
        {submittedData && (
            <>
            <h3>Submitted Data:</h3>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Password:</strong> {submittedData.password}</p>
            <p><strong>Date of Birth:</strong> {submittedData.dob}</p>
            <p><strong>Phone:</strong> {submittedData.phone}</p>
            </>
        )}

    </div>
  )
}

export default UserForm