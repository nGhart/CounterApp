import React, {useState}from 'react'

function FunctionalCounter() {
    const [count, setCount] = useState(0);
    const increase =() =>{
        setCount(count + 1);
    }
    const decrease =() =>{
        setCount(count - 1);
    }
  return (
    <div>
        <h1>
            Counter: {count}
        </h1>
        <div className='buttons'> 
            <button onClick={increase}>Increase Count</button>
            <button onClick={decrease}>Decrease Count</button>
        </div>
    </div>
  )
}

export default FunctionalCounter