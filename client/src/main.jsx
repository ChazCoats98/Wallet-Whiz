import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './utils/index.css';

import App from './App.jsx';
import Dashboard from './pages/dashboard';
import Stocks from './pages/stock-pages/marketWatch.jsx';
import Portfolio from './pages/stock-pages/portfolio.jsx';
import Homepage from './pages/homepage';
import User from './pages/user';
import Register from './pages/RegisterPage.jsx';
import RegisterPlaid from './pages/registerPlaid.jsx';
import Login from './pages/loginPage.jsx';
import ErrorPage from './pages/errorPage.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Homepage />
            }, {
                path: '/personal finances',
                element: <Dashboard />
            }, {
                path: '/stocks',
                children: [
                    {
                        index: true,
                        element: <Stocks />
                    }, {
                        path: '/stocks/portfolio',
                        element: <Portfolio />
                    }
                ]
            }, {
                path: '/account',
                element: <User />
            }, {
                path: '/register',
                element: <Register />
            },{
                path: '/register-plaid',
                element: <RegisterPlaid />
            }, {
                path: '/login',
                element: <Login />
            } 
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)