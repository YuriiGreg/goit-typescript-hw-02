import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

interface GalleryImage {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    full: string;
    regular: string;
  };
}

interface ImageGalleryProps {
  images: GalleryImage[];
  onImageClick: (image: GalleryImage) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => (
  <ul className={styles.gallery}>
    {images.map(image => (
      <li key={image.id} className={styles.galleryItem}>
        <ImageCard image={image} onClick={() => onImageClick(image)} />
      </li>
    ))}
  </ul>
);

export default ImageGallery;


