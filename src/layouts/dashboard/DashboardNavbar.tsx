import React from 'react';

import { Icon } from '@iconify/react';
import menu2Fill from '@iconify/icons-eva/menu-2-fill';
import { alpha, styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton,Typography ,SwipeableDrawer } from '@mui/material';
import { MHidden } from '@/components/@material-extend';
import PageContext from 'src/components/PageContext';
// import Searchbar from './Searchbar';
// import AccountPopover from './AccountPopover';
// import LanguagePopover from './LanguagePopover';
import NotificationsPopover from './NotificationsPopover';
import Fingerprint from '@mui/icons-material/Fingerprint';
import DashboardSidebar from './DashboardSidebar';

const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
    backgroundColor: alpha(theme.palette.background.default, 0.72),
    [theme.breakpoints.up('lg')]: {
        width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
        height:'68px'
    },
    borderBottom: '1px solid var(--Gray-Gray-300, #E0E0E0)'

}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
    minHeight: APPBAR_MOBILE,
    [theme.breakpoints.up('lg')]: {
        minHeight: APPBAR_DESKTOP,
        padding: theme.spacing(0, 5)
    }
}));

interface Props {
    onOpenSidebar;
}

const DashboardNavbar = (props: Props): JSX.Element => {
    const { onOpenSidebar } = props;
    const { activePage } = React.useContext(PageContext);

    const [anchor,setAnchor] = React.useState(false)
    const toggleDrawer =
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setAnchor(open)
   }

    return (
        <RootStyle>
            <ToolbarStyle>
                <MHidden width="lgUp">
                    <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary' }}>
                        <Icon icon={menu2Fill} />
                    </IconButton>
                </MHidden>

                <Typography 
                sx={{
                    color: 'var(--Gray-Gray-900, #222)',
                    width:'1223px',
                    fontFamily: 'Pretendard',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: '28px'
                }}
                >
                {activePage.title}
              </Typography>

                {/* <Searchbar /> */}
                <Box sx={{ flexGrow: 1 }} />

                <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
                    {/* <LanguagePopover /> */}
                    <IconButton aria-label="fingerprint" color="success"
                      onClick={toggleDrawer(true)}
                    >
                        <Fingerprint />
                    </IconButton>

                    <SwipeableDrawer
                        anchor='left'
                        open={anchor}
                        onClose={toggleDrawer(false)}
                        onOpen={toggleDrawer(true)}
                    >
                        <DashboardSidebar/>
                    </SwipeableDrawer>

                    <NotificationsPopover />
                    {/* <AccountPopover /> */}
                </Stack>
            </ToolbarStyle>
        </RootStyle>
    );
};

export default DashboardNavbar;
