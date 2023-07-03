import { useState, useEffect } from "react"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const BudgetControl = ({ expenses, presupuesto }) => {
    const [porcentaje, setPorcentaje] = useState(0);
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);
    
    useEffect(() => {
        const totalGastado = expenses.reduce( (total, gasto) => gasto.cantidad + total, 0);
        const totalDisponible = presupuesto - totalGastado;

        //Calcular el porcentaje gastado
        const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);

        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje) 
        }, 1200);

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
            <CircularProgressbar 
                styles={buildStyles({
                    pathColor: '#3B82F6',
                    trailColor: '#F5F5F5',
                    textColor: '#3B82F6'
                })} 
                value={porcentaje} 
                text={`${porcentaje}% gastado`}
            />
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
