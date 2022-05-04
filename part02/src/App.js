const App = () => {

  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        },
        {
          name: 'Testing servers in React',
          exercises: 22,
          id: 5
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

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
      {course.map(object => <h1 key={object.id}>{object.name}</h1>)}
    </>
  )
}

const Content = ({course}) => {
  let courseContent = course.map(object => {

    const list = object.parts
    
    return (
      <p key={list.id}>{list.name} {list.exercises}</p>
      )
   }
  )

  return (
    <>
      {courseContent}
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