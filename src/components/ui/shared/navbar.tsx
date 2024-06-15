import Dropdown from "./dropdown";
import { ModeToggle } from "@/components/global/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { LifeBuoy, LogOut, Menu, Settings, Shield, User } from "lucide-react";

const Navbar = () => {
  const userOptions = [
    {
      id: 1,
      name: "Profile",
      icon: <User className="mr-2 h-4 w-4" />,
    },
    {
      id: 2,
      name: "Settings",
      icon: <Settings className="mr-2 h-4 w-4" />,
    },
    {
      id: 3,
      name: "About",
      icon: <LifeBuoy className="mr-2 h-4 w-4" />,
    },
    {
      id: 4,
      name: "Logout",
      icon: <LogOut className="mr-2 h-4 w-4" />,
    },
  ];

  return (
    <nav className="w-full flex items-center justify-between p-5 bg-background border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-start space-x-5">
        <Menu className="w-5 h-5" />
        <Shield className="w-10 h-10" />
      </div>
      <div className="flex items-center justify-end space-x-5">
        <Dropdown
          button={
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          }
          title="Welcome, User"
          options={userOptions}
        />
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
