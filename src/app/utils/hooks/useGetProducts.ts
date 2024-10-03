import { getProducts } from "@/app/services/getProducts";
import { Products } from "@/models/productsModels";
import { useEffect, useState } from "react";

/**
 * Custom hook para obtener productos desde la API con soporte de paginación,
 * permite la navegación entre páginas y el control del estado de carga.
 *
 * @param {Object} params - Los parámetros para obtener los productos.
 * @param {number} params.limit - El número máximo de productos que se deben obtener por página. Se utiliza para limitar la cantidad de resultados por solicitud.
 *
 * @returns {Object} Retorna un objeto que contiene:
 * - @returns {boolean} isLoading - Indica si la solicitud de productos está en curso.
 * - @returns {Products[]} allProducts - Lista de productos obtenidos desde la API.
 * - @returns {number} currentPage - El número de la página actual.
 * - @returns {function} setCurrentPage - Permite actualizar la página actual.
 *
 * @example
 * ```ts
 * // Ejemplo de uso:
 * const { isLoading, allProducts, currentPage, setCurrentPage } = useGetProducts({ limit: 9 });
 * ```
 */

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
