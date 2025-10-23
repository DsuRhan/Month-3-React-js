import { useState, useEffect, type ReactNode } from "react";
import { useAuth } from "@/hooks/useAuth";
import type { User, EditableUserFields } from "@/types/user";
import { ProfileContext } from "./sharedProfile";

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth(); // ambil user dari AuthContext
  const [profile, setProfile] = useState<User | null>(null);

  // Sinkronisasi otomatis: kalau user login, isi profile
  useEffect(() => {
    if (user) setProfile(user);
  }, [user]);

  // Update sebagian field (Partial)
  const updateProfile = (data: EditableUserFields) => {
    setProfile((prev) => (prev ? { ...prev, ...data } : prev));
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};
