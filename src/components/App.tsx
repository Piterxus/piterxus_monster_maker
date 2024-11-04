import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';  
import Layout from './Layout.tsx';
import Cart from './Cart.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
           
            { path: '/cart', element: < Cart/> },
          
        ]
    }
]);

export const App = () => {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
};