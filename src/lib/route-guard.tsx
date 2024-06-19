import { RootState } from "@/store";

import { toast } from "sonner";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface RouteProtectorProps {
  children: React.ReactNode;
}

const RouteGuard = ({ children }: RouteProtectorProps) => {
  const { user } = useSelector((state: RootState) => state.global);

  useEffect(() => {
    if (!user) {
      toast.error("Unauthorized!", {
        className: "p-2.5 rounded-lg border flex items-center justify-start space-x-2.5",
        description: "Login to Access Resources!",
      });
    }
  }, []);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default RouteGuard;
