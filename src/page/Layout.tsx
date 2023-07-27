import { useContext } from "react";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/menu/Menu";
import Nav from "../components/menu/Nav";
import NavDevice from "../components/menu/NavDevice";
import { TodoContext } from "../context/ContextData";
import { MenuContextType } from "../@Types/MenuContextType";

const Layout = () => {
  const { showMenu } = useContext(TodoContext) as MenuContextType;
  const grid = {
    openMobile:
      "grid-container mobile-menu-close new-height-viewport-units new-width-viewport-units",
    closeMobile: "grid-container mobile-menu-open",
  };

  return (
    <div>
      <div className={showMenu ? grid.openMobile : grid.closeMobile}>
        <Header />
        <Menu nav={<Nav />} navDevice={<NavDevice />} />
        <Content />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
