import { Articles } from "../App/App.types";

export interface ModalProps {
  item: Articles;
  isOpen: boolean;
  onClose: () => void;
}
