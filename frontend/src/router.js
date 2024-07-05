import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import { AnimatePresence } from 'framer-motion';

const AppRouter = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AppRouter;
