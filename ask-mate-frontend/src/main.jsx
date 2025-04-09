import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import HomePage from './components/HomePage.jsx';
import LoginPage from './components/LoginPage.jsx';
import QuestionPage from './components/QuestionPage.jsx';
import ErrorPage from './ErrorPage.jsx';
import Layout from './Layout.jsx';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <LoginPage />,
      },
      {
        path: '/home',
        element: <HomePage />,
      },
      {
        path: '/question/:id',
        element: <QuestionPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
