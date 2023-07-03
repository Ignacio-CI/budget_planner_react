import { useState, useEffect } from "react"

const BudgetControl = ({ expenses, presupuesto }) => {
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);
    
    useEffect(() => {
        const totalGastado = expenses.reduce( (total, gasto) => gasto.cantidad + total, 0);
        const totalDisponible = presupuesto - totalGastado;

        setDisponible(totalDisponible)
        setGastado(totalGastado);
    }, [expenses])

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
                <span>Disponible: </span> {formatAmount(disponible)}
            </p>
            <p>
                <span>Gastado: </span> {formatAmount(gastado)}
            </p>
        </div>
    </div>
  )
}

export default BudgetControl
