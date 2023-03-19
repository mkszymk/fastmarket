import NavBar from "./components/NavBarComponent/NavBar";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import SearchedItemsContainer from "./pages/SearchedItemsContainer/SearchedItemsContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./pages/Cart/Cart";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route
            path="/search/:searchedTags"
            element={<SearchedItemsContainer />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="*"
            element={
              <div className="error">
                <h1>Error</h1>
                <h3>Página no encontrada</h3>
              </div>
            }
          />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
