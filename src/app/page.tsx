"use client";

import ProductLoadingCard from "./components/spinners/ProductLoadingCard";
import { useGetProdutcs } from "./utils/hooks/useGetProducts";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Home() {
  const limit = 9; // Limite de productos a mostrar por página
  const { allProducts, isLoading, currentPage, setCurrentPage } =
    useGetProdutcs({ limit });

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  return (
    <main className="w-screen h-screen">
      <h1 className="pt-4 text-center text-neutral-100 font-bold text-3xl">
        PRODUCTOS
      </h1>

      <div className="container mx-auto mt-10 w-[90%] pb-12">
        {/* Grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-10">
          {isLoading
            ? Array(limit)
                .fill(0)
                .map((_, index) => <ProductLoadingCard key={index} />)
            : allProducts.map((item) => (
                <div className="relative group overflow-hidden" key={item.id}>
                  {/* Tarjeta del producto */}
                  <div
                    className="h-80 bg-cover bg-center bg-no-repeat rounded-2xl"
                    style={{ backgroundImage: `url(${item.images[0]})` }}
                  >
                    <div className="flex justify-between pt-3 px-3">
                      <h1 className="bg-black px-2 py-0 rounded-3xl font-bold text-xs flex items-center">
                        {item.category.name.toUpperCase()}
                      </h1>
                      <h1 className="bg-[#98e02f] text-[#2d5003] text-bold px-2.5 py-2 rounded-lg font-bold">
                        $ {item.price}
                      </h1>
                    </div>
                  </div>

                  {/* Overlay para mostrar la descripción */}
                  <div className="absolute top-0 inset-0 h-60 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-t-2xl transform -translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-500">
                    <p className="text-white px-4">{item.description}</p>
                  </div>

                  {/* Titulo del producto */}
                  <h2 className="mt-2 font-medium">{item.title}</h2>
                </div>
              ))}
        </div>

        {/* Botones de paginación */}
        <div className="max-w-[80%] flex justify-between  mt-4 mx-auto">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 0}
            className={` ${
              currentPage == 0 ? "bg-slate-200" : "bg-blue-500"
            } text-white py-2 px-4 rounded-xl`}
          >
            <IoIosArrowBack color="#000" />
          </button>

          <p className="font-bold text-2xl">{currentPage + 1}</p>

          <button
            onClick={handleNextPage}
            className="bg-blue-500 text-white py-2 px-4 rounded-xl"
          >
            <IoIosArrowForward color="#000" />
          </button>
        </div>
      </div>
    </main>
  );
}
