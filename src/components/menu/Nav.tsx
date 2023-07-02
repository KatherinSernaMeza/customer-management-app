import logoCompany from "../../../public/logo-company.jpg";
const Nav = () => {
  return (
    <>
      <img width="100%" src={logoCompany} />

      <ul>
        <li className="title-items">Main Menu</li>
        <li>Dashboard</li>
        <li>Customers</li>
      </ul>
    </>
  );
};

export default Nav;
