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
      <IncreaseButton onClick={increase} />
      <DecreaseButton onClick={reduce} />
      <ResetButton onClick={reset} />
    </>
  )
}

const Display = (props) => {
  return (
    <h1>{props.counter}</h1>
  )
}

const IncreaseButton = (props) => {
  return (
    <button onClick={props.onClick}>
      Increase
    </button>
  )
}

const DecreaseButton = (props) => {
  return (
    <button onClick={props.onClick}>
      Decrease
    </button>
  )
}

const ResetButton = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>
        RESET
      </button>
    </div>
  )
}


export default App