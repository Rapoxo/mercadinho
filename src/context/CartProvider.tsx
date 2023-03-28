import React from "react";

type product = {
  name: string;
  tag: "Alimentos" | "Eletrônicos" | "Móveis" | "Eletrodomésticos";
  price: number;
  image_url: string;
};

type CartContextType = {
  cart: CartType;
  addToCart: (product: product) => void;
  removeFromCart: (product: product) => void;
};

type CartType = {
  items: {
    product: product;
    quantity: number;
  }[];
};

export const CartContext = React.createContext({} as CartContextType);

function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = React.useState<CartType>({ items: [] });

  function addToCart(product: product) {
    if (cart.items.length > 98) return;

    const newItems = [...cart.items];
    const foundProduct = newItems.find(el => el.product === product);

    if (foundProduct) {
      foundProduct.quantity += 1;
      setCart({ items: newItems });
      console.log(newItems);
    } else {
      newItems.push({ product, quantity: 1 });
      setCart({ items: newItems });
    }
  }

  function removeFromCart(product: product) {
    const newItems = [...cart.items];
    const foundProduct = newItems.find(el => el.product === product);
    if (!foundProduct) return;
    if (foundProduct.quantity === 1) {
      newItems.splice(newItems.indexOf(foundProduct), 1);
      setCart({ items: newItems });
    } else {
      foundProduct.quantity -= 1;
      setCart({ items: newItems });
    }
  }

  return <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>{children}</CartContext.Provider>;
}

export default CartProvider;
