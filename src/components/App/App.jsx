import { useEffect, useState } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import { getArticles } from "../Api/Api";
import Loader from "../Loader/Loader";
import SearchBar from "../SearchBar/SearchBar";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setIsError(true);
      return;
    }
    async function fetchArticles() {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await getArticles(searchQuery, page, setTotalPage);
        console.log(data);
        if (data && Array.isArray(data)) {
          setArticles((prevState) => [...prevState, ...data]);
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchArticles();
  }, [searchQuery, page]);

  const handleSearch = async (item) => {
    setSearchQuery(item);
    setPage(1);
    setArticles([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  function OpenModal(item) {
    setSelectedImage(item);
    setModalIsOpen(true);
  }

  function CloseModal() {
    setModalIsOpen(false);
    setSelectedImage();
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {articles.length > 0 && (
        <ImageGallery onClick={OpenModal} items={articles} />
      )}
      {selectedImage && (
        <ImageModal
          item={selectedImage}
          onClose={CloseModal}
          isOpen={modalIsOpen}
        />
      )}
      {articles.length > 0 && !isLoading && page < totalPage && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </div>
  );
}
