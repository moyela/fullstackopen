import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )

  // console.log('rendering...', counter)

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
      <h1>{counter}</h1>
      <button onClick={increase}>
        Increase
      </button>
      <button onClick={reduce}>
        Decrease
      </button>
      <div>
      <button onClick={reset} >
        RESET
      </button>
      </div>
    </>
  )
}

export default App