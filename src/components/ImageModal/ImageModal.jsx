import React, { useEffect } from 'react';
import ReactModal from 'react-modal';
import styles from './ImageModal.module.css';

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onRequestClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onRequestClose]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modalContent}
      overlayClassName={styles.modalOverlay}
    >
      <div className={styles.modalBody} onClick={onRequestClose}>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={styles.modalImage}
          onClick={e => e.stopPropagation()}
        />
        <button onClick={onRequestClose} className={styles.closeButton}>
          Close
        </button>
      </div>
    </ReactModal>
  );
};

export default ImageModal;

