"use client";

import { useEffect } from "react";
import { getProducts } from "./services/getProducts";

export default function Home() {
  useEffect(() => {
    getProducts({ offset: "0", limit: "20" });
  }, []);

  return (
    <main className=" w-screen h-screen bg-neutral-800 ">
      <h1 className=" pt-4 text-center text-neutral-100 font-bold text-3xl">
        Productos
      </h1>

      {/* <button onClick={getProducts}>Get products</button> */}
    </main>
  );
}
