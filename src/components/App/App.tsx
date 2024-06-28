import { useEffect, useState } from "react";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { getArticles } from "../Api/Api";
import Loader from "../Loader/Loader";
import { SearchBar } from "../SearchBar/SearchBar";
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { ImageModal } from "../ImageModal/ImageModal";
import { Articles } from "./App.types";

export default function App() {
  const [articles, setArticles] = useState<Articles[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Articles | null>(null);
  const [totalPage, setTotalPage] = useState<number>(0);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setIsError(true);
      return;
    }
    async function fetchArticles() {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await getArticles(searchQuery, page);
        setTotalPage(data.total_pages);
        setArticles((prevState) => [...prevState, ...data.results]);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchArticles();
  }, [searchQuery, page]);

  const handleSearch = async (item: string) => {
    setSearchQuery(item);
    setPage(1);
    setArticles([]);
  };

  const handleLoadMore = (): void => {
    setPage(page + 1);
  };

  function OpenModal(item: Articles) {
    setSelectedImage(item);
    setModalIsOpen(true);
  }

  function CloseModal(): void {
    setModalIsOpen(false);
    setSelectedImage(null);
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
