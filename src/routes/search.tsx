import React from "react";
import { SortAscending, SortDescending } from "phosphor-react";
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

function Search() {
  const [filter, setFilter] = React.useState<null | string>(null);
  const [order, setOrder] = React.useState<null | string>("alfa");
  const [descending, setDescending] = React.useState<boolean>(false);

  // Trocar por uma query
  const [searchValue, setSearch] = React.useState<string>("");


  const productTags = [
    {
      tag: "Alimentos",
      quantity: 10,
    },
    {
      tag: "Eletrônicos",
      quantity: 3,
    },
    {
      tag: "Móveis",
      quantity: 8,
    },
    {
      tag: "Eletrodomésticos",
      quantity: 4,
    },
  ];



  return (
    <div>
      <div className="flex">
        <aside className="w-[20vw] min-h-screen p-3 border-r bg-gray-100 border-r-gray-500">
          <span className="text-xl">Filtrar por</span>
          <div className="">
            <span>Tag:</span>
            <ul className="flex flex-wrap">
              {productTags.map(product => {
                const { tag, quantity } = product;
                return (
                  <li key={tag} className="p-1">
                    <input
                      onChange={(e: React.ChangeEvent) => (filter === tag ? setFilter(null) : setFilter(e.target.id))}
                      checked={filter === tag}
                      id={tag}
                      className="mr-1"
                      type="checkbox"
                      name={tag}
                    />
                    <label htmlFor={tag}>
                      {tag} ({quantity})
                    </label>
                  </li>
                );
              })}
              {filter && (
                <li className="my-2 mx-1">
                  <span onClick={() => setFilter(null)} className="p-2 text-white rounded-md bg-green-800 cursor-pointer select-none ">
                    X Remover filtros
                  </span>
                </li>
              )}
            </ul>
            <div className="flex flex-col">
              <span className="text-xl">Ordenar por</span>
              <span className="flex text-lg my-1 px-2 cursor-pointer select-none bg-green-800 text-white rounded-md p-0.5" onClick={() => setDescending(prev => !prev)}>
                <span className="mr-1">{descending ? <SortDescending size={24} /> : <SortAscending size={24} />}</span> Ordem {descending ? "decrescente" : "crescente"}{" "}
              </span>
            </div>
            <ul>
              <li className="p-1">
                <input onChange={(e: React.ChangeEvent) => setOrder(e.target.id)} checked={order === "alfa"} id="alfa" className="mr-1" type="radio" name="alfa" />
                <label htmlFor="Ordem Alfabética">Ordem Alfabética</label>
              </li>
              <li className="p-1">
                <input onChange={(e: React.ChangeEvent) => setOrder(e.target.id)} checked={order === "price"} id="price" className="mr-1" type="radio" name="price" />
                <label htmlFor="Preço">Preço</label>
              </li>
            </ul>
          </div>
        </aside>
        <div className="flex flex-col w-full m-5">
          <h2 className="text-2xl">Mostrando {searchValue ? `resultados para "${searchValue}":` : "todos os produtos:"}</h2>
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

export default Search;
