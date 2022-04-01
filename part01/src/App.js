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

      <table>
        <tbody>
          <StatisticLine title='Good' figure={props.good} />
          <StatisticLine title='Neutral' figure={props.neutral} />
          <StatisticLine title='Bad' figure={props.bad} />
          <StatisticLine title='Total Feedback' figure={props.all} />
          <StatisticLine title='Average' figure={props.average} />
          <StatisticLine title='Proportion of Positive votes' figure={props.positive} />
        </tbody>
      </table>
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

const StatisticLine = ({title, figure}) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{figure}</td>
    </tr>
  )
}

export default App