import { useEffect, useState } from "react";
import ImgTeste from "../../Assets/Imagem_Teste.jpeg";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { api } from "../../Api";

interface ProductProps {
  id: string;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export function Home() {
  // Armazenando os dados da Api
  const [product, setProduct] = useState<ProductProps[]>([]);

  // Buscando os dados da api assim que aplicar na página
  useEffect(() => {
    try {
      async function getDada() {
        const response = await api.get("/products");
        setProduct(response.data);
      }
      getDada();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <main className="mt-6 w-full max-w-7xl font-PetShop px-4 mx-auto">
      <h2 className="mt-2.5 mb-3 text-center font-PetShop font-bold text-xl">
        Produtos que seu pet Ama!
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 px-2.5 ">
        {product.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-2 border border-gray-200 rounded-xl p-3 "
          >
            <img
              src={item.cover}
              alt={item.title}
              className="w-full rounded-lg object-cover"
            />
            <p className="font-medium text-sm text-center"> {item.title} </p>
            <span className="flex justify-between items-center mt-auto">
              <p className="text-green-600 font-semibold">
                {item.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              <Link to={"/cart"}>
                <MdAddShoppingCart
                  size={22}
                  className="text-gray-600 hover:text-green-600 transition-colors"
                />
              </Link>
            </span>
          </div>
        ))}
      </section>
    </main>
  );
}
