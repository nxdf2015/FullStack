import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  
  const addName = (e) => {
    e.preventDefault()
    setPersons([...persons, { name : newName}])

  }

  const handlerChange = (e)=>{
    const value= e.target.value
    setNewName(value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={ handlerChange}/>
        </div>
        <div>
          <button type="submit" onClick={addName}>add</button>
        </div>
      </form>
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
      <ul>
       {persons.map(person => <li key={person.name}>{person.name}</li>)} 
      </ul>
    </div>
  )
}

export default App
