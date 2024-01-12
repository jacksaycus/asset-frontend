// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
import 'simplebar';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// import ThemeConfig from 'src/theme';
// import ScrollToTop from 'src/components/ScrollToTop';
// import Router from 'src/routes';
import App from './index';

// const App = (): JSX.Element => {
//     return (
//         <ThemeConfig>
//             <ScrollToTop />
//             <Router />
//         </ThemeConfig>
//     );
// };

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <HelmetProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </HelmetProvider>
);