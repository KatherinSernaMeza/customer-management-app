import { ReactNode, useContext } from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";

import { MenuContextType } from "../../@Types/MenuContextType";
import ContextData from "../../context/ContextData";

const NavDevice = () => {
  const [display, setDisplay] = useState(false);
  const { updateShowMenu } = useContext(ContextData);

  const displayMenu = () => {
    console.log("si entro");
    updateShowMenu();
  };
  return (
    <>
      <div className="menu-device">
        <div className="title">
          <p>MENU</p>
          <FaWindowClose
            className="menuIcon"
            size={25}
            style={
              display
                ? {
                    display: "none",
                  }
                : { display: "block" }
            }
            onClick={() => displayMenu()}
          />
          <FaBars
            className="menuIcon"
            size={25}
            style={
              display
                ? {
                    display: "block",
                  }
                : { display: "none" }
            }
            onClick={() => displayMenu()}
          />
        </div>
        <div className="items">
          <img width="40%" src="../../../public/logo-company.jpg" />
          <ul>
            <li className="title-items">Main Menu</li>
            <li>Dashboard</li>
            <li>Customers</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavDevice;
