import ReactDOM from 'react-dom'
import App from './App'

let counter = 1

const ticktock = () => {
  ReactDOM.render(
  <App counter={counter} />, 
  document.getElementById('root')
  )
}

setInterval(() => {ticktock(); counter += 1}, 1000)