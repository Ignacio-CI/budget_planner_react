import React from 'react'
import Expense from './Expense'

const ExpensesList = ({ expenses, setGastoEditar, eliminarGasto }) => {
  return (
    <div className='listado-gastos contenedor'>
      <h2>{expenses.length ? 'Gastos' : 'No hay gastos aún'}</h2>

      {expenses.map( expense => (
          <Expense 
            key={expense.id}
            expense={expense}
            setGastoEditar={setGastoEditar}
            eliminarGasto={eliminarGasto}               
          />
      ))}
    </div>
  )
}

export default ExpensesList
