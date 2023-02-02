import CartWidget from "../CartWidgetComponent/CartWidget";
import "./NavBar.css";
import searchLogo from "./assets/searchIcon.svg";

export default function NavBar() {
  return (
    <nav className="navBar">
      <div className="navBarContainer">
        <div className="navBarList">
          <div className="mainLogo">FastMarket</div>
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
