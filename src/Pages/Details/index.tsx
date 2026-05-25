import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../Api";
import { useContext } from "react";
import { userContext } from "../../Context";

import type { ProductProps } from "../../Type/product";

export function Details() {
  const { addItem } = useContext(userContext);
  const { id } = useParams();
  const [product, setProduct] = useState<ProductProps>();
  // Reedenrizar os dados
  useEffect(() => {
    async function getProduct() {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getProduct();
  }, [id]);

  return (
    <div className="w-full max-w-7xl mx-auto font-PetShop font-black flex flex-col md:flex-row gap-10 items-start p-8">
      <div className="flex-1">
        <img
          src={product?.cover}
          alt={product?.id}
          className="w-full max-h-80 object-contain rounded-2xl shadow-lg"
        />
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-3xl text-[#2E1F0F}"> {product?.title} </h2>
        <p className="text-[#5C4033] font-normal leading-relaxed">
          {product?.description}
        </p>

        <hr className="border-[#E8D9C5] my-2" />

        <span className="text-3xl text-[#2E1F0F]">
          {product?.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>

        <Link to={"/cart"}>
          <button
            onClick={() => product && addItem(product)}
            className="flex items-center justify-center gap-2 bg-[#2E1F0F] text-white px-6 py-3 rounded-xl hover:bg-[#4A3728] transition-colors w-full"
          >
            <MdAddShoppingCart size={22} />
            Adicionar ao Carrinho
          </button>
        </Link>
      </div>
    </div>
  );
}
