import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';  
import Layout from './Layout.tsx';

const router = createBrowserRouter([
    {
        path: 'monstermaker',
        element: <Layout />,
        // children: [
        //     { path: '', element: <Dashboard /> },
        //     { path: 'settings', element: <Settings /> },
        //     { path: 'profile', element: <Profile /> }
        // ]
    }
]);

export const App = () => {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
};