import icon from "./assets/shopping_cart.svg";
import "./CartWidget.css";

export default function CartWidget() {
  return (
    <div className="cartContainer">
      <img src={icon} className="cartIcon" alt="Carrito" />
      <div className="nmberContainer">
        <span className="cartNmber">6</span>
      </div>
    </div>
  );
}
