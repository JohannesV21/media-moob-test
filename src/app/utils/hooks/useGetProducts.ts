import { getProducts } from "@/app/services/getProducts";
import { Products } from "@/models/productsModels";
import { useEffect, useState } from "react";

export const useGetProdutcs = ({ limit }: { limit: number }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [allProducts, setAllProducts] = useState<Products[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0); // Página actual

  const offset = (currentPage * limit).toString();

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const data = await getProducts({ limit: limit.toString(), offset });

        if (data) {
          setAllProducts(data);
        }
      } catch (error) {
        console.error("Error to get products from hook: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage, limit]);

  return { isLoading, allProducts, currentPage, setCurrentPage };
};
