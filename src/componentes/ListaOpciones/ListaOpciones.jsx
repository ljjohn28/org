import "./ListaOpciones.css"

const ListaOpciones =(props)=>{
    /* Metodo map -> arreglo.map((equipos, index)=>{

    })
    */
       const manejarCambio=(e)=>{
        props.actualizarEquipo(e.target.value)
    }
    return <div className="lista-opciones">
        <label> Equipos    </label>
        <select value={props.valor} onChange={manejarCambio}> 
        <option value="" disabled defaultValue="" hidden> Selecionar equipo </option>
           {props.equipos.map((equipo, ListaOpciones)  =>{
           
            return <option key={ListaOpciones} value={equipo}>   {equipo} </option>
           })}
        </select>
    </div>
};
export default ListaOpciones