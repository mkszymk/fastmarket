import CartWidget from "../CartWidgetComponent/CartWidget";
import "./NavBar.css";
import searchLogo from "./assets/searchIcon.svg";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navBar">
      <div className="navBarContainer">
        <div className="navBarList">
          <Link to="/">
            <div className="mainLogo">FastMarket</div>
          </Link>
          <div className="searchBarContainer">
            <input
              className="searchBarInput"
              placeholder="Buscar productos..."
            ></input>
            <img src={searchLogo} alt="Buscar" className="searchLogo" />
          </div>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}
