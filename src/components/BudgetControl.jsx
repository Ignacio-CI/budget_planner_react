const BudgetControl = ({ presupuesto }) => {
    
    const formatAmount = (amount) => {
        return amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            <p>Grafica aquí</p>
        </div>

        <div className="contenido-presupuesto">
            <p>
                <span>Presupuesto: </span> {formatAmount(presupuesto)}
            </p>
            <p>
                <span>Disponible: </span> {formatAmount(0)}
            </p>
            <p>
                <span>Gastado: </span> {formatAmount(0)}
            </p>
        </div>
    </div>
  )
}

export default BudgetControl
