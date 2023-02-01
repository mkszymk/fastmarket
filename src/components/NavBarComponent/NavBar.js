import CartWidget from "../CartWidgetComponent/CartWidget";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navBar">
      <div className="navBarContainer">
        <ul className="navBarList">
          <li className="mainLogo">FastMarket</li>
          <CartWidget />
        </ul>
      </div>
    </nav>
  );
}
