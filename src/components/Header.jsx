import NewBudget from "./NewBudget"
import BudgetControl from "./BudgetControl"

const Header = ({ 
  presupuesto, 
  setPresupuesto, 
  isValidPresupuesto, 
  setIsValidPresupuesto 
}) => {
  return (
    <header>
      <h1>Planificador de Presupuesto</h1>
      {isValidPresupuesto ? (
        <BudgetControl 
          presupuesto={presupuesto}
        />
      ) : (
        <NewBudget 
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}  
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )}
    </header>
  )
}

export default Header
