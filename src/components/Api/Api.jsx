import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const getArticles = async (item, currentPage, setTotalPage) => {
  const res = await axios.get("/search/photos", {
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
