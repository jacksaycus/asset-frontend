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
        
          <div>
            <Box sx={{ width: '100%', maxWidth: 500}}>
              <Typography variant="h6" gutterBottom style={{color:'black'}}>
                {activePage.title}
              </Typography>
            </Box>
                

                
            </div>
        
    );
}

export default Searchbar;
