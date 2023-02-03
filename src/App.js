import NavBar from "./components/NavBarComponent/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer greeting="Bienvenidos!" />
      </header>
    </div>
  );
}

export default App;
