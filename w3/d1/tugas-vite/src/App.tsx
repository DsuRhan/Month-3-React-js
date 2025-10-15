import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";
import { LanguageProvider } from "./context/LanguageContext";
import { NotificationProvider } from "./context/NotificationContext";
import { CartProvider } from "./context/CartContext";

import Header from "./components/Header";
import ThemedButton from "./components/ThemeButton";
import ThemedParagraph from "./components/ThemedParagraph";
import UserInfoDisplay from "./components/UserInfoDisplay";
import ProductList from "./components/ProductList";
import CartDisplay from "./components/CartDisplay";
import NotificationBar from "./components/NotificationBar";
import LanguageSelector from "./components/LanguageSelector";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <NotificationProvider>
          <UserProvider>
            <CartProvider>
              <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
                {/* === Navbar / Header === */}
                <Header />

                {/* === Konten Utama === */}
                <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* === User & Theme Section === */}
                  <section className="p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                    <h2 className="text-xl font-bold mb-4">User & Theme Context</h2>
                    <UserInfoDisplay />
                    <div className="mt-4 flex gap-3">
                      <ThemedButton />
                      <ThemedParagraph />
                    </div>
                  </section>

                  {/* === Language & Notification Section === */}
                  <section className="p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                    <h2 className="text-xl font-bold mb-4">Language & Notification Context</h2>
                    <LanguageSelector />
                    <NotificationBar />
                  </section>

                  {/* === Shopping Cart Section === */}
                  <section className="col-span-1 md:col-span-2 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                    <h2 className="text-xl font-bold mb-4">Shopping Cart Context</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <ProductList />
                      <CartDisplay />
                    </div>
                  </section>
                </main>

                {/* === Footer === */}
                <footer className="text-center py-6 border-t border-gray-300 dark:border-gray-700 mt-10">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    React Context Showcase — All Contexts Combined
                  </p>
                </footer>
              </div>
            </CartProvider>
          </UserProvider>
        </NotificationProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
