import type { ComponentType, FC } from "react";

function isLoggedIn() {
  return !!localStorage.getItem("user");
}

export function withAuth<P extends object>(Component: ComponentType<P>): FC<P> {
  return (props: P) => {
    if (!isLoggedIn()) {
      return <div className="text-red-600 p-4">Access Denied — silakan login.</div>;
    }
    return <Component {...props} />;
  };
}
