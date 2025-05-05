import { useState } from 'react'
const Header=()=><div><h1>Give Feedback</h1></div>
const Button=({name,onClick})=><button onClick={onClick}>{name}</button>
const Statistics=({good,neutral,bad})=>{

  const total=good+neutral+bad
  const average=(good-bad)/(total)
  const positive=good*100/total

  if(total==0){
    return(
    <div>
      <h1>Statistics</h1>
      No feedback given
    </div>)
  }
  return(
    <div>
      <h1>Statistics</h1>
      
      <table>
        <tr> <td>Good </td>      <td>{good}</td>       </tr>
        <tr> <td>Neutral </td>   <td>{neutral}</td>    </tr>
        <tr> <td>Bad </td>       <td>{bad}</td>        </tr>
        <tr> <td>All </td>       <td>{total}</td>      </tr>
        <tr> <td>Average </td>   <td>{average}</td>    </tr>
        <tr> <td>Positive </td>  <td>{positive} %</td> </tr>
      </table>
      
    </div>
  )
}

const App = () => {

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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App