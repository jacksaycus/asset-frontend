import 'simplebar';
import React from 'react';
import { Provider } from 'mobx-react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import {AppStore} from "./AppStore";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './index';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const stores = {
    // Key can be whatever you want
    appStore:new AppStore()
};

window.globalStores = stores;
root.render(
    <Provider {...stores}>
    <HelmetProvider>
        <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <App />
            </QueryClientProvider>
        </BrowserRouter>
    </HelmetProvider>
    </Provider>
);
