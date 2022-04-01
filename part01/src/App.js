import { useState } from 'react'

// anecdotes example application 
// for the University of Helsinki's fullstackopen 2022 program

const App = () => {

  const anecdotes = [
    '',
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  //storing state to pick anecdote based on index key
  const [selected, setSelected] = useState(0)

  //function to generate a random integer to set state for the anecdote index key
  const randomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  }

  //function to execute the random integer generation and randomize the anecdote state
  const newAnecdote = () => {
    setSelected(randomInt(1, 7))
    console.log('Anecdote', selected, 'has been selected')
    return selected
  }

  let votes = [0, 0, 0, 0, 0, 0, 0, 0]

  const voteForQuote = () => {
    whichAnecdote += 1
    console.log('Anecdote', selected, 'has been voted for', whichAnecdote, 'time(s)')
    return whichAnecdote
  }

  let whichAnecdote = votes[selected]

  return (
    <>
      <Anecdotes anecdotes={anecdotes} selected={selected}/>
      <VoteCount number={voteForQuote()}  selected={selected} />
      <Button text='Click here to generate a random anecdote'
      handleClick={newAnecdote}/>
      <Button text='Vote' handleClick={voteForQuote}/>
    </>
  )
}

const Anecdotes = ({anecdotes, selected}) => {
  return (
    <h3>
      {anecdotes[selected]}
    </h3>
  )
}

const Button = ({text, handleClick}) => {
  return (
    <p>
      <button onClick={handleClick}>
        {text}
      </button>
    </p>
  )
}

const VoteCount = ({selected, number}) => {
  if (selected > 0) {
    return (
      <div>
        This quote has {number} votes
      </div>
    )
  }
  return (
    <></>
  )
}

export default App