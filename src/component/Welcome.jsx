import React from 'react'

export default function Welcome() {
    const hour=new Date().getHours();
    const greeting=hour<12?"Good Morning":hour<18?"Good Afternoon":"Good Evening";
  return (
    <div style={{ color: 'skyblue', fontSize: '20px' }}>{greeting} Time: {hour}'o clock</div>
  )
}
