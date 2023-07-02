import ContextData from "./context/ContextData";
import Layout from "./page/Layout";

function App() {
  return (
    <ContextData>
      <Layout />
    </ContextData>
  );
}

export default App;
