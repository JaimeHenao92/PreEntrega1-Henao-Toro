import { createContext, useState } from "react";


export const cartContext = createContext();

export const CartProvider = ({children}) => {
    const [items, setItems] = useState ([ 
        {id: "1", title: "Arepollo 5ud", quantify: 2, precio: 17000},
        {id: "2", title: "Alitas Finas Picantes 800gr", quantify: 6, precio: 17000},
        {id: "3", title: "Alitas Bbq 800gr", quantify: 3, precio: 17000},
    ]);
    

    const clear = () => setItems ([]);

    const addItem = (item) => setItems((prev) => [...prev, item])


    return (
    <cartContext.Provider value ={{ addItem, clear, items }}>{children}
    </cartContext.Provider>);
};