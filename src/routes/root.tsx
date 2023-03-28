import React from "react";
import ItemCard from "../components/ItemCard";

type product = {
  name: string;
  tag: "Alimentos" | "Eletrônicos" | "Móveis" | "Eletrodomésticos";
  price: number;
  image_url: string;
};

const products: product[] = [
  { name: "Arroz", tag: "Alimentos", price: 5.99, image_url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Feijão", tag: "Alimentos", price: 7.99, image_url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Macarrão", tag: "Alimentos", price: 2.99, image_url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Leite", tag: "Alimentos", price: 3.49, image_url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Ovos", tag: "Alimentos", price: 6.99, image_url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Carne", tag: "Alimentos", price: 25.99, image_url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Açúcar", tag: "Alimentos", price: 4.99, image_url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Café", tag: "Alimentos", price: 8.99, image_url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Pão", tag: "Alimentos", price: 3.49, image_url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Queijo", tag: "Alimentos", price: 12.99, image_url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Notebook", tag: "Eletrônicos", price: 3500, image_url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Smartphone", tag: "Eletrônicos", price: 2000, image_url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Tablet", tag: "Eletrônicos", price: 1500, image_url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Sofá", tag: "Móveis", price: 899.99, image_url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Cama", tag: "Móveis", price: 1299.99, image_url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Mesa", tag: "Móveis", price: 599.99, image_url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Armário", tag: "Móveis", price: 1499.99, image_url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Geladeira", tag: "Eletrodomésticos", price: 2999.99, image_url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Fogão", tag: "Eletrodomésticos", price: 1499.99, image_url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Máquina de lavar", tag: "Eletrodomésticos", price: 1999.99, image_url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Micro-ondas", tag: "Eletrodomésticos", price: 499.99, image_url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
];

function Root() {
  const [filter, setFilter] = React.useState<null | string>(null);
  const [order, setOrder] = React.useState<null | string>("alfa");
  const [descending, setDescending] = React.useState<boolean>(false);

  return (
    <div>
      <div className="flex">
        <div className="flex flex-col w-full m-5">
          <h2 className="text-2xl">Bem vindo(a) ao Mercadinho!</h2>
          <main className="flex flex-wrap">
            {[...products]
              .filter(el => (filter ? el.tag === filter : true))
              .sort((a, b) => {
                if (order === "alfa") {
                  return descending ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name);
                }
                if (order === "price") {
                  return descending ? b.price - a.price : a.price - b.price;
                }
                return 0;
              })
              .map(product => {
                return <ItemCard key={product.name.toLowerCase()} {...product} />;
              })}
          </main>
        </div>
      </div>
    </div>
  );
}

export default Root;
