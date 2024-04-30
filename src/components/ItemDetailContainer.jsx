import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [product, setProducts] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, "Items", id);

    getDoc(refDoc).then((snaoshot) => {
      setProducts({ id: snaoshot.id, ...snaoshot.data() });
    });
  }, [id]);

  if (!product) return null;

  return (
    <Container className="mt-4">
      <ItemDetail product={product} />
    </Container>
  );
};
