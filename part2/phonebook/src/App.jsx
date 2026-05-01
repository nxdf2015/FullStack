import { useState } from 'react'
let id = 4

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState("")


  
  const addName = (e) => {
    e.preventDefault()
    if (persons.filter(person => person.name === newName).length > 0){
      alert(`${newName} already added to phonebook`)
      return
    }
     
    setPersons([...persons, { name : newName, number : newNumber, id : ++id}])

  }

  const handlerChangeName = (e)=>{
    const value= e.target.value
    setNewName(value)
  }

  const handlerChangeNumber = (e) => {
    const value = e.target.value 
    setNewNumber(value)

  }

  const handlerFilter = (e) => {
     const value = e.target.value 
      setFilter(value) 
  }




  

  return (
    <div>
      <h2>Phonebook</h2>
      <p>filter shown with <input value={filter} onChange={handlerFilter}/></p>
      <form>
        <div>
          name: <input value={newName} onChange={ handlerChangeName}/>
          number : <input value={newNumber} onChange={handlerChangeNumber}/>
        </div>
        <div>
          <button type="submit" onClick={addName}>add</button>
        </div>
      </form>
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
       
       {persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())).map(person => <p key={person.id} >{person.name} {person.number}</p>)} 
      
    </div>
  )
}

export default App
