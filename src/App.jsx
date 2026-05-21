import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Hi from './component/Hi.jsx'
import Welcome from './component/Welcome.jsx'
import Student from './component/Student.jsx'
import Navbar from './component/Navbar.jsx'
import Course from './component/Course.jsx'
import Notification from './component/Notification.jsx'
import Car from './component/Car.jsx'
import Cars from './component/Cars.js'
import College from './component/College.jsx'
import Count from './component/Count.jsx'
import Mode from './component/Mode.jsx'
import PasswordChecker from './component/PasswordChecker.jsx'
import Users from './component/Users.jsx'
import UserForm from './component/UserForm.jsx'

function App() {
  const [count, setCount] = useState(0)
  const student={name:"siddharth",dept:"cse",year:"3rd"}
  const courses=["html","css","js"] 
  return (    
   <div >
        
     <Navbar/>
     <Mode/>
     <br></br>
     <Count/>
      <br></br>
      <Users/>
      <br></br>
     <College/>
     
     <UserForm/>
     <br></br>
     <PasswordChecker/>
     <br></br>
      <Hi/>
     <br></br>
     <Welcome/>
     <br></br>
      <Notification showAlert={true} />
      <br></br>
    {
      Cars.map((car,index)=>(
       <article key={index}>
        <img src={car.URL} width="500px" height="300px" alt={car.name}/>
        <h2>{car.name}</h2>
        <p>Model: {car.model}</p>
       </article>
      ))
    }
     <Student name="siddharth" dept="cse" year="3rd"/>
     <br></br>
     <Course courses={courses} />
      <br></br>
     <Car />
     <br></br>
    
  
    </div>
  )
}

export default App
