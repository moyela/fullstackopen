const App = () => {

  // const course = 'Half Stack application development'

  // const parts = [
  //   {
  //     name: 'Fundamentals of React',
  //     exercises: 10
  //   },
  //   {
  //     name: 'Using props to pass data',
  //     exercises: 7
  //   },
  //   {
  //     name: 'State of a component',
  //     exercises: 14
  //   }
  // ]

  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }


  return (
    <div>
      <Header info={course}/>

      <Content info={course}/>

      <Total info={course}/>
    </div>
  )
}

const Header = (props) => {
  return (
  <>
    <h1>{props.info.name}</h1>
  </>)
}

const Content = (props) => {
  return (
    <>
      <Part part={props.info.parts[0].name} exercises={props.info.parts[0].exercises}/>
      <Part part={props.info.parts[1].name} exercises={props.info.parts[1].exercises}/>
      <Part part={props.info.parts[2].name} exercises={props.info.parts[2].exercises}/>
    </>
  )
}

const Part = (props) => {
  return (
  <>
    <p>{props.part} {props.exercises}</p>
  </>
  )
}

const Total = (props) => {
  return (
  <>
    <p>Number of exercises {props.info.parts[0].exercises + props.info.parts[1].exercises + props.info.parts[2].exercises}</p>
  </>)
}

export default App