import {
  Rss,
  Menu,
  LogOut,
  Shield,
  LifeBuoy,
  Settings,
  LandPlot,
  Workflow,
  BrickWall,
  PencilRuler,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Sidebar from "./sidebar";
import Dropdown from "./dropdown";
import { RootState } from "@/store";
import { ModeToggle } from "@/components/global/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";

const Navbar = () => {
  const userOptions = [
    {
      id: 1,
      name: "Settings",
      link: "/settings",
      icon: <Settings className="mr-2 h-4 w-4" />,
    },
    {
      id: 2,
      name: "About",
      link: "/about",
      icon: <LifeBuoy className="mr-2 h-4 w-4" />,
    },
    {
      id: 3,
      name: "Logout",
      link: "/login",
      icon: <LogOut className="mr-2 h-4 w-4" />,
    },
  ];
  const sidebarOptions = [
    {
      id: 1,
      name: "Projects",
      icon: <BrickWall className="w-7 h-7" />,
      link: "/projects",
    },
    {
      id: 2,
      name: "Areas",
      icon: <LandPlot className="w-7 h-7" />,
      link: "/areas",
    },
    {
      id: 3,
      name: "Blogs",
      icon: <Rss className="w-7 h-7" />,
      link: "/blogs",
    },
    {
      id: 4,
      name: "Developers",
      icon: <PencilRuler className="w-7 h-7" />,
      link: "/developers",
    },
    {
      id: 5,
      name: "Sites",
      icon: <Workflow className="w-7 h-7" />,
      link: "/sites",
    },
  ];
  const { user } = useSelector((state: RootState) => state.global);

  return (
    <nav className="w-full flex items-center justify-between py-5 px-10 bg-background border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-start space-x-5">
        <Sidebar
          button={<Menu className="w-5 h-5" />}
          size="icon"
          options={sidebarOptions}
        />
        <Link to="/">
          <Shield className="w-10 h-10" />
        </Link>
      </div>
      <div className="flex items-center justify-end space-x-5">
        <Dropdown
          size="icon"
          button={
            <Avatar>
              <AvatarImage
                src={`${
                  user?.image ? user?.image : "https://github.com/shadcn.png"
                }`}
                alt="@shadcn"
              />
              <AvatarFallback>
                {user?.name
                  ? `${user?.name.split(" ")[0][0]}&nbsp;${
                      user?.name.split(" ")[1][0]
                    }`
                  : "MH"}
              </AvatarFallback>
            </Avatar>
          }
          title={`Welcome, ${user?.name ? user?.name : "User"}`}
          options={userOptions}
        />
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
