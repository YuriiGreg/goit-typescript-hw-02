import { ThreeDots } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => (
  <div className={styles.loader}>
    <ThreeDots color="#007BFF" height={80} width={80} />
  </div>
);

export default Loader;
