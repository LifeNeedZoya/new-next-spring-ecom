import useAuth from "@/context/useAuth";
import { useRouter } from "next/navigation";
import { ComponentType, useEffect } from "react";

export function ProtectRoute<P extends object>(Component: ComponentType<P>) {
  return (props: P) => {
    const { isAuthenticated, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated && !loading) router.push("/login");
    }, [loading, isAuthenticated]);

    return <Component {...props} />;
  };
}
