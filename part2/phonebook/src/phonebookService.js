


import axios from "axios";

const PORT = 3000  // phone_book backend 
//const PORT = 3000  // json-server 



const baseURL = `/api/persons` 

 

const getAll = () => axios.get(baseURL).then(response => response.data)


const addOne = (person) => axios.post(baseURL, person).then(response => response.data )


const deleteOne  = (id) =>  axios.delete(`${baseURL}/${id}`)

const updateOne = (person) => axios.put(`${baseURL}/${person.id}`, person, {
    validateStatus : status => status <  400 
}).then(response => response.data) 


export default { getAll, addOne, deleteOne, updateOne}