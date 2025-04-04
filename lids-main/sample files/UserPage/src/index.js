import React from 'react'
import ReactDOM from 'react-dom/client'

import {
    RouterProvider,
    createBrowserRouter
} from 'react-router-dom'

import App from './App'
import DashBoard from './Dashboard'
import MyJars from './MyJars'
import Account from './Account'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <DashBoard />,
            },
            {
                path: '/myjars',
                element: <MyJars />,
            },
            {
                path: '/account',
                element: <Account />,
            },
            
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
)