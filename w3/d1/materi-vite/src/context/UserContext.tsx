import { createContext, useContext } from "react";

export interface User {
  name: string;
  isLoggedIn: boolean;
}

export interface UserContextType {
  user: User;
  login: (username: string) => void;
  logout: () => void;
}

// Nilai default, tidak digunakan langsung tapi mencegah undefined
export const UserContext = createContext<UserContextType>({
  user: { name: "Guest", isLoggedIn: false },
  login: () => {},
  logout: () => {},
});

export const useUser = () => useContext(UserContext);
