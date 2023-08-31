import React from 'react';
import Layout from './Layout';
import { createBrowserRouter } from 'react-router-dom';
import { issueListPathLoader, issueContentPathLoader } from './lib/api/loader';
import ContentPage from './pages/ContentPage';
import ListPage from './pages/ListPage';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ListPage />,
        loader: issueListPathLoader,
      },
      {
        path: '/:number',
        element: <ContentPage />,
        loader: async ({ params }) => {
          return await issueContentPathLoader(params.number);
        },
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
