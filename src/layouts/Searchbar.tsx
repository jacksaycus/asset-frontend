import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import searchFill from '@iconify/icons-eva/search-fill';
import { styled, alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import PageContext from 'src/components/PageContext';
import {
    Box,
    Input,
    Slide,
    Button,
    InputAdornment,
    ClickAwayListener,
    IconButton
} from '@mui/material';
import SearchPopover from './SearchPopover';
import NotificationsPopover from './NotificationsPopover';

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const SearchbarStyle = styled('div')(({ theme }) => ({
    top: 0,
    left: 0,
    zIndex: 99,
    width: '100%',
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    height: APPBAR_MOBILE,
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
    padding: theme.spacing(0, 3),
    // boxShadow: theme.customShadows.z8,
    backgroundColor: `${alpha(theme.palette.background.default, 0.72)}`,
    [theme.breakpoints.up('md')]: {
        height: APPBAR_DESKTOP,
        padding: theme.spacing(0, 5)
    }
}));

const RootDiv = styled('div')({
    display: 'flex',
    height: '68px',
    width:'100%',
    minWidth: '1180px',
    padding: '12px 32px',
    alignItems: 'center',
    gap: '12px',
    alignSelf: 'stretch',
    borderBottom: '1px solid var(--Gray-Gray-300, #E0E0E0)',
    background: 'var(--White, #FFF)'
})

function Searchbar() {
    const [isOpen, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen((prev) => !prev);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const { activePage } = React.useContext(PageContext);
    return (
        
          <RootDiv>
            {/* <Box sx={{ width: '100%', maxWidth: 500}}> */}
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
              <SearchPopover />
               <NotificationsPopover />
            {/* </Box> */}
            </RootDiv>
        
    );
}

export default Searchbar;
