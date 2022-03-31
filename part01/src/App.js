import { useState } from 'react'

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  const clearCache = () => {
    setAll([])
    setLeft(0)
    setRight(0)
  }

  return (
    <div>
      <h1>
        {left}
      </h1>
      <Button text='UP' handleClick={handleLeftClick}/>
      <Button text='DOWN' handleClick={handleRightClick} />
      <Button text='CLEAR' handleClick={clearCache} />
      <h1>
        {right}
      </h1>
      <History historyArray={allClicks}/>
    </div>
  )
}

const History = ({historyArray}) => {
  if (historyArray.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons above
      </div>
    )
  }
  return (
    <div>
      BUTTON PRESS HISTORY: {historyArray.join(' ')}
    </div>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

export default App