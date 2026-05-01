


const Person = ({person, handlerDelete}) => {
    return <p >{person.name} {person.number}<button onClick={() => handlerDelete(person)}>delete</button></p>
}


export default Person