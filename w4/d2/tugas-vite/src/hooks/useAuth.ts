import { useAuthContext } from "@/context/sharedAuth";

/* 
  🧠 Developer Note:
  - Hook ini hanya membungkus useAuthContext agar lebih mudah diimport.
  - Mengembalikan { user, login, logout } untuk dipakai di komponen apa pun.
*/
export const useAuth = () => {
  const { user, login, logout } = useAuthContext();
  return { user, login, logout };
};
