import { FaBars } from "react-icons/fa";

const NavDevice = () => {
  return (
    <>
      <div className="menu-device">
        <div className="title">
          <p>MENU</p>
          <FaBars size={25} />
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
