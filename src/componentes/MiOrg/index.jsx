
import "./MiOrg.css"

const MiOrg= (props) =>{
// Estado -hooks
// useState()-> es una funcion 
// const [nombre__De__Variable, función (Qué actualiza)]= useState (ValorInicial)
// condicon && SeMuestra

return <section className="orgSection">
        <h3 className="title"> Mi organización </h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}></img>
    </section>

}
export default MiOrg
