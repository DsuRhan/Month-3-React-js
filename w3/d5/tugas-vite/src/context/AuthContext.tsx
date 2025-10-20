import { createContext, useContext, useState,type ReactNode } from 'react';

interface User {
  name: string;
  password: string;
  avatar: string;
}

interface AuthContextType {
  user: User | null;
  login: (name: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (name: string, password: string) => {
    // ambil avatar random dari API publik
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();
    const avatar = data.results[0].picture.thumbnail;

    setUser({ name, password, avatar });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}
