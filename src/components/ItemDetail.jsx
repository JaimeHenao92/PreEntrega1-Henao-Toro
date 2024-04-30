
import { ItemCount } from '../ItemQuantitySelector/ItemCount';


export const ItemDetail = ({ product }) => {
    
    return (

        <>
        <div> {product?.name}</div>
        <img src = {product?.image} height = "250" alt= {product?.name} />
        <div>stock: {product.stock}</div>
        <ItemCount onAdd = {() => {}} stock = {product.stock} />
        </>

    );
};