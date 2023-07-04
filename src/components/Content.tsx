import { Outlet } from "react-router-dom";

const Content = () => {
  return (
    <main className="main">
      <Outlet />
    </main>
  );
};

export default Content;
