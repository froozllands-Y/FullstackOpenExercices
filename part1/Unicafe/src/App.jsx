import { useState } from 'react'
const Header=()=><div><h1>Give Feedback</h1></div>
const Button=({name,onClick})=><button onClick={onClick}>{name}</button>
const Display=({good,neutral,bad})=>{
  return(
    <div>
      <h1>Statistics</h1>
      <br/>Good: {good}
      <br/>Neutral: {neutral}
      <br/>Bad: {bad}
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick=()=>{
    setGood(good+1)
    console.log('good: ',good+1)
  }
  const handleNeutralClick=()=>{
    setNeutral(neutral+1)
    console.log('neutral: ',neutral+1)
  }
  const handleBadClick=()=>{
    setBad(bad+1)
    console.log('bad: ',bad+1)
  }
  return (
    <div>
      <Header/>
      <Button name='good' onClick={handleGoodClick}/>
      <Button name='neutral' onClick={handleNeutralClick}/>
      <Button name='bad' onClick={handleBadClick}/>
      <Display good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App