import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({ product }) => { 
    return (
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.img}/>
      <Card.Body>
        <Card.Title>{product.nombre}</Card.Title>
        <Card.Text>{product.precio}
        </Card.Text>
        <Card.Text>{product.category}
        </Card.Text>
       <Link to={`/item/${product.id}`}> <Button variant="primary">Go Somewhere</Button></Link>
      </Card.Body>
    </Card>
    );
};




