import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './Cart';

const ReactRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </Router>
    );
};

export default ReactRoutes;