import { useState } from 'react'

// anecdotes example application 
// for the University of Helsinki's fullstackopen 2022 program

const App = () => {

  const anecdotes = [
    '',
    'If it hurts, do it more often',
    'If not for the big bang, shey I go dey this side? Oluwa, HANDLE IT OH!',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  //storing state to pick anecdote based on index key
  const [selected, setSelected] = useState(0)

  // votes stores the number of times a vote has been made for each anecdote position
  const [votes, setVotes] = useState([0,0,0,0,0,0,0,0,0])
  
  // clicks stores the number of times a vote has been made, it is increased by voteForQuote
  const [clicks, setClicks] = useState(0)

  // clicks stores the number of times the change anecdote button has been clicked
  const [clicksAnec, setClicksAnec] = useState(0)

  //function to generate a random integer to set state for the anecdote index key
  const randomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  }

  //function to execute the random integer generation and randomize the anecdote state
  
  const newAnecdote = () => {
    let counter = clicksAnec;
    setClicksAnec(counter + 1)
    setSelected(randomInt(1, 8))
    console.log('newAnecdote(): Anecdote', selected, 'has been selected')
    return selected
  }

  // whichAnecdote specifies the anecdote by its position in the array 'anecdotes'
  let whichAnecdote = votes[selected]

  const voteForQuote = () => {
    let counter = clicks
    setClicks(counter + 1)
    let quoteCounter = [...votes]
    quoteCounter[selected] += 1
    setVotes(quoteCounter)
    console.log('voteForQuote(): Anecdote', selected, 'has been voted for', quoteCounter[selected], 'time(s)')
    return quoteCounter[selected]
  }

  const resetAll = () => {
    let zero = 0
    setClicks(zero)
    setClicksAnec(zero)
    setVotes([0,0,0,0,0,0,0,0,0])
    setSelected(zero)
  }

  return (
    <>
      <Anecdotes anecdotes={anecdotes} selected={selected}/>
      <VoteCount number={whichAnecdote}  selected={selected} />
      <Button text='Click here to generate a random anecdote'
      handleClick={newAnecdote}/>
      <VoteButton text='Vote' handleClick={voteForQuote} clicks={clicksAnec}/>
      <Button text='RESET ALL' handleClick={resetAll}/>
      <MostVotes clicks={clicks} anecdotes={anecdotes} selected={selected} votes={votes}/>
    </>
  )
}

const Anecdotes = ({anecdotes, selected}) => {
  return (
    <>  
      <h2>Anecdote of the day</h2>
      <div>
        <i>
          {anecdotes[selected]}
        </i>
      </div>
    </>
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

// vote button made to implement conditional rendering for the vote feature 
// so users can't vote for the placeholder anecdote
const VoteButton = ({text, handleClick, clicks}) => {

  if (clicks > 0) {
    return (
      <p>
        <button onClick={handleClick}>
          {text}
        </button>
      </p>
    )
  }

  return (
    <></>
  )
}

const VoteCount = ({selected, number}) => {
  if (selected > 0) {
    return (
      <p>
        This quote has <strong>{number}</strong> votes
      </p>
    )
  }
  return (
    <></>
  )
}

const MostVotes = ({clicks, anecdotes, selected, votes}) => {

  let firstPlace = Math.max(...votes)
  let index = votes.indexOf(firstPlace)
  if (clicks > 0) {
    return (
      <>
        <h2>Anecdote with the most votes</h2>
        <div>
        <i>
          {anecdotes[index]}
        </i>
      </div>
      <p>
        has <strong>{firstPlace}</strong> votes
      </p>
      </>
    )
  }

  return (
    <h5>
      Vote for a quote to show the anecdote with the most quotes
    </h5>
  )

}

export default App