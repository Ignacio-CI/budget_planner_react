import NewBudget from "./NewBudget"
import BudgetControl from "./BudgetControl"

const Header = ({
  expenses, 
  setExpenses,
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
          expenses={expenses}
          setExpenses={setExpenses} 
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
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
