
import { useState } from "react"

import CountryDetails from "./CountryDetails"

const Country = ({country}) => {
const [visibility, tooglevisibility] = useState(false)
 

return <div>
  {country.name.common}<button onClick={() => tooglevisibility(!visibility)}>{ visibility ? "Hide" : "Show" }</button>
  { visibility ? <CountryDetails country={country}/> : null } 

</div>}




export default Country