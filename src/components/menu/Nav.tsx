import { Link } from "react-router-dom";
import logoCompany from "../../../public/logo-company.jpg";

const Nav = () => {
  return (
    <>
      <img width="100%" src={logoCompany} />
      <ul>
        <li className="title-items">Main Menu</li>
        <li>Dashboard</li>
        <li>
          <Link to="customers">Customers </Link>
        </li>
      </ul>
    </>
  );
};

export default Nav;
