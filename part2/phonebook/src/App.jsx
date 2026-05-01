import { useState, useEffect } from 'react'

import axios from 'axios'


import Filter from "./components/Filter"
import  FormPerson  from "./components/FormPerson"
import Persons from "./components/Persons"

let id = 4

const App = () => {
  const [persons, setPersons] = useState([]) 
  
  const [filter, setFilter] = useState("")


 const baseURL = "http://localhost:3001/persons" 
 useEffect(() => {
      axios.get(baseURL)
      .then(response => response.data)
      .then(data => setPersons(data))
  }, [])
  
  const savePerson = (person) => {
    axios.post(baseURL, person)
    .then(response => response.data)
    .then(data => console.log())
  }
  const addName = (e, person) => {
    e.preventDefault()
    if (persons.filter(data => data.name === person.name).length > 0){
      alert(`${person.name} already added to phonebook`)
      return
    }
    savePerson(person)
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
