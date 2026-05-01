
import { useState } from "react"

const FormPerson = ({onSubmit }) => {
const [name, setNewName] = useState('')
const [number, setNewNumber] = useState('')

const handlerChangeName = (e)=>{
    const value= e.target.value
    setNewName(value)
  }

const handlerChangeNumber = (e) => {
    const value = e.target.value 
    setNewNumber(value)

  }


return <form>
        <div>
            name: <input value={name} onChange={ handlerChangeName}/>
            number : <input value={number} onChange={handlerChangeNumber}/>
            </div>
            <div>
            <button type="submit" onClick={(e) => onSubmit(e, {name, number })}>add</button>
            </div>
            
    </form>}


export default FormPerson


