import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";
import { ItemList } from "./ItemList";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    let refCollection;
    if (!id) {
      refCollection = collection(db, "Items");
    } else {
      refCollection = query(collection(db, "Items"), where("categoryId", "==", id));
    }

    getDocs(refCollection)
      .then((results) => {
        setProducts(
          results.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <Container className="mt-4">
      {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <ItemList products={products} />
      )}
    </Container>
  );
};
