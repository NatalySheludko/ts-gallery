import { FC } from "react";
import {ImageCard} from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";
import { GalleryProps } from "./ImageGallery.types";


export const ImageGallery: FC<GalleryProps> = ({ items, onClick }) => {
  return (
    <div className={css.menuList}>
      {items.map((item) => {
        return (
          <div className={css.list} key={item.id}>
            <ImageCard item={item} onClick={onClick} />
          </div>
        );
      })}
    </div>
  );
};
