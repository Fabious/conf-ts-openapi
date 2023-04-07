import { api } from "./config/axiosConfig";
import { BooksDTO, HydraCollection } from "./types";

export const BookAPI = {
  getAll: async function () {
    const response = await api.get<HydraCollection<BooksDTO>>("/books");

    return response.data["hydra:member"];
  },
};
