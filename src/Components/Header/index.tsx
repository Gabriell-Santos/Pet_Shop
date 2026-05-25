import { FaShoppingBag, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { userContext } from "../../Context";
import { useContext, useState, useEffect } from "react";

export function Header() {
  const { qtdCart, loading, searchResults, searchProduct } =
    useContext(userContext);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      searchProduct(query);
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <header className="w-full bg-blue-700">
      <div className="w-full max-w-7xl flex justify-between items-center mx-auto py-4 px-6">
        {/* Logo */}
        <Link to={"/"}>
          <nav className="text-3xl text-white font-bold">PetShop</nav>
        </Link>

        {/* Busca */}
        <form className="hidden sm:flex items-center flex-1 max-w-md mx-6 relative">
          <div className="flex items-center w-full bg-white rounded-full px-4 py-2 gap-2">
            <FaSearch className="text-blue-500 flex-shrink-0" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Buscar produto..."
              className="w-full text-sm text-gray-700 outline-none font-PetShop placeholder-gray-400"
            />
          </div>

          {/* Dropdown */}
          {query.length >= 2 && (
            <ul className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-lg z-50 overflow-hidden">
              {loading && (
                <li className="px-4 py-2 text-sm text-gray-400">Buscando...</li>
              )}
              {!loading && searchResults.length === 0 && (
                <li className="px-4 py-2 text-sm text-gray-400">
                  Nenhum produto encontrado.
                </li>
              )}
              {!loading &&
                searchResults.map((product) => (
                  <Link to={`/details/${product.id}`}>
                    <li
                      key={product.id}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 cursor-pointer"
                    >
                      {product.title}
                    </li>
                  </Link>
                ))}
            </ul>
          )}
        </form>

        {/* Carrinho */}
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
