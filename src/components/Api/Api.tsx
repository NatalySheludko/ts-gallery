import axios from "axios";
import { ResProps } from "./Api.types";

axios.defaults.baseURL = "https://api.unsplash.com";

export const getArticles = async (
  item: string,
  currentPage: number,
): Promise<ResProps> => {
  const res = await axios.get<ResProps>("/search/photos", {
    params: {
      query: item,
      page: currentPage,
      per_page: 15,
      client_id: "Dgc0OiGK4Kz4I4JxZIuoUDWBylO0MTHCrc2qgApcj5o",
    },
  });

  return res.data;
};
