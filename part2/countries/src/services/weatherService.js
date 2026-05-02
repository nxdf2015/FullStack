
import axios from "axios"

const APIkey = import.meta.env.VITE_key


const baseURL = (lat, lon) => `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`

const iconURL = (icon) => `https://openweathermap.org/payload/api/media/file/${icon}.png`

  

const getWeather = (lat, lon) => axios.get(baseURL(lat,lon))
 .then(response => response.data)
 .then(({ wind : {speed} , weather , main : {temp  }}) => {
    const {icon , description }= weather[0] 
    return {icon, speed, temp} 
 })
// {
// wind : {speed }
// weather : [ { icon }]
// main : { temp }

// }

export default { getWeather , iconURL }