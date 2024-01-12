import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import { styled } from '@mui/material/styles';
import { Card, Stack, Link, Container, Typography } from '@mui/material';
import Page from 'src/components/Page';
import { MHidden } from 'src/components/@material-extend';
import { LoginForm } from 'src/components/authentication/login';
import LoginleftImage from 'src/assets/images/loginbackground.png';

const RootStyle = styled(Page)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'flex',
    }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
    width: '100%',
    maxWidth: 464,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: theme.spacing(2, 0, 2, 2)
}));

const ContentStyle = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(12, 0)
}));

const LeftbackgroundStyle = styled('div')(({ }) => ({
    width: '960px',
    height: '1000px', 
    background: `url(${LoginleftImage}), lightgray -287.299px -188.073px / 291.971% 137.615% no-repeat`
}));

function Login() {
    return (
        <RootStyle>
            {/* <AuthLayout>
                Don’t have an account? &nbsp;
                <Link underline="none" variant="subtitle2" component={RouterLink} to="/register">
                    Get started
                </Link>
            </AuthLayout> */}

            {/* <Container maxWidth="sm"> */}
            <Container
            sx={{
                display: 'inlineFlex',
                height: '1000px',
                paddingLeft: '280px',
                justifyContent: 'flexEnd',
                alignItems: 'center',
                paddingRight: '280px',
                background: 'var(--White, #FFF)'
            }}
            >
                <ContentStyle>
                    <Stack sx={{ mb: 5 }}>
                        <Typography variant="h4" gutterBottom>
                            로그인
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                        
                        </Typography>
                    </Stack>
                    
                    <LoginForm />

                    {/* <MHidden width="smUp">
                        <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                            로그인&nbsp;
                            <Link variant="subtitle2" component={RouterLink} to="register">
                                Get started
                            </Link>
                        </Typography>
                    </MHidden> */}
                </ContentStyle>
            </Container>

            <MHidden width="mdDown">
                <SectionStyle>
                 <LeftbackgroundStyle>

                 </LeftbackgroundStyle>
                    {/* <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
                        Hi, Welcome Back
                    </Typography>
                    <img src={IllustrationLoginImage} alt="login" /> */}
                </SectionStyle>
            </MHidden>

        </RootStyle>
    );
}

export default Login;
