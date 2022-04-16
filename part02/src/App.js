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
      },
      {
        name: 'Testing servers in React',
        exercises: 22,
        id: 4
      }
    ]
  }

  console.log('APP WORKS...')
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
      <Total course={course} />
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
      {course.parts.map(object => <p key={object.id}>{object.name} {object.exercises}</p>)}
    </>
  )
}

const Total = ({course}) => {

  let totalArray = course.parts.map(object => object.exercises)

  const sumOfArray = (first, remainder) => first + remainder
  let total = totalArray.reduce(sumOfArray)
  return (
    <h4>
      Total number of exercises is {total}
    </h4>
  )
}

export default App