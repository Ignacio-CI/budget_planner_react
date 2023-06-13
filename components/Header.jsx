import NewBudget from "./NewBudget"

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
        <p>Control Presupuesto</p>
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
