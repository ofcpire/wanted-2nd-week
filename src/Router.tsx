import React from 'react';
import Layout from './Layout';
import store from './redux/store';
import ContentPage from './pages/ContentPage';
import ListPage from './pages/ListPage';
import ErrorPage from './pages/ErrorPage';
import { createBrowserRouter } from 'react-router-dom';
import { setIsLoading } from './redux/isLoadingSlice';
import { setIssueList } from './redux/issueListSlice';
import { getIssueContent, getIssueList } from './lib/api/api';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ListPage />,
        loader: async () => {
          if (store.getState().issueListSlice.issueList.length === 0) {
            try {
              await getIssueList(1).then(response => {
                store.dispatch(setIssueList(response.data));
                store.dispatch(setIsLoading(true));
              });
              return true;
            } catch (err) {
              throw new Response('Not Found', { status: 404 });
            }
          } else {
            store.dispatch(setIsLoading(true));
            return true;
          }
        },
      },
      {
        path: '/:number',
        element: <ContentPage />,
        loader: async ({ params }) => {
          try {
            const response = await getIssueContent(params.number);
            store.dispatch(setIsLoading(true));
            return response.data;
          } catch (err) {
            throw new Response('Not Found', { status: 404 });
          }
        },
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
