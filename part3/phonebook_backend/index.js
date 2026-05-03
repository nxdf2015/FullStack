

const express = require("express")
const data = require("./data")

const app = express()
const PORT =3000

app.get("/api/persons", (request,response) => {
    response.json(data)

})


app.listen(PORT, () => 
console.log(`server running on port ${PORT}`))
 