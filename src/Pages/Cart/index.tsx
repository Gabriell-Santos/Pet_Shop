import ImgTeste from "../../Assets/Imagem_Teste.jpeg";
import { MdAdd, MdRemove, MdDelete } from "react-icons/md";

export function Cart() {
  return (
    <div className="w-full max-w-7xl px-4 py-6 font-PetShop mx-auto">
      <h1 className="text-3xl font-bold font-PetShop  mb-4 text-center ">
        Meu carrinho
      </h1>

      <div className="flex items-center gap-4 border border-gray-200 rounded-xl p-4 mb-4">
        <img
          src={ImgTeste}
          alt="Ração"
          className="w-20 h-20 object-contain rounded-lg"
        />

        <div className="flex-1">
          <p className="font-medium text-sm">Ração Premium Cão</p>
          <p className="text-gray-500 text-xs mt-1">R$ 20,00 / un</p>

          <div className="flex items-center gap-3 mt-2">
            <button className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
              <MdRemove size={16} />
            </button>
            <span className="text-sm font-medium">4</span>
            <button className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
              <MdAdd size={16} />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-end justify-between self-stretch">
          <button className="text-gray-400 hover:text-red-500">
            <MdDelete size={20} />
          </button>
          <span className="text-green-600 font-semibold text-sm">R$ 80,00</span>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
        <span className="text-gray-500 text-xl">Total</span>
        <span className="text-lg font-semibold">R$ 80,00</span>
      </div>

      <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-xl transition-colors">
        Finalizar compra
      </button>
    </div>
  );
}
