import { useNavigate } from 'react-router-dom';
import styles from '../styles/NotFound.module.scss';
import { motion } from 'framer-motion';

const NotFound = () => {
    const n = useNavigate();
    return (
        <motion.div
            className={styles.container}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
        >
            <div className={styles.content}>
                <div className={styles.content__size}>
                    Page you’re looking for is not found.
                </div>
                <div className={styles.content__upload} onClick={() => n(`/`)}>
                    Take me home
                </div>
            </div>
        </motion.div>
    );
};
export default NotFound;
