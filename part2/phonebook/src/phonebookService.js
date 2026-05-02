


import axios from "axios";


const baseURL = "http://localhost:3001/persons" 

 

const getAll = () => axios.get(baseURL).then(response => response.data)


const addOne = (person) => axios.post(baseURL, person).then(response => response.data )


const deleteOne  = (id) =>  axios.delete(`${baseURL}/${id}`)

const updateOne = (person) => axios.put(`${baseURL}/${person.id}`, person).then(response => response.data)


export default { getAll, addOne, deleteOne, updateOne}