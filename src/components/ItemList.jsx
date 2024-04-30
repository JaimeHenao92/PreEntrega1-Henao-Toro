import { Item } from "./item";


export const ItemList = ({products}) => {
    

    return (
    <div className="flex">
        {products.map((product) => (
        <Item key = {product.id} product = {product} />))}
        </div>
    );
        }