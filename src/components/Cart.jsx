import { useContext, useState } from "react";
import { cartContext } from "../contexts/CartContext";
import { Container } from "react-bootstrap";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Table from 'react-bootstrap/Table';
const initialValues = {
  name: "",
  celular: "",
  email: "",
};
export const Cart = () => {
  const [buyer, setBuyer] = useState(initialValues);
  const { clear, Items, removeItem } = useContext(cartContext);

  const handleChange = (ev) => {
    const { name, value } = ev.target;

    setBuyer((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const total = Items.reduce((acu, act) => act.precio * act.quantity, 0);

  const handleOrder = () => {
    const order = {
      buyer,
      Items,
      total,
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        alert("Su pedido: " + id + "ha sido completado!");
      }
    });
  };

  return (
    <Container className="m4">
      <h1>PEDIDO</h1>

      <Table striped bordered hover>
      <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {Items.map((Item) => (
            <tr key={Item.id}>
              <td>{Item.name}</td>
              <td>{Item.quantity}</td>
              <td>{Item.precio}</td>
              <td>
                <button onClick={() => removeItem(Item.id)}>Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
    </Table>

      <button onClick={clear}>Vaciar</button>

      <h2>Información</h2>
      <form>
        <div>
          <label>Nombre Completo</label>
          <input
            type="text"
            value={buyer.name}
            name="name"
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Numero Celular</label>
          <input
            type="number"
            value={buyer.celular}
            name="celular"
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Correo</label>
          <input
            type="email"
            value={buyer.email}
            name="email"
            onChange={handleChange}
          />
        </div>
      </form>

      <button type="button" onClick={handleOrder}>
        Comprar
      </button>
    </Container>
  );
};
