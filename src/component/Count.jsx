import React,{useState} from 'react'

function Count() {
    const [count, setCount] = useState(0)
  return (
    <div><p>Count:{count}</p>
<input type="button" onClick={()=>setCount(count+1)} value="Increment"/>
<input type="button" onClick={()=>setCount(count-1)} value="Decrement"/>


    </div>
  )
}

export default Count