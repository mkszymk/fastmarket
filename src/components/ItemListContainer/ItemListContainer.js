import products from "../../data/products";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer({ greeting }) {
  const [productList, setProductList] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 3000);
  });

  useEffect(() => {
    getProducts
      .then((response) => {
        setProductList(response);
      })
      .catch((e) => console.log("Error: " + e));
  }, []);

  return (
    <div>
      <ItemList productList={productList} />
    </div>
  );
}
