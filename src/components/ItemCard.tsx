import React from "react";
import { CartContext } from "../context/CartProvider";

type product = {
  name: string;
  tag: "Alimentos" | "Eletrônicos" | "Móveis" | "Eletrodomésticos";
  price: number;
  image_url: string;
};

function ItemCard(product: product) {
  const { addToCart, removeFromCart, cart } = React.useContext(CartContext);

  return (
    <div className="flex flex-col rounded-md justify-center m-3 p-5 bg-gray-200 max-w-[280px] " key={product.name}>
      <div className="flex justify-center mb-3">
        <img src={product.image_url} alt={`Foto de ${product.name}`} className="rounded-lg" width="128px" height="128px" />
      </div>
      <div className="flex flex-col justify-center mt-2 leading-5 ">
        <span>{product.name}</span>
        <span className="text-gray-500">{product.tag}</span>
        <span className="text-green-900 font-bold">R$ {product.price.toLocaleString("pt-br")}</span>
        <div className="text-md w-[180px]">
          {cart.items.find(i => i.product === product) ? (
            <span className="flex justify-between w-full text-white bg-green-800 rounded-lg select-none p-2 mt-2 text-center ">
              <span onClick={() => addToCart(product)} className="cursor-pointer">
                +
              </span>
              <span>{cart.items.find(i => i.product === product)?.quantity}</span>
              <span onClick={() => removeFromCart(product)} className="cursor-pointer">
                -
              </span>
            </span>
          ) : (
            <span onClick={() => addToCart(product)} className="flex text-white cursor-pointer bg-green-800 rounded-lg select-none p-2 mt-2 text-center w-full">
              Adicionar ao carrinho
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
