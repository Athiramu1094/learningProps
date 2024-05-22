import Colors from './colors'
import Numbers from './numbers'
import DiceRoll from './diceRoll'

import './App.css'

function App() {
  

  return (
    <>
    <Colors values={["red","green","white"]}/>
    <Numbers numvalues={[1,2,3]}/>
    <DiceRoll/>
    </>
  )
}

export default App
