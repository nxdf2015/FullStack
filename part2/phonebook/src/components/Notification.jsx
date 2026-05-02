
import  "../index.css"

const Notification = ({message, statut }) => {
    if (message == null){
        return null
    }
    else {
        return <div className={ statut === "error" ? "error" : "message"}>
            {message}
        </div>
    }
}


export default Notification