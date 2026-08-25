import { RouterProvider } from 'react-router';
import { appRouter } from './router/app.router';

export const PortfolioApp = () => {
  return <RouterProvider router={appRouter} />;
};
