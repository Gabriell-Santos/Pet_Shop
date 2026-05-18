import { FaShoppingBag } from "react-icons/fa";

export function Header() {
  return (
    <header className="w-full bg-blue-500">
      <div className="w-full max-w-7xl flex justify-between items-center mx-auto py-4 px-6">
        <nav className="text-3xl text-white font-bold">PetShop</nav>
        <nav className="relative inline-block">
          <FaShoppingBag size={30} color="white" />
          <span className="absolute -top-2 -right-4 bg-amber-300 text-blue-900 text-xs font-black rounded-full w-5 h-5 flex items-center justify-center">
            2
          </span>
        </nav>
      </div>
    </header>
  );
}
