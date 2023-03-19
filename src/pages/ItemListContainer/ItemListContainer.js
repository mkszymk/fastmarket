import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import "./ItemListContainer.css";
import AsideCategoriesComponent from "../../components/AsideCategoriesComponent/AsideCategoriesComponent";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  getDocs,
  collection,
  where,
  query,
} from "firebase/firestore";

export default function ItemListContainer() {
  const { categoryId } = useParams();

  const [productList, setProductList] = useState([]);

  const getProducts = () => {
    const db = getFirestore();
    const querySnapshot = collection(db, "products");
    if (categoryId) {
      const filteredQuery = query(
        querySnapshot,
        where("category", "==", categoryId)
      );
      getDocs(filteredQuery)
        .then((r) => {
          const list = r.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setProductList(list);
        })
        .catch((error) => console.log(error));
    } else {
      getDocs(querySnapshot)
        .then((r) => {
          const list = r.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setProductList(list);
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    getProducts();
  }, [categoryId]);

  return (
    <div className="itemListContent">
      <div className="asideElement">
        <AsideCategoriesComponent />
      </div>
      <div className="itemListElement">
        <ItemList productList={productList} />
      </div>
    </div>
  );
}
