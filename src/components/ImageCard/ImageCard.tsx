import React from 'react';
import styles from './ImageCard.module.css';
interface Image {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    full: string;
  };
}
interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => (
  <div className={styles.card} onClick={() => onClick(image)}>
    <img src={image.urls.small} alt={image.alt_description} className={styles.image} />
  </div>
);

export default ImageCard;

