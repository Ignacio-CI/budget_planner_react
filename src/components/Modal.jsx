import { useState } from 'react';
import Message from './Message';
import CerrarBtn from "../img/cerrar.svg";

const Modal = ({ setModal, animarModal, setAnimarModal, saveExpense }) => {
  const [mensaje, setMensaje] = useState('');
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [categoria, setCategoria] = useState('');

  const hideModal = () => {
    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleSubmit = e => {
    e.preventDefault();
    
    if([nombre, cantidad, categoria].includes('')) {
      setMensaje('Todos los campos son obligatorios');

      setTimeout(() => {
        setMensaje('');
      }, 2000);

      return;
    }

    saveExpense({nombre, cantidad, categoria});
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="cerrar modal" onClick={hideModal} />
      </div>

      <form 
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? "animar" : "cerrar"} `}
      >
        <legend>Nuevo Gasto</legend>

        {mensaje && <Message tipo="error">{mensaje}</Message>}

        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input 
            id="nombre"
            type="text" 
            placeholder="Añade el nombre del gasto"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input 
            id="cantidad"
            type="number" 
            placeholder="Añade la cantidad del gasto ej. 300"
            value={cantidad}
            onChange={e => setCantidad(Number(e.target.value))}
          />
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoría</label>
          <select 
            name="categoria" 
            id="categoria"
            value={categoria}
            onChange={e => setCategoria(e.target.value)}
          >
            <option value="">-- Seleccione --</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="Salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>

        <input type="submit" value="Añadir gasto"/>
      </form>
    </div>
  );
};

export default Modal;