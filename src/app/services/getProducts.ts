import { pagination } from "@/models/paginationModels";
import { BACK_URL, http } from "../config/http";

/**
 * Servicio para obtener productos desde la API realizando una solicitud GET,
 * pasando el límite de productos por página y el desplazamiento (offset)
 * para obtener un subconjunto específico de productos.
 *
 * @param {Object} params - Los parámetros de paginación necesarios para la solicitud.
 * @param {string} params.limit - La cantidad máxima de productos a obtener por cada solicitud.
 * @param {string} params.offset - El número de productos que se deben omitir antes de obtener los resultados.
 *
 * @returns {Promise<any>} - Retorna una promesa que resuelve con los datos de la respuesta si la solicitud es exitosa.
 *
 * @example
 * // Ejemplo de uso:
 * const products = await getProducts({ limit: "9", offset: "18" });
 *
 * // Esto recuperaría 9 productos, saltando los primeros 18 productos (correspondiente a la tercera página de productos).
 */
export const getProducts = async ({ limit, offset }: pagination) => {
  console.log({ offset, limit });

  try {
    const response = await http.get(
      `${BACK_URL}/products?offset=${offset}&limit=${limit}`
    );

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error(`Error to get produtcs: ${error}`);
  }
};
