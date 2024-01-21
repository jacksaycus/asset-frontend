import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Button, Typography, Container } from '@mui/material';
import Page from 'src/components/Page';
import Illustration404Image from 'src/assets/images/illustrations/404.svg';

const RootStyle = styled(Page)(({ theme }) => ({
    display: 'flex',
    minHeight: '100%',
    alignItems: 'center',
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(10)
}));

const Page404 = (): JSX.Element => {
    return (
        <RootStyle>
            <Container>
                    <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
                            <Typography variant="h3" paragraph>
                                페이지를 찾을수없습니다.
                            </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                        </Typography>
                
                            <Box
                                component="img"
                                src={Illustration404Image}
                                sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
                            />

                        <Button to="/" size="large" variant="contained" component={RouterLink}>
                            홈
                        </Button>
                    </Box>
                
            </Container>
        </RootStyle>
    );
};

export default Page404;
