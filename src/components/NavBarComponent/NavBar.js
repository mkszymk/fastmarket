import CartWidget from "../CartWidgetComponent/CartWidget";
import "./NavBar.css";

import { Link } from "react-router-dom";
import { SearchInputComponent } from "../SearchInputComponent/SearchInputComponent";

export default function NavBar() {
  return (
    <nav className="navBar">
      <div className="navBarContainer">
        <div className="navBarList">
          <Link to="/">
            <div className="mainLogo">FastMarket</div>
          </Link>
          <SearchInputComponent />
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}
