import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton"

const Formulario =(props) =>{
    const[nombre, actualizarNombre]= useState("")
    const[puesto, actualizarPuesto]= useState("")
    const[foto, actualizarFoto]= useState("")
    const[equipo, actualizarEquipo]= useState("")
    const [titulo, actualizarTitulo]= useState("")
    const [color, actualizarColor]= useState("")
    const {registrarColaborador, crearEquipo}= props

    const informacion=(event)=>{
        event.preventDefault()
        let datosEnviar= {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosEnviar)
    }
    const manejarNuevoEquipo=(event) =>{
        event.preventDefault()
        crearEquipo({titulo, colorPrimario:color})
    }
    return <section className="formulario" >
        <form onSubmit={informacion}>
            <h2> Rellena el formulario para crear el colaborador</h2>
             <Campo tittle="Nombre" 
             placeholder="Ingresar Nombre" 
             required 
             valor ={nombre} actualizarValor={actualizarNombre} />
             
             <Campo tittle="Puesto" 
             placeholder="Ingresar Puesto" 
             required 
             valor={puesto} actualizarValor={actualizarPuesto} />

             <Campo tittle="Foto" 
             placeholder="Ingresar enlace de Foto" 
             required 
             valor={foto} actualizarValor={actualizarFoto}/>
             
             <ListaOpciones 
             valor={equipo} 
             actualizarEquipo={actualizarEquipo} 
             equipos={props.equipos}
             />

             <Boton> Crear </Boton>
        </form>

  <form onSubmit={manejarNuevoEquipo}>
            <h2> Rellena el formulario para crear el equipo</h2>
             <Campo tittle="Titulo" 
             placeholder="Ingresar titulo" 
             required 
             valor ={titulo} actualizarValor={actualizarTitulo} />
             
             <Campo tittle="Color" 
             placeholder="Ingresar color en Hex" 
             required 
             valor={color} 
             actualizarValor={actualizarColor} 
             type="color"
             />
            
            <Boton> Registrar Equipo </Boton>
            </form>

        
    </section>
}
export default Formulario