import React from 'react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Button, Typography, Container } from '@mui/material';
import { MotionContainer, varBounceIn } from 'src/components/animate';
import Page from 'src/components/Page';
import Illustration404Image from 'src/assets/images/illustrations/illustration_404.svg';

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
                <MotionContainer initial="initial" open>
                    <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
                        <motion.div variants={varBounceIn}>
                            <Typography variant="h3" paragraph>
                                페이지를 찾을수없습니다.
                            </Typography>
                        </motion.div>
                        <Typography sx={{ color: 'text.secondary' }}>
                            
                        </Typography>

                        <motion.div variants={varBounceIn}>
                            <Box
                                component="img"
                                src={Illustration404Image}
                                sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
                            />
                        </motion.div>

                        <Button to="/" size="large" variant="contained" component={RouterLink}>
                            Go to Home
                        </Button>
                    </Box>
                </MotionContainer>
            </Container>
        </RootStyle>
    );
};

export default Page404;
