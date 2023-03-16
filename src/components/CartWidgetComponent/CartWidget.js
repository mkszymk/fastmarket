import icon from "./assets/shopping_cart.svg";
import "./CartWidget.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function CartWidget() {
  const navigateTo = useNavigate();
  const { cartContent } = useContext(CartContext);
  return (
    <div className="cartContainer" onClick={() => navigateTo("/cart")}>
      <img src={icon} className="cartIcon" alt="Carrito" />
      <div className="nmberContainer">
        <span className="cartNmber">
          {cartContent?.length > 9 ? "9+" : cartContent?.length}
        </span>
      </div>
    </div>
  );
}
