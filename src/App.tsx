import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/menu/Menu";
import Nav from "./components/menu/Nav";
import NavDevice from "./components/menu/NavDevice";

function App() {
  return (
    <div className="grid-container">
      <Header />
      <Menu Nav={<Nav />} NavDevice={<NavDevice />} />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
