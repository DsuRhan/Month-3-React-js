import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import { ProfileProvider } from "@/context/ProfileContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import LoginPage from "@/pages/LoginPage";
import ProfilePage from "@/pages/ProfilePage";

/*
  🧠 Developer Note:
  - Semua context dibungkus di dalam Router agar bisa diakses global.
  - ProtectedRoute mencegah akses ke Profile tanpa login.
*/
export default function App() {
  return (
    <Router>
      <AuthProvider>
        <ProfileProvider>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<LoginPage />} />
          </Routes>
        </ProfileProvider>
      </AuthProvider>
    </Router>
  );
}
