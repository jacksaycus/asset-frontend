// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import * as React from 'react';
import { useLocation } from "react-router-dom"
import ThemeConfig from 'src/theme';
import ScrollToTop from 'src/components/ScrollToTop';
import Router from 'src/routes';
import route from './route';
import findActivePage from 'src/utils/findActivePage';
import PageContext from 'src/components/PageContext';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
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
      <>
      <PageContext.Provider value={pageContextValue}>
        <ThemeConfig>
        <CssBaseline />
            <ScrollToTop />
            <Router />
          </ThemeConfig>
        </PageContext.Provider>
        </>
    );
}

export default App