import type { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

/* 
  🧩 Interface Props untuk ProtectedRoute
  - children: elemen yang ingin ditampilkan kalau user sudah login.
*/
interface ProtectedRouteProps {
  children: ReactNode;
}

/* 
  🧠 Developer Note:
  - Komponen ini memanfaatkan Context (useAuth) untuk cek status login.
  - Jika belum login → redirect ke halaman /login.
*/

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
