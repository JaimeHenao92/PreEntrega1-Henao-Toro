import { createContext, useState } from 'react';
import context from 'react-bootstrap/esm/AccordionContext';

export const cartContext = createContext();

export const CartProvider = ({ children }) => {
    const [Items, setItems] = useState([]);

    const clear = () => setItems([]);

    const addItem = (Item, quantity) => {
        const exists = Items.some((i) => i.id === Item.id);

        if (exists) {
            const updateItems = Items.map((i) => {
                if (i.id === item.id) {
                    return {
                        ...i,
                        quantity: i.quantity + quantity,
                    };
                } else {
                    return i;
                }
            });
            setItems(updateItems);
        } else {
            setItems((prev) => {
                return [...prev, { ...Item, quantity }];
                
            });
        }
    };

    const removeItem = (id) => {
        const filterItems = Items.filter ((Item) => Item.id !== id);
        setItems(filterItems);

    };



    return <cartContext.Provider value={{ addItem, clear, Items, removeItem }}>{children}</cartContext.Provider>;
};