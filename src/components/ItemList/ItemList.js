import Item from "../Item/Item";
import "./ItemList.css";
import { Link } from "react-router-dom";

const ItemList = ({ productList }) => {
  return (
    <div className="mainItemsContainer">
      <div className="itemListContainer">
        {productList.map((product) => (
          <div key={product.id}>
            <Link to={"/item/" + product.id}>
              <Item product={product} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
