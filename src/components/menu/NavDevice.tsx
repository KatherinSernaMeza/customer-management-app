import { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { TodoContext } from "../../context/ContextData";
import { MenuContextType } from "../../@Types/MenuContextType";
import logoCompany from "../../../public/logo-company.jpg";
import { Link } from "react-router-dom";

const NavDevice = () => {
  const { updateShowMenu, showMenu } = useContext(
    TodoContext
  ) as MenuContextType;

  const displayMenu = () => {
    updateShowMenu(showMenu);
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
              showMenu
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
              showMenu
                ? {
                    display: "block",
                  }
                : { display: "none" }
            }
            onClick={() => displayMenu()}
          />
        </div>
        <div className="items">
          <img width="40%" src={logoCompany} />
          <ul>
            <li className="title-items">Main Menu</li>
            <li>Dashboard</li>
            <li>
              <Link to="customers">Customers </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavDevice;
