import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import AsideCategoriesComponent from "../../components/AsideCategoriesComponent/AsideCategoriesComponent";
import { useParams } from "react-router-dom";
import "./SearchedItemsContainer.css";
import { getFirestore, getDocs, collection } from "firebase/firestore";

const SearchedItemsContainer = () => {
  const { searchedTags } = useParams();
  const tagsArray = searchedTags.split("+");

  const [productList, setProductList] = useState([]);

  const getProducts = () => {
    let foundProducts = [];
    const db = getFirestore();
    const querySnapshot = collection(db, "products");
    getDocs(querySnapshot)
      .then((r) => {
        const list = r.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        list.forEach((product) => {
          if (
            product.tags.some(
              (r) =>
                tagsArray.includes(r) ||
                tagsArray.includes(r + "s") ||
                tagsArray.includes(r + "es") ||
                tagsArray.includes(r + "as")
            )
          ) {
            foundProducts.push(product);
          }
        });
        setProductList(foundProducts);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProducts();
  }, [searchedTags]);

  return (
    <div className="itemListContent">
      <div className="asideElement">
        <AsideCategoriesComponent />
      </div>

      <div className="itemListElement">
        <div className="searchResultText">
          Resultados de búsqueda para {searchedTags.replaceAll("+", " ")}:
        </div>
        <ItemList productList={productList} />
      </div>
    </div>
  );
};

export default SearchedItemsContainer;
