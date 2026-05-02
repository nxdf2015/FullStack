
  const  CountryDetails = (country) => {

  const { country: { name: { common }, languages, area, capital, flags: { png } } } = country;

  return <div>

    
    <h1>{common} </h1>
    <p>Area {area} </p>
    <p>Capital {capital[0]}</p>
    <p>Languages</p>
    <ul>
      {Object.values(languages).map(language => <li key={language}>{language}</li>)}
    </ul>

    <img src={png} />

  </div>;

};


export default CountryDetails