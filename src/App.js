import "./App.css";
import Brands from "./components/Brands/Brands";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Brands />
    </div>
  );
}

export default App;
