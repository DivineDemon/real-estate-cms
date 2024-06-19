import Sites from "./pages/Sites";
import Areas from "./pages/Areas";
import Blogs from "./pages/Blogs";
import Login from "./pages/auth/Login";
import Projects from "./pages/Projects";
import Dashboard from "./pages/Dashboard";
import RouteGuard from "./lib/route-guard";
import Developers from "./pages/Developers";
import Layout from "./components/global/layout";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Layout />}>
        <Route
          index
          element={
            <RouteGuard>
              <Dashboard />
            </RouteGuard>
          }
        />
        <Route
          path="sites"
          element={
            <RouteGuard>
              <Sites />
            </RouteGuard>
          }
        />
        <Route
          path="areas"
          element={
            <RouteGuard>
              <Areas />
            </RouteGuard>
          }
        />
        <Route
          path="blogs"
          element={
            <RouteGuard>
              <Blogs />
            </RouteGuard>
          }
        />
        <Route
          path="projects"
          element={
            <RouteGuard>
              <Projects />
            </RouteGuard>
          }
        />
        <Route
          path="developers"
          element={
            <RouteGuard>
              <Developers />
            </RouteGuard>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
