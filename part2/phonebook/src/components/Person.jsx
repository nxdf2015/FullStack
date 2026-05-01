


const Person = ({person, handlerDelete}) => {
    return <p >{person.name} {person.number}<button onClick={() => handlerDelete(person.id)}>delete</button></p>
}


export default Person