import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increase = () => {
  
    setCounter(counter + 1)
    console.log('... plus one equals ... ' + counter)
  }

  const reduce = () => {

    setCounter(counter - 1)
    console.log('... when one is removed we have ... ' + counter)
  }

  const reset = () => {

    setCounter(0)
    console.log('value is reset to zero')
  }
  return (
    <>
      <Display counter={counter} />
      <Button onClick={increase} functions='Increase'/>
      <Button onClick={reduce} functions='Decrease' />
      <Button onClick={reset} functions='RESET' />
    </>
  )
}

const Display = ({counter}) => {
  return (
    <h1>{counter}</h1>
  )
}

const Button = ({onClick, functions}) => {
  return (
    <button onClick={onClick}>
      {functions}
    </button>
  )
}


export default App