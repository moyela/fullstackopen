import { useState } from 'react'

// unicafe example application 
// for the University of Helsinki's fullstackopen 2022 program

const App = () => {

  //state saves clicks of each feedback to the component state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let all = good + neutral + bad
  let average = (good - bad) / 3
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

      <Statistics good={good} bad={bad} neutral={neutral} all={all} average={average} positive={positivePercent}/>

    </>
  )
}

const Statistics = (props) => {

  if (props.all === 0) {
    return (
      <>
        <Sections sectionTitle='Statistics' />
        <div>NO FEEDBACK GIVEN. CLICK ABOVE TO GIVE FEEDBACK</div>
      </>
    )
  }
  
  return (
    <>
      <Sections sectionTitle='Statistics' />

      <Entries title='Good' figure={props.good} />
      <Entries title='Neutral' figure={props.neutral} />
      <Entries title='Bad' figure={props.bad} />
      <Entries title='Total Feedback' figure={props.all} />
      <Entries title='Average' figure={props.average} />
      <Entries title='Proportion of Positive votes' figure={props.positive} />
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

const Entries = ({title, figure}) => {
  return (
    <h3>
      {title} {figure}
    </h3>
  )
}

export default App