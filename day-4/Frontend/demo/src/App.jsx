
import { useState } from 'react'
import axios from 'axios'


export const App = () => {

  const [Notes, setNotes] = useState([])

  axios.get("http://localhost:3000/api/notes")
  .then(res =>{
    setNotes(res.data.notes)
  })
  return (
    <div className="notes">
      {Notes.map(note =>{
        return <div className="note">
          <h1>{note.title}</h1>
          <p>{note.discription}</p>
        </div>
      })}
    </div>
  )
}

export default App
