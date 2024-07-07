import { Route, Routes, useLocation } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Database from './pages/Database';
import { AnimatePresence } from 'framer-motion';

const AppRouter = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/database/" element={<Database />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AppRouter;
