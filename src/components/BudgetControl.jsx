import { useState, useEffect } from "react"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const BudgetControl = ({ expenses, setExpenses, presupuesto, setPresupuesto, setIsValidPresupuesto }) => {
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

    const handleResetApp = () => {
        const resultado = confirm('Deseas reiniciar presupuestos y gastos?');
        
        if(resultado){
            setExpenses([]);
            setPresupuesto(0);
            setIsValidPresupuesto(false);
        }
    };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            <CircularProgressbar 
                styles={buildStyles({
                    pathColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
                    trailColor: '#F5F5F5',
                    textColor: porcentaje > 100 ? '#DC2626' : '#3B82F6'
                })} 
                value={porcentaje} 
                text={`${porcentaje}% gastado`}
            />
        </div>

        <div className="contenido-presupuesto">
            <button
                className="reset-app"
                type="button"
                onClick={handleResetApp}
            >
                Reset App
            </button>
            <p>
                <span>Presupuesto: </span> {formatAmount(presupuesto)}
            </p>
            <p className={`${disponible < 0 ? 'negativo' : ''}`}>
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
