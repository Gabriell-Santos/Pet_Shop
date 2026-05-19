import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { userContext } from "../../Context";
import { useContext } from "react";

export function Header() {
  const { qtdCart } = useContext(userContext);
  return (
    <header className="w-full bg-blue-700">
      <div className="w-full max-w-7xl flex justify-between items-center mx-auto py-4 px-6">
        <Link to={"/"}>
          <nav className="text-3xl text-white font-bold">PetShop</nav>
        </Link>
        <Link to={"/cart"}>
          <nav className="relative inline-block">
            <FaShoppingBag size={30} color="white" />
            {qtdCart > 0 && (
              <span className="absolute -top-2 -right-4 bg-amber-300 text-blue-900 text-xs font-black rounded-full w-5 h-5 flex items-center justify-center">
                {qtdCart}
              </span>
            )}
          </nav>
        </Link>
      </div>
    </header>
  );
}
