import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css';

import { formatDate } from '../helpers'

import SavingIcon from '../img/icono_ahorro.svg'
import HouseIcon from '../img/icono_casa.svg'
import FoodIcon from '../img/icono_comida.svg'
import ExpensesIcon from '../img/icono_gastos.svg'
import LeisureIcon from '../img/icono_ocio.svg'
import HealthIcon from '../img/icono_salud.svg'
import SubscriptionIcon from '../img/icono_suscripciones.svg'

const Expense = ({ expense, setGastoEditar, eliminarGasto }) => {
    const { nombre, cantidad, categoria, id, fecha } = expense;

    const iconDictionary = {
        comida: FoodIcon,
        casa: HouseIcon,
        gastos: ExpensesIcon,
        ocio: LeisureIcon,
        salud: HealthIcon,
        suscripciones: SubscriptionIcon
    }

    const leadingActions = () => (
      <LeadingActions>
        <SwipeAction onClick={() => setGastoEditar(expense)}>
          Editar
        </SwipeAction>
      </LeadingActions>
    )
  

    const trailingActions = () => (
      <TrailingActions>
        <SwipeAction 
          onClick={() => eliminarGasto(id)}
          destructive={true}
        >
          Eliminar
        </SwipeAction>
      </TrailingActions>
    )

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className='gasto sombra'>
          <div className='contenido-gasto'>
            <img 
                src={iconDictionary[categoria]} 
                alt="Icon" 
            />
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
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Expense
