import { createContext, useContext } from "react";
import type { User } from "@/types/user";

/* 
  🧩 Interface untuk nilai Context
  - user: data user yang sedang login
  - login: fungsi untuk mengatur user
  - logout: fungsi untuk keluar
*/
interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

/* 🧠 Developer Note:
   Context disetup dengan default undefined untuk memaksa penggunaan dalam provider.
*/
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuthContext must be used within AuthProvider");
  return context;
};
