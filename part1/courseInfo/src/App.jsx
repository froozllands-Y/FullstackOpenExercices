const Part = (props) => {
  return (
    <div>
      <p>Part's name: {props.name}, Number of exercices: {props.nbreExos}</p>
    </div>
  )
}
const Header = (props) => {
  return (
    <h1>Title: {props.course}</h1>
  )
}
const Content = (props) => {

  return(
    <div>
      <Part name={props.parts[0].name} nbreExos={props.parts[0].exercices}/>
      <Part name={props.parts[1].name} nbreExos={props.parts[1].exercices}/>
      <Part name={props.parts[2].name} nbreExos={props.parts[2].exercices}/>
    </div>
  )
}
const Total = (props) => {
return(
  <div>
    <p> The total number of exercices is: {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</p>
  </div>
)
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} />
      <Total parts={parts}/>
    </div>
  )
}

export default App
