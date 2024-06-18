import { LoaderPinwheel } from "lucide-react";

const Loader = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <LoaderPinwheel className="w-10 h-10 animate-spin text-primary" />
    </div>
  );
};

export default Loader;
