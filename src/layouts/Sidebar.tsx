import React, { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Link, Drawer, Typography, Avatar, Stack } from '@mui/material';
import Scrollbar from 'src/components/Scrollbar';
import NavSection from 'src/components/NavSection';
import { MHidden } from 'src/components/@material-extend';
import { Icon , addIcon } from '@iconify/react';

const getIcon = (name) => <Icon icon={name} width={8} height={8} />;
addIcon('circle', {
  body: '<circle cx="4" cy="4" r="4" fill="#9D50E5"/>',
  width: 8,
  height: 8,
});

const DRAWER_WIDTH = 280;

const RootStyle = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('lg')]: {
        flexShrink: 0,
        width: DRAWER_WIDTH,
        display: 'flex',
        height: '1000px',
        padding: '16px',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        borderRight: '1px solid var(--Gray-Gray-300, #E0E0E0)',
        background: 'var(--White, #FFF)'
    }
}));

const AccountStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2, 2.5),
    // borderRadius: theme.shape.borderRadiusSm,
    backgroundColor: theme.palette.grey[200]
}));


const LeftTopLogoStyle = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '4px',
    paddingLeft:'20px',
    flex: '1 0 0' 
});

const LogoRightBottom  = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'spaceBetween',
    alignItems: 'flexStart',
    flex: '1 0 0',
    alignSelf: 'stretch'
})

const BadgeStyle = styled('div')({
    display: 'flex',
    padding: '4px 8px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '4px',
    borderRadius: '100px',
    background: 'var(--Gray-Gray-200, #EEE)'
});

const Spacetopbottom = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flexStart',
    marginBottom: '16px',
    alignSelf: 'stretch' 
})

interface Props {
    isOpenSidebar?;
    onCloseSidebar?;
}


function Sidebar(props: Props) {
    const { isOpenSidebar, onCloseSidebar } = props;
    const { pathname } = useLocation();

    useEffect(() => {
        if (isOpenSidebar) {
            onCloseSidebar();
        }
    }, [pathname]);

    const lefttopdivstyles = {
        promAlert: {
          display: "flex",
        } as React.CSSProperties,
      }
    
    

    const renderContent = (
        <Scrollbar
            sx={{
                height: '100%',
                '& .simplebar-content': { height: '100%', display: 'flex', flexDirection: 'column' },
                padding:'16px',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-start' 
            }}
        >
            <Spacetopbottom />
            
            <Stack direction="row" alignItems="center" spacing={2}>
                <Box component={RouterLink} to="/"
                             sx={{ 
                        }}              
                >
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M44 22C44 38.72 38.72 44 22 44C5.28 44 0 38.72 0 22C0 5.28 5.28 0 22 0C38.72 0 44 5.28 44 22Z" fill="#067DFD"/>
                        <path d="M10 14.4002L18.6148 9V30.4952L11.7679 34.7842V17.1738L10 18.2805V14.4002Z" fill="white"/>
                        <path d="M34 30.9544C33.3454 27.6436 31.9168 24.5991 29.8909 22C31.9168 19.4055 33.3454 16.3564 34 13.0456L27.5545 9C27.5545 12.0858 26.5893 14.9513 24.9361 17.3437C23.6269 19.2356 21.8877 20.8336 19.8571 22C21.8925 23.1664 23.6317 24.7644 24.9361 26.6609C26.5893 29.0533 27.5545 31.9187 27.5545 35L34 30.9544Z" fill="white"/>
                    </svg> 
                </Box>
                    <LogoRightBottom>
                        <Box
                              sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                flex: '1 0 0',
                                alignSelf: 'stretch'
                            }}      
                        >
                        <Typography 
                        sx={{
                            color: 'var(--Gray-Gray-900, #222)',
                        fontFamily: 'Pretendard',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        lineHeight: '20px',
                        flex: '1 0 0'
                        }}
                        >
                          k_itms001
                        </Typography>
                        <BadgeStyle>
                            {getIcon('circle')} 승인권자
                        </BadgeStyle>
                        </Box> 
                    </LogoRightBottom>
                    
            </Stack>
            
            <Spacetopbottom />
            <NavSection />

            <Box sx={{ flexGrow: 1 }} />
        </Scrollbar>
    );

    return (
        <RootStyle>
            <MHidden width="lgUp">
                <Drawer
                    open={isOpenSidebar}
                    onClose={onCloseSidebar}
                    PaperProps={{
                        sx: { width: DRAWER_WIDTH }
                    }}
                >
                    {renderContent}
                </Drawer>
            </MHidden>

            <MHidden width="lgDown">
                <Drawer
                    open
                    variant="persistent"
                    PaperProps={{
                        sx: {
                            width: DRAWER_WIDTH,
                            bgcolor: 'background.default'
                        }
                    }}
                >
                    {renderContent}
                </Drawer>
            </MHidden>
        </RootStyle>
    );
};

export default Sidebar;
