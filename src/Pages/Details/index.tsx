import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import ImgTeste from "../../Assets/Imagem_Teste.jpeg";

export function Details() {
  return (
    <div className="w-full max-w-7xl mx-auto font-PetShop font-black flex flex-col md:flex-row gap-10 items-start p-8">
      <div className="flex-1">
        <img
          src={ImgTeste}
          alt="Ração Para Cão"
          className="w-full max-h-80 object-contain rounded-2xl shadow-lg"
        />
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-3xl text-[#2E1F0F">Ração Para Cão</h2>
        <p className="text-[#5C4033] font-normal leading-relaxed">
          Descrição da Ração
        </p>

        <hr className="border-[#E8D9C5] my-2" />

        <span className="text-3xl text-[#2E1F0F]">R$ 80,45</span>

        <Link to={"/cart"}>
          <button className="flex items-center justify-center gap-2 bg-[#2E1F0F] text-white px-6 py-3 rounded-xl hover:bg-[#4A3728] transition-colors w-full">
            <MdAddShoppingCart size={22} />
            Adicionar ao Carrinho
          </button>
        </Link>
      </div>
    </div>
  );
}
