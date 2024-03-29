import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true
  },
  {
    id: 4,
    content: 'A 440 error code means no data was found',
    important: true
  }
]

ReactDOM.render(
  <App notes={notes} />, 
  document.getElementById('root')
)