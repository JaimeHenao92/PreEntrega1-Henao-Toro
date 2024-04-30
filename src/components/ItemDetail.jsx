import { useContext } from "react";
import { ItemCount } from "./ItemCount";
import { cartContext } from "../contexts/CartContext";




export const ItemDetail = ({ product }) => {

     const {addItem} = useContext(cartContext)
 

    const add = (quantity) => addItem (product, quantity);
    return (

        <>
            <div>{product.name}</div>
            <img src={product.img} height = "250" alt={product.name} />
            <div>Stock: {product.stock} </div>
            <ItemCount onAdd={add} stock={product.stock}/>
        </>

    );
};