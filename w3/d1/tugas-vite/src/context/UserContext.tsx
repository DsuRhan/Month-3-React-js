import { createContext, useContext, useState,type ReactNode } from "react";

interface User {
  name: string;
  email: string;
  isLoggedIn: boolean;
}

interface UserContextType {
  user: User;
  login: (name: string, email?: string) => void;
  logout: () => void;
  updateProfile: (name: string, email: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>({
    name: "Guest",
    email: "",
    isLoggedIn: false,
  });

  const login = (name: string, email = "") =>
    setUser({ name: name || "Guest", email, isLoggedIn: true });

  const logout = () => setUser({ name: "Guest", email: "", isLoggedIn: false });

  const updateProfile = (name: string, email: string) =>
    setUser((prev) => ({ ...prev, name, email }));

  return (
    <UserContext.Provider value={{ user, login, logout, updateProfile }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within UserProvider");
  return context;
}
