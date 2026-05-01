
import Person from "./Person"

const Persons = ({filter, persons, handlerDelete}) => 
<>
{persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())).map(person => 
<Person key={person.id} person={person} handlerDelete={handlerDelete} />)} 
</>



export default Persons
