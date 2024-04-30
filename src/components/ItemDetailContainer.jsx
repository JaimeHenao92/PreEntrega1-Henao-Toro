import  Container  from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, getDoc, doc } from 'firebase/firestore';

export const ItemDetailContainer = () => {
    const [product, setProducts] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        const db = getFirestore();
        const refDoc = doc(db, 'items', id);


      
        
         getDoc(refDoc).then((results) => {
         setProducts({ id: results.id, ...results.data() });
            
            
            
        });
    }, [id]);

    if (!product) return null;

   

    return (
        <Container className="mt-4">
            <div>{product.name}</div>
            <img src={product.img} alt={product.name} />
        </Container>
);
};