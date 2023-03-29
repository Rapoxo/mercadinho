import React from "react";
import { CartContext } from "../context/CartProvider";
import { ShoppingCartSimple } from "phosphor-react";

import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const { cart } = React.useContext(CartContext);
  const navigate = useNavigate();
  const inputRef = React.useRef<HTMLInputElement>(null);

  function searchHandler(e: React.FormEvent) {
    e.preventDefault();
    if (!inputRef.current?.value) return;
    navigate(`/search?query=${inputRef.current.value}`);
    inputRef.current.value = "";
  }

  return (
    <nav className="w-full bg-gray-200 px-8">
      <ul className="flex justify-between">
        <div className="flex">
          <NavLink to="/">
            <li className="text-gray-400 hover:text-lime-800 cursor-pointer hover:bg-gray-300 p-4 border-x border-x-gray-400 ">Início</li>
          </NavLink>
          <NavLink to="/about">
            <li className="text-gray-400 hover:text-lime-800 cursor-pointer hover:bg-gray-300 p-4 border-r border-r-gray-400 ">Sobre nós</li>
          </NavLink>
        </div>
        <div className="flex w-[40vw] m-2">
          <form className="w-full" onSubmit={searchHandler}>
            <input ref={inputRef} type="text" className="w-full rounded-md focus:bg-green-50 p-2" placeholder="Pesquise um produto aqui" />
          </form>
        </div>
        <div className="flex">
          <NavLink to="/orders">
            <li className="text-gray-400 hover:text-lime-800 cursor-pointer hover:bg-gray-300 p-4 border-l border-l-gray-400 ">Meus pedidos</li>
          </NavLink>
          <a href="#cart">
            <li className="flex text-gray-400 align-middle hover:text-lime-800 cursor-pointer hover:bg-gray-300 p-4 border-x border-x-gray-400 relative ">
              <span className="absolute text-white bg-green-800 font-bold text-xs border-2 border-gray-200  z-10 rounded-full px-1 right-3 top-3">
                {cart.items.reduce((a, b) => a + b.quantity, 0)}
              </span>
              <ShoppingCartSimple className="font-bold text-black" size={28} />
            </li>
          </a>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
