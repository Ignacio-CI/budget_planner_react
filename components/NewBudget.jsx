import { useState } from "react";
import Message from "./Message";
const NewBudget = ({ presupuesto, setPresupuesto, setIsValidPresupuesto }) => {

  const [mensaje, setMensaje] = useState('');

  const handlePresupuesto = (e) => {
    e.preventDefault()

    if(!(presupuesto) || (presupuesto) < 0) {
      setMensaje('No es un presupuesto valido');
      return;
    } 

    setMensaje('');
    setIsValidPresupuesto(true);
    
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
            <label htmlFor="">Definir presupuesto</label>
            <input 
                type="number" 
                className="nuevo-presupuesto"
                placeholder="Añade tu presupuesto"
                value={presupuesto}
                onChange={ e => setPresupuesto(Number(e.target.value))}
            />
        </div>

        <input type="submit" value="Añadir" />

        {mensaje && <Message tipo="error">{mensaje}</Message>} 
      </form>
    </div>
  )
}

export default NewBudget
