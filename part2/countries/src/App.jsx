import { useState, useEffect } from "react"

import Service from "./CountryService"
import { FilterCountry } from "./components/FilterCountry"

function App() {
  const [country, setCountry] = useState("")
  const [countries, setCountries] = useState([])
  const [filterCountry, setFilterCountry] = useState([])

  const [message, setMessage] = useState(null)
  
  const findCountry = (data) => {
    const selectedCountry = countries.filter(country =>  country.name.common.toLowerCase().includes(data.toLowerCase()))
    if (selectedCountry.length > 10){
      setMessage("Too many matches, specify another filter")
    }
    else  {
      setFilterCountry(selectedCountry)
    }
    
  }
  
  useEffect(() => {
      Service.getAll()
      .then(data => setCountries(data))
  },[])
  
  useEffect(() => {
  if (message){
    setTimeout(() => setMessage(null),5000)
  }
  },[message])

  const handlerChange = e => {
    const newCountry = e.target.value
    setCountry(newCountry)
    findCountry(newCountry)
  }
  return <div>
    <h1>Countries</h1>
    load {countries.length}
      <div>
        <label>Find Countries
          <input type="text" value={country} onInput={handlerChange}/>
        </label>
        {message}
      </div>
      <div>
    {filterCountry.length}
     <FilterCountry filterCountry={filterCountry}/>
      </div>
  </div>

}





export default App