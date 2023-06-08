import "./Campo.css"

const Campo =(props) =>{
   
    const placeholderModificado= `${props.placeholder}...`
// Destructuración del código
const {type="text" }= props


    const manejarCambio=(e)=>{
         props.actualizarValor(e.target.value)
    }
    
    
    return <div className={`campo campo-${type}`}> 
    

    <label> {props.tittle} </label>
    <input
    placeholder={placeholderModificado} 
    required={props.required} 
    value={props.valor}
    onChange={manejarCambio}
    type={type}

    />
    </div>
}
export default Campo