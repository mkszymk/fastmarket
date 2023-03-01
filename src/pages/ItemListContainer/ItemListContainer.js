import products from "../../data/products";
import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import "./ItemListContainer.css";
import AsideCategoriesComponent from "../../components/AsideCategoriesComponent/AsideCategoriesComponent";
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
  const { categoryId } = useParams();

  const [productList, setProductList] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
    if (categoryId) {
      const filteredProducts = products.filter((product) => {
        return product.category === categoryId;
      });
      setTimeout(() => {
        resolve(filteredProducts);
      }, 1);
    } else {
      setTimeout(() => {
        resolve(products);
      }, 1);
    }
  });

  useEffect(() => {
    getProducts
      .then((response) => {
        setProductList(response);
      })
      .catch((e) => console.log("Error: " + e));
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
