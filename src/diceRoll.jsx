import React from 'react'

function DiceRoll(){
    const num1 = Math.floor(Math.random()*4) +1
    const num2 = Math.floor(Math.random()*4) +1
    const result =  num1===num2 ? "You Win" : "You Loose"
    const styles = {color:"violet"}
    const resultColor = {color: num1===num2 ? "green" : "red"}
    

    return (
    <div style={styles}>
    <p style={resultColor}> {result}</p>
    <p>number 1 :{num1}</p>
    <p>number 2 :{num2}</p>
    </div>
)
}

export default DiceRoll
