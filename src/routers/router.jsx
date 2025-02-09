import { createBrowserRouter } from 'react-router';

import Home from '../pages/Home/Home';
import Layout from '../layouts/Layout';
import Login from '../pages/Login/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
