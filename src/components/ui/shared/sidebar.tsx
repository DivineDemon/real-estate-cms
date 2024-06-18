import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Sidebar = ({ size, button, options }: SidebarProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={size} variant="outline">
          {button}
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="w-full h-full flex flex-col items-start justify-start space-y-5">
          {options.map((option) => (
            <Link
              to={option.link}
              key={option.id}
              className="w-full flex items-center justify-start space-x-5 hover:bg-primary-foreground p-2.5 rounded-lg cursor-pointer"
            >
              {option.icon}
              <span className="w-full text-left text-lg">{option.name}</span>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
