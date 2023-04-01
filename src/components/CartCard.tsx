import React from "react";
import { CartContext } from "../context/CartProvider";

type product = {
  name: string;
  tag: "Alimentos" | "Eletrônicos" | "Móveis" | "Eletrodomésticos";
  price: number;
  image_url: string;
};

type CardProps = {
  product: product;
  quantity: number;
};

function CartCard({ product, quantity }: CardProps) {
  const { cart, addToCart, emptyCart, removeFromCart } = React.useContext(CartContext);

  return (
    <div className="flex">
      <div className="flex">
        <img src={product.image_url} alt={`Foto de ${product.name}`} />
        <span>{product.name}</span>
      </div>
      <div className="flex">
        <button
          onClick={() => {
            removeFromCart(product);
          }}
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
}

export default CartCard;
