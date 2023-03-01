import React from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products";
import { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState({});

  const getProduct = new Promise((resolve, reject) => {
    setTimeout(() => {
      const findProduct = products.find((e) => e.id === Number(id));
      resolve(findProduct);
    }, 1);
  });

  useEffect(() => {
    getProduct.then((r) => setProductDetail(r));
  }, []);

  return (
    <div>
      <ItemDetail product={productDetail} />
    </div>
  );
}
