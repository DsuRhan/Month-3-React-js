import { useState, type ReactNode } from "react";
import { UserContext, type User } from "./UserContext";

interface UserProviderProps {
  children: ReactNode;
}

export default function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>({ name: "Guest", isLoggedIn: false });

  const login = (username: string) => {
    const name = username.trim() || "Guest";
    setUser({ name, isLoggedIn: true });
  };

  const logout = () => {
    setUser({ name: "Guest", isLoggedIn: false });
  };

  const contextValue = { user, login, logout };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
}
