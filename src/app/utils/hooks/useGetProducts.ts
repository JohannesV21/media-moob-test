import { getProducts } from "@/app/services/getProducts";
import { pagination } from "@/models/paginationModels";
import { Products } from "@/models/productsModels";

import { useEffect, useState } from "react";

export const useGetProdutcs = ({ limit, offset }: pagination) => {
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [allProducts, setAllProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setisLoading(true);
      try {
        const data = await getProducts({ limit, offset });

        if (data) {
          setAllProducts(data);
        }
      } catch (error) {
        console.error("Error to get products from hook: ", error);
      } finally {
        setisLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { isLoading, allProducts };
};
