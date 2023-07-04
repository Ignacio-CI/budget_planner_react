import React from 'react'
import Expense from './Expense'

const ExpensesList = ({ expenses, setGastoEditar, eliminarGasto, filtro, gastosFiltrados }) => {
  return (
    <div className='listado-gastos contenedor'>

      { filtro ? (
          <>
            <h2>{gastosFiltrados.length ? 'Gastos' : 'No hay gastos aún en esta categoría'}</h2>
            {gastosFiltrados.map( expense => (
                <Expense 
                key={expense.id}
                expense={expense}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}               
            />
            ))}
          </>
        ) : (
        <>
          <h2>{expenses.length ? 'Gastos' : 'No hay gastos aún'}</h2>
          {expenses.map( expense => (
                <Expense 
                key={expense.id}
                expense={expense}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}               
            />
          ))}
        </>
       )
      }
    </div>
  )
}

export default ExpensesList
