import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";

export default function ImageGallery({ items, onClick }) {
  return (
    <ul className={css.menuList}>
      {items.map((item) => {
        return (
          <li className={css.list} key={item.id}>
            <ImageCard item={item} onClick={onClick} />
          </li>
        );
      })}
    </ul>
  );
}
