import "./ItemDetail.css";
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ product }) => {
  const navigateTo = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

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
          <button
            className="addToCartBtn"
            onClick={() => addToCart(product, quantity)}
          >
            Agregar al carrito
          </button>
          <button className="buyNowBtn" onClick={() => navigateTo("/cart")}>
            Comprar ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
