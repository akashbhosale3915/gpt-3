import "./App.css";
import Brands from "./components/Brands/Brands";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import WhatGPT3 from "./components/WhatGPT3/WhatGPT3";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Brands />
      <WhatGPT3 />
    </div>
  );
}

export default App;
