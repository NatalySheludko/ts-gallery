import { Articles } from "../App/App.types";

export interface GalleryProps {
  items: Articles[];
  onClick: (items: Articles) => void;
}
