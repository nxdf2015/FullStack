
  import { useEffect, useState } from "react";
import weatherService from "../services/weatherService";
  
  const  CountryDetails = (country) => {

  const { country: { name: { common }, languages, area, capital, flags: { png },capitalInfo : {latlng} }   }  = country;
 
  const [weather , setWeather] = useState(null) 
  const [lat, lon] = latlng
 
  useEffect(() => {
      weatherService.getWeather(lat, lon).then(response => {
        console.log(response)
        setWeather(response)
      })

  },[])



  return <div>

    
    <h1>{common} </h1>
    <p>Area {area} </p>
    <p>Capital {capital[0]}</p>
    <p>Languages</p>
    <ul>
      {Object.values(languages).map(language => <li key={language}>{language}</li>)}
    </ul>

    <img src={png} />
    <p>Weather in {common}</p>
    { weather ? 
    <div>
    <p>Temperature  {weather.temp} °C</p>
     <img src={weatherService.iconURL(weather.icon)}/>  
    <p>Wind {weather.speed} m/s</p>
  </div>
  : 
  null
     
  }
  </div>;

};


export default CountryDetails