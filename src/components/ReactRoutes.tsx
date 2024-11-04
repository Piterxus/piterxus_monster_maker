import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom';
import React from 'react';
import Cart from './Cart';

// const ReactRoutes = () => {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/cart" element={<Cart />} />
//             </Routes>
//         </Router>
//     );
// };
const router = createBrowserRouter([
    {
        path: '/cart',
        element: <Cart />

    }
]);

const ReactRoutes = () => {
    return (
        // <React.StrictMode>
        //     <RouterProvider router={router} />
        // </React.StrictMode>
        <BrowserRouter>
        <Cart />
        </BrowserRouter>
    );
};


export default ReactRoutes;