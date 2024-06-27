import css from "../ImageCard/ImageCard.module.css";
import { FC } from "react";
import { Articles } from "../App/App.types";

interface ImageCardProps {
  item: Articles;
  onClick: (item: Articles) => void;
}

export const ImageCard: FC<ImageCardProps> = ({ item, onClick }) => {
  const { urls, alt_description } = item;

  const handlerClick = () => {
    onClick(item);
  };
  return (
    <img
      className={css.img}
      onClick={handlerClick}
      src={urls.small}
      alt={alt_description}
    />
  );
};
