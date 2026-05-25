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
  preview: string;
  DeleteItem: (item: CartItem) => void;
  ButtonDelete: (item: CartItem) => void;
  searchProduct: (query: string) => void;
  loading: boolean;
  searchResults: ProductProps[];
}

interface ChildrenProps {
  children: React.ReactNode;
}

export const userContext = createContext({} as ContextProps);

export function Context({ children }: ChildrenProps) {
  const [cart, setcart] = useState<CartItem[]>([]);
  const [preview, setPreview] = useState("");
  // Campo de busca no Input do Header
  const [searchResults, setSearchResults] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(false);

  // Função de buscar Na api
  async function searchProduct(query: string) {
    if (query.length < 2) {
      setSearchResults([]);
      return;
    }
    setLoading(true);
    const response = await fetch(`http://localhost:3000/products`);
    const data: ProductProps[] = await response.json();
    const filtered = data.filter((product) =>
      product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
    );
    setSearchResults(filtered);
    setLoading(false);
  }

  // Função de adicionar Item
  function addItem(item: ProductProps) {
    const indexItem = cart.findIndex((CartItem) => CartItem.id === item.id);
    if (indexItem !== -1) {
      const cartlist = cart;
      cartlist[indexItem].amount = cartlist[indexItem].amount + 1;
      cartlist[indexItem].total =
        cartlist[indexItem].price * cartlist[indexItem].amount;
      setcart(cartlist);
      resultsTotal(cartlist);
      return;
    }

    const newItem = {
      ...item,
      amount: 1,
      total: item.price,
    };
    setcart((updateItem) => [...updateItem, newItem]);
    resultsTotal([...cart, newItem]);
    return;
  }

  // função de deletar item
  function DeleteItem(item: CartItem) {
    const indexItem = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (cart[indexItem].amount > 1) {
      let cartlist = cart;
      cartlist[indexItem].amount = cartlist[indexItem].amount - 1;
      cartlist[indexItem].total =
        cartlist[indexItem].total - cartlist[indexItem].price;
      setcart(cartlist);
      resultsTotal(cartlist);
      return;
    }
    // Caso seja só um item
    const deleteItem = cart.filter((product) => product.id !== item.id);
    setcart(deleteItem);
  }

  // Função mostrando O valor Total
  function resultsTotal(itens: CartItem[]) {
    let mylist = itens;
    const results = mylist.reduce((acc, obj) => {
      return acc + obj.total;
    }, 0);
    const formated = results.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
    setPreview(formated);
  }

  // função do butão de deleta
  function ButtonDelete(item: CartItem) {
    const newItem = cart.filter((product) => product.id !== item.id);
    setcart(newItem);
    resultsTotal(newItem);
  }
  return (
    <userContext.Provider
      value={{
        cart,
        qtdCart: cart.length,
        addItem,
        preview,
        DeleteItem,
        ButtonDelete,
        loading,
        searchProduct,
        searchResults,
      }}
    >
      {children}
    </userContext.Provider>
  );
}
