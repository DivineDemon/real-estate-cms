import Navbar from "../ui/shared/navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full grid grid-cols-12 grid-rows-12">
      <div className="col-span-12 row-span-1 w-full h-full">
        <Navbar />
      </div>
      <div className="col-span-12 row-span-11 w-full h-full flex items-start justify-start p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
