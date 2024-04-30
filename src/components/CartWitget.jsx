import { Link } from "react-router-dom";
import Cart from "../assets/Carrito.png";
import { useContext } from "react";
import { cartContext } from "../contexts/CartContext";

export const CartWidget = () => {

    const {Items} = useContext(cartContext);

    const total = Items.reduce(
        (acumulador, ValorActual) => acumulador + ValorActual.quantity,0
    );

    if (!total) return null;

    return (
    <Link to="/Cart">
    <div id =" cartWitget ">
    <img src= {Cart} alt="INNPOLLO" height={40} />
    <span>{total}</span> 
    </div>
    </Link>
    
    );
};