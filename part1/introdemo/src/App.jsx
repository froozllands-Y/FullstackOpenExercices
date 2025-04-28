const Hello = (props) => {
  console.log(props)
  return(
    <div>
      <p>Hello {props.name}, you are {props.age} year old</p>
    </div>
  )
}
const App = () => {
  const name='albert'
  const age=50
  return (
    <div>
      <p>
        <h1>Greetings</h1>
        <Hello name='angelo' age={26+10}/>
        <Hello name={name} age={age}/>
        <Hello name='Présyle' age='56' />
        <Hello name='Bella' age='26'/>
      </p>
    </div>
  )
}

export default App