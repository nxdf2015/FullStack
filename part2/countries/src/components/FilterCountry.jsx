import { Country } from "./Country";

export function FilterCountry({ filterCountry }) {

  if (filterCountry.length == 0)
    return null;
  else {
    return <div>
      {filterCountry.length == 1 ?

        <Country country={filterCountry[0]} />
        :
        <ul>
          {filterCountry.map(country => <li key={country.name.common}>{country.name.common}</li>)}

        </ul>}
    </div>;
  }

}
