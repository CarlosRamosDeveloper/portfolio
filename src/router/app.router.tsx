import { Home } from '@/Home';
import { createBrowserRouter } from 'react-router';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    index: true,
    element: <Home />,
  },
]);
