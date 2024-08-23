import { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import styles from './App.module.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchImages = async (query, page) => {
    const API_KEY = 'nrw8IMVpZJH62hZEidpomIb5xjo2tuu3r8nqtD3MsNs';
    const URL = `https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=${API_KEY}`;

    setLoading(true);
    setError(null);

    try {
      const { data } = await axios.get(URL);
      setImages(prevImages => [...prevImages, ...data.results]);
    } catch (error) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      fetchImages(query, page);
    }
  }, [query, page]);

  const handleSearch = newQuery => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setError(null);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = image => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <div className={styles.app}>
      <SearchBar onSubmit={handleSearch} />
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <ImageGallery images={images} onImageClick={handleImageClick} />
          {loading && <Loader />}
          {images.length > 0 && !loading && <LoadMoreBtn onClick={handleLoadMore} />}
        </>
      )}
      {showModal && (
        <ImageModal
          isOpen={showModal}
          onRequestClose={closeModal}
          image={selectedImage}
        />
      )}
      <Toaster position="top-right" />
    </div>
  );
};

export default App;




