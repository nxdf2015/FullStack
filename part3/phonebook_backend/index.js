

const express = require("express")
const data = require("./data")

const app = express()
const PORT =3000

app.get("/api/persons", (request,response) => {
    response.json(data)

})


app.get("/api/info", (request, response) => {
    const size = data.length
    const date = Date()

    response.json({size, date})
})


app.get("/api/persons/:id", (request, response)=>{
 
    const id = request.params.id

    const note = data.find(item => item.id === id)
    
    if (note){
        response.json(note)
    }
    else {
        response.status(404).end()

    }

})



app.listen(PORT, () => 
console.log(`server running on port ${PORT}`))
 