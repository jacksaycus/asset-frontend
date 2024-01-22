import 'simplebar';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { useLocation } from "react-router-dom"
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ThemeConfig from '@/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ScrollToTop from '@/components/ScrollToTop';
import Router from '@/routes';
import route from './route';
import findActivePage from 'src/utils/findActivePage';
import PageContext from 'src/components/PageContext';
// import {ServiceRequestProvider} from 'src/pages/ServiceRequestContext';
const queryClient = new QueryClient();

const App = (): JSX.Element => {
    React.useEffect(() => {
        console.log(
          `%c
      
      ███╗   ███╗ ██╗   ██╗ ██████╗
      ████╗ ████║ ██║   ██║   ██╔═╝
      ██╔████╔██║ ██║   ██║   ██║
      ██║╚██╔╝██║ ██║   ██║   ██║
      ██║ ╚═╝ ██║ ╚██████╔╝ ██████╗
      ╚═╝     ╚═╝  ╚═════╝  ╚═════╝
      
      Tip: 100won.
      `,
          'font-family:monospace;color:#1976d2;font-size:12px;',
        );
      }, []);

    const location = useLocation();
    console.log(location.pathname);
    const pageContextValue = React.useMemo(() => {
        const pages = route;
        const { activePage, activePageParents } = findActivePage(pages, location.pathname);
        return {
          activePage,
          pages,
          activePageParents
        };
      }, [location.pathname]);
      
    console.log(pageContextValue);
    if(location.pathname==='/404' || location.pathname==='/'){
      pageContextValue.activePage=''
    }

    return (
        <ThemeConfig>
            <ScrollToTop />
            <PageContext.Provider value={pageContextValue}>
            <Router />
            </PageContext.Provider>
        </ThemeConfig>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <HelmetProvider>
        <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
        </BrowserRouter>
    </HelmetProvider>
);
