import React from "react";
import { ShoppingCartSimple, SortAscending, SortDescending } from "phosphor-react";

type product = {
  name: string;
  tag: "Alimentos" | "Eletrônicos" | "Móveis" | "Eletrodomésticos";
  price: number;
  url: string;
};

const products: product[] = [
  { name: "Arroz", tag: "Alimentos", price: 5.99, url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Feijão", tag: "Alimentos", price: 7.99, url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Macarrão", tag: "Alimentos", price: 2.99, url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Leite", tag: "Alimentos", price: 3.49, url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Ovos", tag: "Alimentos", price: 6.99, url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Carne", tag: "Alimentos", price: 25.99, url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Açúcar", tag: "Alimentos", price: 4.99, url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Café", tag: "Alimentos", price: 8.99, url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Pão", tag: "Alimentos", price: 3.49, url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Queijo", tag: "Alimentos", price: 12.99, url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Notebook", tag: "Eletrônicos", price: 3500, url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Smartphone", tag: "Eletrônicos", price: 2000, url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Tablet", tag: "Eletrônicos", price: 1500, url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Sofá", tag: "Móveis", price: 899.99, url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Cama", tag: "Móveis", price: 1299.99, url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Mesa", tag: "Móveis", price: 599.99, url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Armário", tag: "Móveis", price: 1499.99, url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Geladeira", tag: "Eletrodomésticos", price: 2999.99, url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Fogão", tag: "Eletrodomésticos", price: 1499.99, url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Máquina de lavar", tag: "Eletrodomésticos", price: 1999.99, url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
  { name: "Micro-ondas", tag: "Eletrodomésticos", price: 499.99, url: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9)}.jpg` },
];

function App() {
  const [filter, setFilter] = React.useState<null | string>(null);
  const [order, setOrder] = React.useState<null | string>("alfa");
  const [descending, setDescending] = React.useState<boolean>(false);
  const [searchValue, setSearch] = React.useState<string>("");

  const [cart, setCart] = React.useState<product[]>([]);

  const inputRef = React.useRef<HTMLInputElement>(null);

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

  function searchHandler(e: React.FormEvent) {
    e.preventDefault();
    if (inputRef.current?.value) {
      setSearch(inputRef.current.value);
    } else {
      setSearch("");
    }
  }

  function addToCart(product: product) {
    if (cart.length > 98) return;
    setCart(prev => [...prev, product]);
  }

  function removeFromCart(product: product) {
    const newCart = [...cart];
    newCart.splice(newCart.indexOf(product), 1);
    setCart(newCart);
  }

  return (
    <div>
      <nav className="w-full bg-gray-200 px-8">
        <ul className="flex justify-between">
          <div className="flex">
            <a href="#">
              <li className="text-gray-400 hover:text-lime-800 cursor-pointer hover:bg-gray-300 p-4 border-x border-x-gray-400 ">Início</li>
            </a>
            <a href="#products">
              <li className="text-gray-400 hover:text-lime-800 cursor-pointer hover:bg-gray-300 p-4 border-r border-r-gray-400 ">Produtos</li>
            </a>
            <a href="#about">
              <li className="text-gray-400 hover:text-lime-800 cursor-pointer hover:bg-gray-300 p-4 border-r border-r-gray-400 ">Sobre nós</li>
            </a>
          </div>
          <div className="flex w-[40vw] m-2">
            <form className="w-full" onSubmit={searchHandler}>
              <input ref={inputRef} type="text" className="w-full rounded-md focus:bg-green-50 p-2" placeholder="Pesquise um produto aqui" />
            </form>
          </div>
          <a href="#cart">
          <li className="flex text-gray-400 align-middle hover:text-lime-800 cursor-pointer hover:bg-gray-300 p-4 border-x border-x-gray-400 relative ">
            <span className="absolute text-white bg-green-800 font-bold text-xs border-2 border-gray-200  z-10 rounded-full px-1 right-3 top-3">{cart.length}</span>
            <ShoppingCartSimple className="font-bold text-black" size={28} />
          </li>
          </a>
        </ul>
      </nav>
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
              .filter(el => el.name.toLowerCase().includes(searchValue.toLowerCase()))
              .map(product => {
                return (
                  <div className="flex flex-col rounded-md justify-center m-3 p-5 bg-gray-200 max-w-[280px] " key={product.name}>
                    <div className="flex justify-center mb-3">
                      <img src={product.url} alt={`Foto de ${product.name}`} className="rounded-lg" width="128px" height="128px" />
                    </div>
                    <div className="flex flex-col justify-center mt-2 leading-5 ">
                      <span>{product.name}</span>
                      <span className="text-gray-500">{product.tag}</span>
                      <span className="text-green-900 font-bold">R$ {product.price.toLocaleString("pt-br")}</span>
                      <div className="text-md w-[180px]">
                        {cart.find(el => el === product) ? (
                          <span className="flex justify-between w-full text-white bg-green-800 rounded-lg select-none p-2 mt-2 text-center ">
                            <span onClick={() => addToCart(product)} className="cursor-pointer">
                              +
                            </span>
                            <span>{cart.filter(p => p === product).length}</span>
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
              })}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
