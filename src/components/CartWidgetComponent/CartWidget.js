import icon from "./assets/shopping_cart.svg";
import "./CartWidget.css";
import { useNavigate } from "react-router-dom";

export default function CartWidget() {
  const navigateTo = useNavigate();
  return (
    <div className="cartContainer" onClick={() => navigateTo("/cart")}>
      <img src={icon} className="cartIcon" alt="Carrito" />
      <div className="nmberContainer">
        <span className="cartNmber">6</span>
      </div>
    </div>
  );
}
