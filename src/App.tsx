import Sites from "./pages/Sites";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/global/layout";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/sites" element={<Sites />} />
      </Routes>
    </Layout>
  );
};

export default App;
