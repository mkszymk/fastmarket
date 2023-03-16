import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
  const { cartContent, removeCartItem, itemRemovedId } =
    useContext(CartContext);
  console.log(cartContent);
  return (
    <div className="cartItemsContainer">
      <h2>Mi carrito</h2>
      {cartContent.length === 0 ? (
        <div className="emptyCart">
          El carrito está vacío, encuentra productos en la{" "}
          <Link to={"/"} className="cartLink">
            página principal
          </Link>
          .
        </div>
      ) : (
        cartContent.map((product, i) => (
          <div
            key={product.id}
            className={
              i + 1 === cartContent.length
                ? "singleItemContainerCart lastCartItem"
                : "singleItemContainerCart"
            }
            style={
              product.id === itemRemovedId
                ? { animation: "removedItemAnimation 0.5s forwards" }
                : {}
            }
          >
            <div className="cartDescContainer cartImgContainer">
              <img
                className=" cartProductInfo cartProductImg"
                src={product.img}
                alt={product.name}
              ></img>
            </div>
            <div className="cartDescContainer cartProductNameContainer">
              <div className="cartProductInfo cartProductName">
                {product.name}
              </div>
            </div>
            <div className="cartDescContainer cartProductDescriptionContainer">
              <div className="cartProductInfo cartProductDescription">
                {product.description}
              </div>
            </div>
            <div className="cartDescContainer cartProductQuantityContainer">
              <div className="cartProductInfo cartProductQuantity">
                Unidades: {product.quantity}
              </div>
            </div>
            <div className="cartDescContainer cartProductPriceContainer">
              <div className="cartProductInfo cartProductPrice">
                USD {product.price} c/u
              </div>
            </div>
            <div className="cartDescContainer cartProductRemoveBtnContainer">
              <button
                className="cartProductInfo removeCartItemButton"
                onClick={() => removeCartItem(product.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
