import React from 'react'

const Clicker = ({message}) => {
    function handleClick(){
        alert(message)
    }
  return (
    <div>
        <button className='button-1' onClick={handleClick} >please click me</button>
       
    </div>
  )
}

export default Clicker
