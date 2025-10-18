import { Routes, Route } from "react-router-dom";
import { SettingsProvider } from "./contexts/SettingContext";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import DashboardLayout from "./pages/Dashboard";
import DashboardProfile from "./pages/DashboardProfile";
import DashboardSettings from "./pages/DashboardSettings";

function App() {
  return (
    <SettingsProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="profile" element={<DashboardProfile />} />
          <Route path="settings" element={<DashboardSettings />} />
        </Route>
      </Routes>
    </SettingsProvider>
  );
}

export default App;
