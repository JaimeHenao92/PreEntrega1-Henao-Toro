import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({ product }) => { 
    return (
<Card style={{ 
  width: '15rem'
  }}>
      <Card.Img variant="top" src={product.img}/>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.precio}
        </Card.Text>
        <Card.Text>{product.categoryId}
        </Card.Text>
       <Link to={`/Item/${product.id}`}> 
       <Button variant="primary">Saber más!</Button>
       </Link>
      </Card.Body>
    </Card>
    );
};




