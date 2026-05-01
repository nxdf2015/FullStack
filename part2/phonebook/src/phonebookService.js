


import axios from "axios";


const baseURL = "http://localhost:3001/persons" 

 

const getAll = () => axios.get(baseURL).then(response => response.data)


const addOne = (person) => axios.post(baseURL, person).then(response => response.data )


const deleteOne  = (id) => {
    console.log(id)
    return axios.delete(`${baseURL}/${id}`)
}

export default { getAll, addOne, deleteOne}