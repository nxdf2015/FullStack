import { useState, useEffect } from 'react'

import axios from 'axios'


import Filter from "./components/Filter"
import  FormPerson  from "./components/FormPerson"
import Persons from "./components/Persons"

import  phonebookService from "./phonebookService"

 

const App = () => {
  const [persons, setPersons] = useState([]) 
  
  const [filter, setFilter] = useState("")
   

 
 useEffect(  () => {
     
       phonebookService.getAll()
       .then(data => setPersons(data))
       
     
        
  }, [])
  
  
  const addName = (e, person) => {
    e.preventDefault()
    if (persons.filter(data => data.name === person.name).length > 0){
      alert(`${person.name} already added to phonebook`)
      return
    }
   phonebookService.addOne(person)
   .then(person => setPersons([...persons, { ...person, id : person.id}]))

  }
  

  const handlerDelete = ({id, name}) => {
      
    if (confirm(`delete ${name} ? `)){
        phonebookService.deleteOne(id)
        .then(data => {
          phonebookService.getAll()
          .then(data => setPersons(data))
        })
    }
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
       
      <Persons handlerDelete={handlerDelete} filter={filter} persons={persons}/>
      
    </div>
  )
}

export default App
 