import React from 'react'

const Numbers = ({numvalues}) => {
    const randomindex = Math.floor(Math.random()*numvalues.length)
    const randomNumber = numvalues[randomindex]
  return (
    <div>
    <p>{numvalues}</p>
    <p>Random number is {randomNumber}</p>
    </div>
  )
}

export default Numbers
