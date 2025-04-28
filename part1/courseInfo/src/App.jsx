const Part = (props) => {
  return (
    <div>
      <p>{props.name}, Number of exercices: {props.nbreExos}</p>
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
      <Part name={props.part[0]} nbreExos={props.nbreExos[0]}/>
      <Part name={props.part[1]} nbreExos={props.nbreExos[1]}/>
      <Part name={props.part[2]} nbreExos={props.nbreExos[2]}/>
    </div>
  )
}
const Total = (props) => {
return(
  <div>
    <p> The total number of exercices is: {props.total}</p>
  </div>
)
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part={[part1,part2,part3]} nbreExos={[exercises1,exercises2,exercises3]}/>
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App
