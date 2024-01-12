import * as React from 'react';

export interface MuiPage {
  pathname: string;
  query?: object;
  children?: MuiPage[];
  disableDrawer?: boolean;
  // icon?: string | React.ComponentType;
  icon?: any;
  title?: string;
}

export interface OrderedMuiPage extends MuiPage {
  ordered?: true;
}
