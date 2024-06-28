import axios from "axios";
import { ResProps } from "./Api.types";
import { Articles } from "../App/App.types";

axios.defaults.baseURL = "https://api.unsplash.com";

export const getArticles = async (
  item: string,
  currentPage: number,
  setTotalPage: (totalPages: number) => void
): Promise<Articles[]> => {
  const res = await axios.get<ResProps>("/search/photos", {
    params: {
      query: item,
      page: currentPage,
      per_page: 15,
      client_id: "Dgc0OiGK4Kz4I4JxZIuoUDWBylO0MTHCrc2qgApcj5o",
    },
  });

  setTotalPage(res.data.total_pages);
  return res.data.results;
};
