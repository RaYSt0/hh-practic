import AppRouter from './router';
import styles from './styles/App.module.scss';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function App() {
    const n = useNavigate();

    return (
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
                <div className={styles.navbar}>
                    <div
                        className={styles.navbar__item}
                        onClick={() => {
                            n('/');
                        }}
                    >
                        Вакансии
                    </div>
                    <div
                        className={styles.navbar__item}
                        onClick={() => {
                            n('/database');
                        }}
                    >
                        База данных
                    </div>
                </div>
            </motion.div>
            <AppRouter />
        </div>
    );
}

export default App;
