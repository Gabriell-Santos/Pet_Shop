import ImgTeste from "../../Assets/Imagem_Teste.jpeg";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <main className="mt-6 w-full max-w-7xl font-PetShop px-4">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 px-2.5 ">
        <div className="flex flex-col gap-2 border border-gray-200 rounded-xl p-3">
          <img
            src={ImgTeste}
            alt="Ração"
            className="w-full rounded-lg object-cover"
          />
          <p className="font-medium text-sm text-center">Imagem Da ração</p>
          <span className="flex justify-between items-center mt-auto">
            <p className="text-green-600 font-semibold">R$ 15,00</p>
            <Link to={"/cart"}>
              <MdAddShoppingCart
                size={22}
                className="text-gray-600 hover:text-green-600 transition-colors"
              />
            </Link>
          </span>
        </div>
      </section>
    </main>
  );
}
