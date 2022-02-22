import './App.css';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      
        <NavBar/>
      <ItemDetailContainer />
      
      
      
    </div>
  );
}

export default App;