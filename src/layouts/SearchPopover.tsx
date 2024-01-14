import { Icon, addIcon } from '@iconify/react';
import { alpha, styled } from '@mui/material/styles';
import React, { useRef, useState } from 'react';
// import homeFill from '@iconify/icons-eva/home-fill';
// import personFill from '@iconify/icons-eva/person-fill';
// import settings2Fill from '@iconify/icons-eva/settings-2-fill';
// import { Link as RouterLink } from 'react-router-dom';
import { Button, Box, Divider, MenuItem, Typography, Avatar, IconButton } from '@mui/material';
import account from 'src/_mocks_/account';
const getIcon = (name) => <Icon icon={name} width={20} height={20} />;
addIcon('search', {
    body: '<path id="search_2" d="M8.00073 13C6.61135 13 5.43056 12.5139 4.45833 11.5417C3.48611 10.5694 3 9.38889 3 8C3 6.61111 3.48611 5.43056 4.45833 4.45833C5.43056 3.48611 6.61111 3 8 3C9.38889 3 10.5694 3.48611 11.5417 4.45833C12.5139 5.43056 13 6.61135 13 8.00073C13 8.56158 12.9132 9.09056 12.7396 9.58767C12.566 10.0848 12.3264 10.5417 12.0208 10.9583L16.4792 15.4167C16.6319 15.5694 16.7083 15.7431 16.7083 15.9375C16.7083 16.1319 16.6319 16.3056 16.4792 16.4583C16.3264 16.6111 16.1493 16.6875 15.9479 16.6875C15.7465 16.6875 15.5694 16.6111 15.4167 16.4583L10.9583 12.0208C10.5417 12.3264 10.0848 12.566 9.58767 12.7396C9.09056 12.9132 8.56158 13 8.00073 13ZM8 11.5C8.97222 11.5 9.79861 11.1597 10.4792 10.4792C11.1597 9.79861 11.5 8.97222 11.5 8C11.5 7.02778 11.1597 6.20139 10.4792 5.52083C9.79861 4.84028 8.97222 4.5 8 4.5C7.02778 4.5 6.20139 4.84028 5.52083 5.52083C4.84028 6.20139 4.5 7.02778 4.5 8C4.5 8.97222 4.84028 9.79861 5.52083 10.4792C6.20139 11.1597 7.02778 11.5 8 11.5Z" fill="#9E9E9E"/>',
    width: 20,
    height: 20,
});

const SearchBarDiv = styled('div')({
    display: 'flex',
    width: '300px',
    height: '36px',
    padding: '4px 12px',
    alignItems: 'center',
    gap: '8px',
    borderRadius: '100px',
    border: '1px solid var(--Gray-Gray-500, #9E9E9E)',
    background: 'var(--White, #FFF)'
})

const SearchPopover = (): JSX.Element => {
   
    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
        <SearchBarDiv>
            <IconButton
                ref={anchorRef}
                onClick={handleOpen}
                sx={{
                    padding: 0,
                    width: 44,
                    height: 44,
                    ...(open && {
                        '&:before': {
                            zIndex: 1,

                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            position: 'absolute',
                            bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72)
                        }
                    })
                }}
            >   
                {/* <Avatar src={account.photoURL} alt="photoURL" /> */}
                {getIcon('search')}
            </IconButton>
            </SearchBarDiv>
            
        </>
    );
};

export default SearchPopover;
