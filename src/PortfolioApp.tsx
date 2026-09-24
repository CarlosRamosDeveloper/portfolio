import { RouterProvider } from 'react-router';
import { appRouter } from './router/app.router';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import type { PropsWithChildren } from 'react';
import { useTheme } from './hooks';
import './i18n/config';
import { useLanguage } from './hooks/useLanguage';

const queryClient = new QueryClient();

const SetupSettingsComponentsOnLoad = ({ children }: PropsWithChildren) => {
  useTheme();
  useLanguage();

  return children;
};

export const PortfolioApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SetupSettingsComponentsOnLoad>
        <RouterProvider router={appRouter} />
      </SetupSettingsComponentsOnLoad>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
