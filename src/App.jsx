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

function App() {
  const [count, setCount] = useState(0)
  const student={name:"siddharth",dept:"cse",year:"3rd"}
  const courses=["html","css","js"] 
  return (    
    <div>
     <Navbar/>
      <Hi/>
     <br></br>
     <Welcome/>
     <br></br>
      <Notification showAlert={true} />
      <br></br>
    
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
