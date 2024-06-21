import Modal from "react-modal";
import css from "../ImageModal/ImageModal.module.css"

export default function ImageModal({ item, isOpen, onClose }) {
  const { urls, user, likes, description, alt_description } = item;

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },

    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      background: "none",
      overflow: "visible",
    },
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Modal Image"
        closeTimeoutMS={300}
        shouldCloseOnEsc={true}
        onRequestClose={() => {
          onClose();
        }}
      >
        <img
          className={css.modalImage}
          src={urls.regular}
          alt={alt_description}
				/>
				
					<p className={css.description}>{description}</p>
					<div className={css.info}>
        <p>Author: {user.username}</p>
					<p>👍 {likes}</p>
					</div>
      </Modal>
    </div>
  );
}
