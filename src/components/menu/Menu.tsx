import { ReactNode } from "react";

export type MenuProps = {
  nav: ReactNode;
  navDevice: ReactNode;
};

const Menu = (props: MenuProps) => {
  return (
    <nav className="navbar">
      <menu>
        <div className="Nav">{props.nav}</div>
        <div className="NavDevice">{props.navDevice}</div>
      </menu>
    </nav>
  );
};

export default Menu;
