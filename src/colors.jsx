import React from 'react'

const Colors = ({values}) => {
    const randomIndex = Math.floor(Math.random()*values.length)
    const randomElement = values[randomIndex]
    return (
    <div>
    <p>{values}</p>
    <p>Random element is {randomElement}</p>
    </div>
)
}

export default Colors
