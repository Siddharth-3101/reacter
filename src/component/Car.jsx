import React from 'react'
import Bmw from '../assets/Car.jpg'
function Car() {
  const car={
    name:"BMW",
    model:"X5",
    year:2025,
    pic: Bmw
  }
    return (
    <div>  
        <p>Name: {car.name}</p>
        <p>Model: {car.model}</p>
        <p>Year: {car.year}</p>
        <img src={car.pic} alt="Car Image" width="500" height="350" />
    </div>
  )
}
export default  Car