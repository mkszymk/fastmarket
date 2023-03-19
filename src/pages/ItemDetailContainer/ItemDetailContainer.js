import React from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products";
import { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState({});

  // const getProduct = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     const findProduct = products.find((e) => e.id === Number(id));
  //     resolve(findProduct);
  //   }, 1);
  // });

  const getProduct = () => {
    const db = getFirestore();
    const querySnapshot = doc(db, "products", id);

    getDoc(querySnapshot)
      .then((r) => {
        setProductDetail({
          id: r.id,
          ...r.data(),
        });
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <ItemDetail product={productDetail} />
    </div>
  );
}
