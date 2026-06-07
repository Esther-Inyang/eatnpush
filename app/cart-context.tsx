import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { foodsData } from "../data";

type CartItem = {
  food: (typeof foodsData)[number];
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (food: (typeof foodsData)[number]) => void;
  updateQuantity: (foodId: number, delta: number) => void;
  removeFromCart: (foodId: number) => void;
  cartCount: number;
  cartTotal: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (food: (typeof foodsData)[number]) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.food.id === food.id);
      if (existing) {
        return prev.map((item) =>
          item.food.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { food, quantity: 1 }];
    });
  };

  const updateQuantity = (foodId: number, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.food.id === foodId
            ? { ...item, quantity: Math.max(item.quantity + delta, 0) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeFromCart = (foodId: number) => {
    setCartItems((prev) => prev.filter((item) => item.food.id !== foodId));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.food.price * item.quantity,
    0,
  );

  const value = useMemo(
    () => ({
      cartItems,
      addToCart,
      updateQuantity,
      removeFromCart,
      cartCount,
      cartTotal,
    }),
    [cartItems, cartCount, cartTotal],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
