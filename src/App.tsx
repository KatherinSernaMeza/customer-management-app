import { createContext, useContext } from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/menu/Menu";
import Nav from "./components/menu/Nav";
import NavDevice from "./components/menu/NavDevice";
import ContextData from "./context/ContextData";

function App() {
  return (
    <ContextData>
      <div className="grid-container">
        <Header />
        <Menu nav={<Nav />} navDevice={<NavDevice />} />
        <Content />
        <Footer />
      </div>
    </ContextData>
  );
}

export default App;
