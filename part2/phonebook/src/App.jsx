import { useState } from 'react'

import Filter from "./components/Filter"
import  FormPerson  from "./components/FormPerson"
import Persons from "./components/Persons"

let id = 4

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 

  const [filter, setFilter] = useState("")


  
  const addName = (e, person) => {
    e.preventDefault()
    if (persons.filter(data => data.name === person.name).length > 0){
      alert(`${person.name} already added to phonebook`)
      return
    }
     
    setPersons([...persons, { ...person, id : ++id}])

  }



  const handlerFilter = (e) => {
     const value = e.target.value 
      setFilter(value) 
  }




  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handlerFilter={handlerFilter}/>

      <FormPerson onSubmit={addName}/>
      
      <h2>Numbers</h2>
       
      <Persons filter={filter} persons={persons}/>
      
    </div>
  )
}

export default App
