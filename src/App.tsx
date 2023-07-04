import ContextData from "./context/ContextData";
import Layout from "./page/Layout";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customers from "./page/Customers";
function App() {
  return (
    <ContextData>
      {/* <Layout /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Customers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextData>
  );
}

export default App;
