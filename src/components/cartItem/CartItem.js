/*############################################ 
                Importaciones
##############################################*/
// Modulos
import Card from 'react-bootstrap/Card';
import { useCartContext } from '../context/CartContext';

// Estilos

import './CartItem.css';

// Componentes
// Core

/*############################################ 
                Lógica
##############################################*/
const CartItem = (props) => { // * Funcion contructora
    const {deleteItem} = useCartContext()
    const {tittle, imagen, description, price, id} = props.data
    
    const pushDelete = () => {
        deleteItem(id)
    }

    // * retorno que se va a renderizar
    return(
        <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={imagen} />
                <Card.Body>
                    <Card.Title>{tittle} || ${price}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <button className='button' onClick={pushDelete}>Borrar del carrito</button>
        </Card>
    )
}


/*############################################ 
                Exportación
##############################################*/

export default CartItem