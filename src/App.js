import NavBar from "./components/NavBarComponent/NavBar";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route
          path="*"
          element={
            <div>
              <h1>Error</h1>
              <h3>Página no encontrada</h3>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
