import React, {useState}from 'react'


function Counter() {
    const [counter, setCounter] = useState(0)
  return (
    <div>
        {counter}
        <button onClick={()=>setCounter(counter+1)}>Add</button>
        <button onClick={()=>setCounter(counter-1)}>Decrease</button>

    </div>
  )
}

export default Counter
