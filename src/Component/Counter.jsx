import React, { useState } from 'react'

const Counter = () => {
    const [increment,setIncrement] = useState(0)
  return (
    <div>
        <h1>Counter App</h1>
        <p>Count: {increment} </p>
        <button onClick={()=>setIncrement(increment+1)}>Increment</button>
        <button onClick={()=>setIncrement(increment-1)}>Decrement</button>
    </div>
  )
}

export default Counter