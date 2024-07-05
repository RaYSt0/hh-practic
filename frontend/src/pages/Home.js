/* eslint-disable no-unused-expressions */
import styles from '../styles/Home.module.scss';
import { motion } from 'framer-motion';

const Home = () => {

    return (
        <motion.div
            className={styles.container}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
        >
            {/* Your code goes here */}
        </motion.div>
    );
};

export default Home;
