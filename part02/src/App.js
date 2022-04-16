const App = () => {

  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 50,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

const Course = ({course}) => {
  return (
    <>
      <Header course={course}/>
      <Content course={course}/>
    </>

  )
}

const Header = ({course}) => {
  console.log(course)
  return (
  <>
    <h1>{course.name}</h1>
  </>)
}

const Content = ({course}) => {
  return (
    <>
      <Part course={course}/>
    </>
  )
}

const Part = ({course}) => {
  console.log(course.parts.name, course.parts.exercises)
  return (
  <>
    {course.map( course => <p>{course.parts.name} {course.parts.exercises}</p>)}
  </>
  )
}

export default App