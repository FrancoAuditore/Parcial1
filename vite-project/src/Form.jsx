import { useState } from "react"

const Form =()=>{

    const [sumbitedValues,setSubmitedValues] = useState('')
    const [nombre,setNombre] = useState('')
    const [comidaFavorita,setComidaFavorita] = useState('')
    const [error,setError] = useState('')
    
    //funciones input1
function handleChangeNombre(e){
  
  //console.log("hiciste un cambio");
  setNombre(e.target.value)
}

function handleChangeComidaFavorita(e){
   console.log(e)
   console.log("hiciste un cambio");
   setComidaFavorita(e.target.value)
 }
function handleSubmit(e){
  e.preventDefault()
  
  
  if(nombre.length < 3){
      
      console.error("revise el nombre ingresado")
      setError("Revise el nombre ingresado")
    }
    else if(comidaFavorita < 6  ){
        console.error("la comida tiene que tener almenos 6 caracteres")
        setError("la comida tiene que tener almenos 6 caracteres")
    }
    else{
    
    setError()
    
    setSubmitedValues({ 
        nombre,
        comidaFavorita,
    })
    setNombre('')
    setComidaFavorita('')
  }
 }


  return (
    <>
    Completa el siguiente Form:
    <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="nombre"> Nombre :</label>
      <input
      id="nombre"
      placeholder='Ingrese su nombre'
      value={nombre}
      onChange={handleChangeNombre}
        required
    />
      <label htmlFor="comidaFavorita">comidaFavorita</label>
      <input
      id="nombre"
      placeholder="ingrese su comidaFavorita"
      value={comidaFavorita}
    onChange={handleChangeComidaFavorita}
    required
    
    />
    </div>
      <button type="submit">Enviar</button>
    </form> 
    {sumbitedValues ?(
        <div>
            <p>Nombre : {sumbitedValues.nombre}</p>
            <p>Comida favorita : {sumbitedValues.comidaFavorita}</p>
        </div>
    ): undefined}
    </>
  )
}

export default Form