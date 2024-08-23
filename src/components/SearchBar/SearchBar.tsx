import React, { useState, ChangeEvent, FormEvent } from 'react';
import toast from 'react-hot-toast';
import styles from './SearchBar.module.css';
interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (query.trim() === '') {
      toast.error('Please enter a search query.');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={styles.searchBar}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search images and photos"
        />
        <button type="submit" className={styles.button}>
          <span className={styles.buttonLabel}>Search</span>
        </button>
      </form>
    </header>
  );
};

export default SearchBar;


