import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ productList }) => {
  console.log(productList);
  return (
    <div className="mainItemsContainer">
      <div className="itemListContainer">
        {productList.map((product) => (
          <div key={product.id}>
            <Item product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
