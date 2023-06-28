import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="grid-container">
      <Header />
      <Nav />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
