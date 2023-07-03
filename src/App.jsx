import { useState, useEffect } from 'react'
import Header from './components/Header'
import ExpensesList from './components/ExpensesList'
import Modal from './components/Modal'
import { generateId } from './helpers'
import NewExpenseIcon from './img/icono_gastos.svg'

function App() {
  const [expenses, setExpenses] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  );

  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  );
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastoEditar, setGastoEditar] = useState({});

  useEffect(() => {
    if( Object.keys(gastoEditar).length > 0 ) {
      setModal(true);

      setTimeout(() => {
        setAnimarModal(true);
      }, 500);
    }
  }, [gastoEditar])

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto) ?? 0;
  }, [presupuesto]);

  useEffect(() => {
    const presupuestoLS = localStorage.getItem('presupuesto');

    if(presupuestoLS > 0) {
      setIsValidPresupuesto(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(expenses) ?? []);
  }, [expenses]);

  const handleNewExpense = () => {
    setModal(true);
    setGastoEditar({});

    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  const saveExpense = expense => {
    if(gastoEditar.id) {
      const gastosActualiazdos = expenses.map( expenseState => expenseState.id === gastoEditar.id ? expense : expenseState);
      setExpenses(gastosActualiazdos);
      setGastoEditar({});

    } else {
      expense.id = generateId();
      expense.fecha = Date.now();
      setExpenses([...expenses, expense]);
    }

    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  };
  
  const eliminarGasto = id => {
    const updatedExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(updatedExpenses)
  };

  return (
    <div>
      <div className={modal ? 'fijar' : ''}>
          <Header
            expenses={expenses} 
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            isValidPresupuesto={isValidPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
          />

          {isValidPresupuesto && (
            <>
              <main>
                <ExpensesList 
                  expenses={expenses}
                  setGastoEditar={setGastoEditar}
                  eliminarGasto={eliminarGasto}
                />
              </main>
              <div className='nuevo-gasto'>
                <img 
                  src={NewExpenseIcon} 
                  alt="new expense icon" 
                  onClick={handleNewExpense}
                />
              </div>
            </>
          )}

          {modal && <Modal 
            setModal={setModal}
            animarModal={animarModal}
            setAnimarModal={setAnimarModal}
            saveExpense={saveExpense}
            gastoEditar={gastoEditar}
            setGastoEditar={setGastoEditar} 
          />}

        </div>
      </div>
  )
}

export default App
