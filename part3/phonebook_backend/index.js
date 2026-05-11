

const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

let  data = require("./data")

const app = express()

app.use(express.json())

const PORT =process.env.PORT || 3000



morgan.token("post", function(req,res){
  if (req.method == "POST"){
    const body = req.body

    return JSON.stringify(body)
  }
})

app.use(cors())
app.use(morgan("tiny"))
app.use(morgan(":post"))



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

app.delete("/api/persons/:id", (request, response) => {
    const id = request.params.id 

    data = data.filter(item => item.id !== id)
    
    response.status(204).end()
})


app.post("/api/persons", (request, response) => {

  if (!request.body){
    response.status(400).json({"error" : "content missing"})
  }
  else if (!(request.body.name && request.body.number)){
    response.status(400).json({"error" : "name or number missing" })
  }
  else if (data.filter(item => item.name === request.body.name).length == 1){
    response.status(400).json({ "error" : "name must be unique"})
  }
  else
    {
        
      const {name , number } = request.body
      
      const id  = Math.floor(Math.random() * 10000 + 1)
      const newItem = {name   , number  , id}
      
      data.push(newItem)

      response.json(newItem)
  }
})


app.listen(PORT, () => 
console.log(`server running on port ${PORT}`))
 