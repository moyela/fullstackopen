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
      <Button onClick={increase} function='Increase'/>
      <Button onClick={reduce} function='Decrease' />
      <Button onClick={reset} function='RESET' />
    </>
  )
}

const Display = (props) => {
  return (
    <h1>{props.counter}</h1>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.function}
    </button>
  )
}


export default App