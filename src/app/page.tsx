"use client";

import React from "react";
import { useGetProdutcs } from "./utils/hooks/useGetProducts";

export default function Home() {
  // useEffect(() => {
  //   getProducts({ offset: "0", limit: "20" });
  // }, []);

  const { allProducts } = useGetProdutcs({ offset: "0", limit: "9" });

  console.log(allProducts);

  return (
    <main className=" w-screen h-screen bg-neutral-800">
      <h1 className=" pt-4 text-center text-neutral-100 font-bold text-3xl">
        PRODUCTOS
      </h1>

      <div className="container mx-auto mt-14 ">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pb-20">
          {allProducts.map((item) => (
            <>
              <div>
                <div
                  className="h-80 bg-cover bg-center bg-no-repeat rounded-2xl"
                  style={{ backgroundImage: `url(${item.images[0]})` }}
                >
                  <div className="flex justify-between pt-3 px-3">
                    <h1 className="bg-black px-2.5 py-2 rounded-3xl font-bold text-xs">
                      {item.category.name.toUpperCase()}
                    </h1>
                    <h1 className="bg-[#98e02f] px-2.5 py-2 rounded-3xl font-bold text-xs">
                      $ {item.price}
                    </h1>
                  </div>
                </div>
                <h2 className="mt-2 font-medium">{item.title}</h2>
              </div>
            </>
          ))}
        </div>
      </div>

      {/* <button onClick={getProducts}>Get products</button> */}
    </main>
  );
}
