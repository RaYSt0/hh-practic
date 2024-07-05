import AppRouter from './router';
import { motion } from 'framer-motion';

function App() {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
                {/* Your code goes here (it will be rendered on all pages) */}
            </motion.div>
            <AppRouter />
        </div>
    );
}

export default App;
