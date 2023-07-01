import React from 'react'
import { formatDate } from '../helpers'

const Expense = ({ expense }) => {
    const { nombre, cantidad, categoria, id, fecha } = expense

  return (
    <div className='gasto sombra'>
      <div className='contenido-gasto'>
        <div className='descripcion-gasto'>
            <p className='categoria'>{categoria}</p>
            <p className='nombre-gasto'>{nombre}</p>
            <p className='fecha-gasto'>
                Agregado el: {''}
                <span>{formatDate(fecha)}</span>
            </p>
        </div>
      </div>
        <p className='cantidad-gasto'>${cantidad}</p>
    </div>
  )
}

export default Expense
