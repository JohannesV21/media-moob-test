import { pagination } from "@/models/paginationModels";
import { BACK_URL, http } from "../config/http";

export const getProducts = async ({ limit, offset }: pagination) => {
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
