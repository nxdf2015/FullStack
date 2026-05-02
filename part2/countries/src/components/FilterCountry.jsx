import {useState } from "react"

import CountryDetails  from "./CountryDetails";
import Country from "./Country";




export default function FilterCountry({ filterCountry }) {
  
  const [visible, toggleVisibility] = useState(null)

  if (filterCountry.length == 0)
    return null;
  else {
    return <div>
      {filterCountry.length == 1 ?

        <CountryDetails country={filterCountry[0]} />
        :
        <ul>
          {filterCountry.map((country,id) => 
          <li key={country.name.common}> 
          <Country country={country}/>
          </li>)}

        </ul>}
    </div>;
  }

}
