import { createContext, useState } from "react";

interface CartItem {
  id: string;
  title: string;
  price: number;
  description: string;
  subTotal: number;
  cover: string;
}

interface ContextProps {
  cart: CartItem[];
  qtdCart: number;
}

interface ChildrenProps {
  children: React.ReactNode;
}

export const userContext = createContext({} as ContextProps);

export function Context({ children }: ChildrenProps) {
  const [cart, setcart] = useState<CartItem[]>([]);
  return (
    <userContext.Provider value={{ cart, qtdCart: cart.length }}>
      {children}
    </userContext.Provider>
  );
}
