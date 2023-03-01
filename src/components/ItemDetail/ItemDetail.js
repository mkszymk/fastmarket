import "./ItemDetail.css";
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    console.log({ ...product, quantity });
  };

  return (
    <div className="mainItemContainer">
      <div className="itemShowContainer">
        <div className="itemImageContainer">
          <img alt={product.name} src={product.img} className="itemImage" />
        </div>
        <div className="itemInfo">
          <div className="itemTitle">{product.name}</div>
          <div className="itemDescription">{product.description}</div>
          <div className="itemPrice">
            {product.price ? "USD " + product.price : ""}
          </div>
          <ItemCount
            stock={product.stock}
            quantity={quantity}
            setQuantity={setQuantity}
          />
          <div className="stock">Stock disponible: {product.stock}</div>
          <button className="addToCartBtn" onClick={addToCart}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
