import { createContext, useContext} from "react";
import type { User, EditableUserFields } from "@/types/user";

/*
  🧩 Profile Context dengan sinkronisasi user login
  - Saat user login, profil diinisialisasi dari AuthContext.
  - Field dapat diedit secara lokal tanpa update ke server.
*/
interface ProfileContextType {
  profile: User | null;
  updateProfile: (data: EditableUserFields) => void;
}

export const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const useProfileContext = () => {
  const context = useContext(ProfileContext);
  if (!context)
    throw new Error("useProfileContext must be used within ProfileProvider");
  return context;
};
