import { createContext, useContext, useState,type ReactNode } from "react";

interface Item {
  id: number;
  name: string;
  price: number;
}

interface CartContextType {
  cart: Item[];
  total: number;
  addItem: (item: Item) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Item[]>([]);

  const addItem = (item: Item) => setCart((prev) => [...prev, item]);
  const removeItem = (id: number) =>
    setCart((prev) => prev.filter((item) => item.id !== id));
  const clearCart = () => setCart([]);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContext.Provider value={{ cart, total, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context)
    throw new Error("useCart must be used within CartProvider");
  return context;
}
