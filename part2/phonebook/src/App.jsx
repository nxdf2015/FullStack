import { useState, useEffect } from 'react'

import axios from 'axios'


import Filter from "./components/Filter"
import  FormPerson  from "./components/FormPerson"
import Persons from "./components/Persons"

import  phonebookService from "./phonebookService"
import Notification from './components/Notification'
 
const StatutNotification = {
  INFO : "info",
  ERROR : "error"
}
  

const App = () => {
  const [persons, setPersons] = useState([]) 
  
  const [filter, setFilter] = useState("")
  const [message, setMessage] = useState(null)
  const [typeNotification, setTypeNotification] = useState(StatutNotification.INFO)
 
 useEffect(  () => {
     
       phonebookService.getAll()
       .then(data => setPersons(data))     
  }, [])


  useEffect(() => {
    if (message){
      setTimeout(() => {setMessage(null)},5000)
    }
  },[message])
  
  
  const addName = (e, person) => {
    e.preventDefault()
    const id  = persons.findIndex(data => data.name == person.name)
    
    //person in phone book
    if (persons[id] ){
      if (confirm(`${person.name} is already added to the phonebook, replace the old number by the new one ?`)){
         phonebookService.updateOne({...person,  id :persons[id].id})
      
         .then((data)=>  phonebookService.getAll().then(data => setPersons(data)) )
         .then(() => {
          setTypeNotification(StatutNotification.INFO)
          setMessage(`number of ${person.name} replace by new number `)
         })
          .catch(err => {
          setTypeNotification(StatutNotification.ERROR)
          setMessage(`Information of ${person.name} has already removed server`)
          phonebookService.getAll().then(data => setPersons(data))
         })
         

       }

      return
    }

   phonebookService.addOne(person)
   .then(person => setPersons([...persons, { ...person, id : person.id}]))
    .then( () => {
            setTypeNotification(StatutNotification.INFO)
            setMessage(`Added ${person.name} `)
        })

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
      <Notification message={message} statut={typeNotification}/>
      <Filter filter={filter} handlerFilter={handlerFilter}/>

      <FormPerson onSubmit={addName}/>
      
      <h2>Numbers</h2>
       
      <Persons handlerDelete={handlerDelete} filter={filter} persons={persons}/>
      
    </div>
  )
}

export default App
 