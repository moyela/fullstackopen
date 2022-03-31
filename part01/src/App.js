import { useState } from 'react'

// unicafe example application 
// for the University of Helsinki's fullstackopen 2022 program

const App = () => {

  //state saves clicks of each feedback to the component state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let all = good + neutral + bad
  let average = good + (neutral * 0) + (bad * -1)
  let positivePercent = ((good / all) * 100) + ' %'
 

  const submitGood = () => setGood(good + 1)
  const submitNeutral = () => setNeutral(neutral + 1)
  const submitBad = () => setBad(bad + 1)

  return (
    <>
      <Sections sectionTitle='Give Feedback'/>

      <FeedbackButton text='Good' handleClick={submitGood} />
      <FeedbackButton text='Neutral' handleClick={submitNeutral} />
      <FeedbackButton text='Bad' handleClick={submitBad} />

      <Sections sectionTitle='Statistics' />

      <Statistics title='Good' figure={good}/>
      <Statistics title='Neutral' figure={neutral} />
      <Statistics title='Bad' figure={bad} />
      <Statistics title='Total Feedback' figure={all} />
      <Statistics title='Average' figure={average} />
      <Statistics title='Proportion of Positive votes' figure={positivePercent} />
    </>
  )
}

const Sections = ({sectionTitle}) => {
  return (
    <>
      <h1>{sectionTitle}</h1>
    </>
  )
}

const FeedbackButton = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = ({title, figure}) => {
  return (
    <h3>
      {title} {figure}
    </h3>
  )
}

export default App