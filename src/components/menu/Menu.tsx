import React from "react";

const Menu = (props: any) => {
  return (
    <nav className="navbar">
      <menu>
        <div className="Nav">{props.Nav}</div>
        <div className="NavDevice">{props.NavDevice}</div>
      </menu>
    </nav>
  );
};

export default Menu;
