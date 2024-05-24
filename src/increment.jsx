import React, { useState } from 'react'


function Increment (){
    const [num, setNum] = useState(1)

    function handleIncrement(){
        setNum(num + 1) 
        console.log(num)

    }

  return (
    <div className='add-btn'>
        <span>{num}</span>
      <button onClick={handleIncrement}>Add</button>
    </div>
  )
}

export default Increment
