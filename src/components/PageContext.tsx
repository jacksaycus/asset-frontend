import * as React from 'react';
import type { MuiPage } from 'src/MuiPage';

const PageContext = React.createContext<{
  activePage: MuiPage | null;
  pages: MuiPage[] | null;
  activePageParents: MuiPage[] | null;
}>(undefined!);

if (process.env.NODE_ENV !== 'production') {
  PageContext.displayName = 'PageContext';
}

export default PageContext;
