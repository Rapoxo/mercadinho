import React from "react";
import { Link } from "react-router-dom";

import { SmileySad } from "phosphor-react";

import { CartContext } from "../context/CartProvider";
import CartCard from "../components/CartCard";

function Cart() {
  const { cart, emptyCart } = React.useContext(CartContext);

  return cart.items.length > 0 ? (
    <>
      {cart.items.map(item => {
        return <CartCard key={item.product.name} {...item} />;
      })}
    </>
  ) : (
    <div className="flex h-full justify-center items-center">
      <div className="text-center text-gray-400">
        <SmileySad className="w-full" size={128} />
        <p>Parece que você não tem itens no seu carrinho.</p>
        <p>
          <Link className="text-lime-700 hover:text-lime-800 " to="/">
            Adicione alguns por aqui!
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Cart;
