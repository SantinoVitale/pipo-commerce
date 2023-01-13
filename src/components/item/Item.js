/*############################################ 
                Importaciones
##############################################*/
// Modulos
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

// Estilos

import './Item.css';

// Componentes
import ItemCounter from '../itemCounter/ItemCounter';
// Core

/*############################################ 
                Lógica
##############################################*/
const Item = (props) => { // * Funcion contructora

    const {nombre, imagen, descripcion, precio, stock, id} = props.data

    // * retorno que se va a renderizar
    return(
        <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={imagen} />
                <Card.Body>
                    <Card.Title>{nombre} || ${precio}</Card.Title>
                    <Card.Text>
                        {descripcion}
                    </Card.Text>
                    <Link to={`/producto/${id}`}>Ver producto</Link>
                    <ItemCounter stock={stock}/>
                </Card.Body>
        </Card>
    )
}


/*############################################ 
                Exportación
##############################################*/

export default Item