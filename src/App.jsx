import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import { generateId } from './helpers'
import NewExpenseIcon from './img/icono_gastos.svg'

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [expenses, setExpenses] = useState([]);

  const handleNewExpense = () => {
    setModal(true);

    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  const saveExpense = expense => {
    expense.id = generateId();
    setExpenses([...expenses, expense]);

    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  };
  

  return (
    <div>
      <Header 
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <div className='nuevo-gasto'>
          <img 
            src={NewExpenseIcon} 
            alt="new expense icon" 
            onClick={handleNewExpense}
          />
        </div>
      )}

      {modal && <Modal 
        setModal={setModal}
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
        saveExpense={saveExpense}
      />}

    </div>
  )
}

export default App
