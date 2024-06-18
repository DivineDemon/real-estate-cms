import Sites from "./pages/Sites";
import Areas from "./pages/Areas";
import Blogs from "./pages/Blogs";
import Login from "./pages/auth/Login";
import Projects from "./pages/Projects";
import Dashboard from "./pages/Dashboard";
import Developers from "./pages/Developers";
import Layout from "./components/global/layout";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="sites" element={<Sites />} />
        <Route path="areas" element={<Areas />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="projects" element={<Projects />} />
        <Route path="developers" element={<Developers />} />
      </Route>
    </Routes>
  );
};

export default App;
