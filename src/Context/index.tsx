import { createContext, useState } from "react";
import type { ProductProps } from "../Type/product";

interface CartItem {
  id: string;
  title: string;
  price: number;
  description: string;
  cover: string;
  total: number;
  amount: number;
}

interface ContextProps {
  cart: CartItem[];
  qtdCart: number;
  addItem: (item: ProductProps) => void;
}

interface ChildrenProps {
  children: React.ReactNode;
}

export const userContext = createContext({} as ContextProps);

export function Context({ children }: ChildrenProps) {
  const [cart, setcart] = useState<CartItem[]>([]);

  // Função para adicionar um item ao carrinho
  function addItem(item: ProductProps) {
    // Verificar se o item já existe no carrinho
    const indexItem = cart.findIndex((CartItem) => CartItem.id === item.id);
    if (indexItem !== -1) {
      // Se o item já existe, atualizar a quantidade
      const cartlist = cart;
      cartlist[indexItem].amount = cartlist[indexItem].amount + 1;
      cartlist[indexItem].total =
        cartlist[indexItem].total * cartlist[indexItem].amount;
      setcart(cartlist);
      return;
    }

    // Se o item não existe, adicionar ao carrinho
    const newItem = {
      ...item,
      amount: 1,
      total: item.price,
    };
    setcart((updateItem) => [...updateItem, newItem]);
  }

  return (
    <userContext.Provider value={{ cart, qtdCart: cart.length, addItem }}>
      {children}
    </userContext.Provider>
  );
}
