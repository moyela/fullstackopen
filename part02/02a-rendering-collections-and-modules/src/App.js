import Note from "./components/Note"

const App = ({notes}) => {

  return (
    <div>

      <h1>Notes</h1>
      <ol>
        {notes.map(note => <Note key={note.id} note={note}/>)}
      </ol>

    </div>
  )
}

export default App