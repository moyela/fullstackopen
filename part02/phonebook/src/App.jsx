import { useState } from 'react'
import Numbers from './components/Numbers'
import './App.css'

const App = () => {
  const everyone = [
    { first_name: 'Arto', last_name: 'Hellas' }
  ]

  const [persons, setPersons] = useState(everyone)
  const [newName, setNewName] = useState('')
  const [newLastName, setNewLastName] = useState('')

  const addNewPerson = (event) => {
    event.preventDefault()

    const personObject = {first_name: newName, last_name: newLastName}

    const doesNameAlreadyExist = (personDatabase) => {
      if (personDatabase.first_name === newName && personDatabase.last_name === newLastName) {
        return true
      }

      else {
        return false
      }
       
    }

    if (persons.every(doesNameAlreadyExist) === false) {
      setPersons(persons.concat(personObject))
    }
    else {
      alert('That name has already been added to the phonebook.')
    }



  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleLastNameChange = (event) => {
    setNewLastName(event.target.value)
  }


  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Add a contact:</h2>

      <form onSubmit={addNewPerson}>
        <div>
          first name: <input value={newName} onChange={handleNameChange} />
          last name: <input value={newLastName} onChange={handleLastNameChange} />
        </div>

        <div>
          <button type="submit">add</button>
        </div>

      </form>

      <h2>Numbers</h2>

      <ul>
        {persons.map((person, index) => <Numbers person={person} key={index}/> )}
      </ul>

    </div>
  )
}

export default App
