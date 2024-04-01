import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import {ItemList} from "./ItemList";
import data from "../data/products.json";



export const ItemListContainer = ({greeting}) => {
    const [products, setproducts]= useState ([]);

    const {id} = useParams();
    
    useEffect (() => { 
        const get = new Promise ((resolve, reject) => {
          setTimeout (() => resolve(data), 2000)
        });

        get.then ((data) => {
            if (id) {
                const filteredData = data.filter (d => d.category === id);

                setproducts (filteredData);

            } else{
             setproducts(data);
            }
            });

    }, [id]);

    return (<Container className="mt-4">
     <ItemList products={products}/>
    </Container>);
    
}