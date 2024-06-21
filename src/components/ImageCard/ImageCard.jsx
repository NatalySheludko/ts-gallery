import css from "../ImageCard/ImageCard.module.css";

export default function ImageCard({ item, onClick }) {
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
}
