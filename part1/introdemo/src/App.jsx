import { useState } from 'react'

const Button = ({buttonName,onClick})=> <button onClick={onClick}>{buttonName}</button>
/* 
const Display =({counter})=> <div>{counter}</div>


const App = () => {
  const [ counter, setCounter ] = useState(0)
  console.log('rendering with counter value', counter)
  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)
  const negate = () => setCounter(-counter)

  return (
    <div>
      <Display counter={counter} />
      <Button buttonName="plus" onClick={increaseByOne} />
      <Button buttonName="zero" onClick={setToZero} />
      <Button buttonName="negate" onClick={negate} />
    </div>
  )
} */

 /*  const App = () => {
    const[clicks,setclicks]=useState({
      left:0,
      right:0
    })
    const handleLeftClick=()=>{
      setclicks({
        ...clicks,
        left:clicks.left+1
      })
    }

    const handleRightClick=()=>{
      setclicks({
        ...clicks,
        right:clicks.right+1
      })
    }
    return(
      <div>
        {clicks.left}
        <button onClick={handleLeftClick}>Left</button>
        <button onClick={handleRightClick}>Right</button>
        {clicks.right}
      </div>
    )
  } */
    const History=(props)=>{
      console.log('props value is',props,'et je dis salut')
      const allClicks=props.clicksHistory
      if(allClicks==0){
        return(
          <div>
            the app is used by pressing the buttons
          </div>
        )
      }
      return(
        <div>
          {allClicks.join(' * ')}
        </div>
      )
    }

/*    const App = () => {
      const [left, setLeft] = useState(0)
      const [right, setRight] = useState(0)
      const [allClicks,setallClicks]=useState([])
      const [total,setTotal]=useState(0)

      const handleLeftClick=()=>{
        setLeft(left + 1)
        setallClicks(allClicks.concat('L'))
        setTotal(total+1)
      }
      const handleRightClick=()=>{
        setRight(right+1)
        
        setallClicks(allClicks.concat('R'))
        setTotal(total+1)
      }

      return (
        <div>
          {left}
          <Button buttonName='Left' onClick={handleLeftClick} />
          <Button buttonName='Right' onClick={handleRightClick}/>
          {right}
          <br/>clicks history
          {<br/>{allClicks.join(' * ')} }
          <History clicksHistory={allClicks} />
          <br/>The total of cliks is: {total}
        </div>
      )
    } */
      const App = () => {
        const [value, setValue] = useState(10)
        
      
        const setToValue = (newValue) => () => {
          console.log('value now', newValue)  // print the new value to console
          setValue(newValue)
        }
        
        return (
          <div>
            {value}
      
            <button onClick={setToValue(1000)}>thousand</button>
            <button onClick={setToValue(0)}>reset</button>
            <button onClick={setToValue(value + 1)}>increment</button>
          </div>
        )
      }
export default App