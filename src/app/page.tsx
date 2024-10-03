"use client";

import { useGetProdutcs } from "./utils/hooks/useGetProducts";

export default function Home() {
  const { allProducts } = useGetProdutcs({ offset: "0", limit: "9" });

  return (
    <main className="w-screen h-screen">
      <h1 className="pt-8 text-center text-neutral-100 font-bold text-3xl">
        PRODUCTOS
      </h1>

      <div className="container mx-auto mt-14 w-[90%]">
        {/* Grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pb-20">
          {allProducts.map((item) => (
            <div className="relative group overflow-hidden" key={item.id}>
              {/* Tarjeta del producto */}
              <div
                className="h-80 bg-cover bg-center bg-no-repeat rounded-2xl "
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
                <p className="text-white px-4 ">{item.description}</p>
              </div>

              <h2 className="mt-2 font-medium">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
