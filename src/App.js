import "./App.css";
import Brands from "./components/Brands/Brands";
import Feature from "./components/Feature/Feature";
import Header from "./components/Header/Header";
import MyApps from "./components/MyApps/MyApps";
import Nav from "./components/Nav/Nav";
import WhatGPT3 from "./components/WhatGPT3/WhatGPT3";
import Bar from "./components/Bar/Bar";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Brands />
      <WhatGPT3 />
      <Feature />
      <MyApps />
      <Bar />
      <Footer />
    </div>
  );
}

export default App;
