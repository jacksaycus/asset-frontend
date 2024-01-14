import { Link as RouterLink, useNavigate } from 'react-router-dom';
import React from 'react';
import { styled } from '@mui/material/styles';
import { Card, Stack, Link, Container, Typography, Grid , TextField, Button } from '@mui/material';
import Page from 'src/components/Page';
import { MHidden } from 'src/components/@material-extend';
import { LoginForm } from 'src/components/authentication/login';
import LoginleftImage from 'src/assets/images/loginbackground.png';

const RootStyle = styled('div')({
    display: 'inline-flex',
    height: '1000px',
    paddingLeft: '280px',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '280px',
    background: 'var(--White, #FFF)'
});

const SectionStyle = styled('div')({
    width: '960px',
    height: '1000px', 
    paddingLeft:'280px',
    background: `url(${LoginleftImage}), lightgray -287.299px -188.073px / 291.971% 137.615% no-repeat`
})

const LoginBoxStyle = styled('div')({
    display: 'flex',
    flexD1irection: 'column',
    alignItems: 'flex-start',
    gap: '20px',
    width:'auto',
    height:'auto',
    paddingLeft:'280px',
    paddingTop:'348px',
    paddingBottom:'348px'
    
})

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = React.useState({ userid: '', password: '' })

  const handleChange = ({ target: { name, value } }) => {
    setValues({
    [name]: value
    })
    }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`${values.userid} ${values.password}`)
    navigate('/', { replace: true });
    }

    return (
        <RootStyle>
                <Grid container>
                  <Grid item xs={6}>
                    <LoginBoxStyle>
                    <Stack spacing={2} alignItems="left" mt={6}> 
                         <Typography
                         sx={{
                          color: 'var(--Gray-Gray-900, #222)',
                          fontFamily: 'Pretendard',
                          fontSize: '20px',
                          fontStyle: 'normal',
                          fontWeight: '600',
                          lineHeight: '28px', 
                         }}
                         >
                          로그인
                         </Typography>
                         <Typography
                         sx={{
                          color: 'var(--Gray-Gray-700, #616161)',
                          fontFamily: 'Pretendard',
                          fontSize: '14px',
                          fontStyle: 'normal',
                          fontWeight: '700',
                          lineHeight: '28px', 
                         }}
                         >
                          아이디
                         </Typography>
                         <Typography
                         sx={{
                          color: 'var(--Gray-Gray-700, #616161)',
                          fontFamily: 'Pretendard',
                          fontSize: '14px',
                          fontStyle: 'normal',
                          fontWeight: '700',
                          lineHeight: '28px', 
                         }}
                         >
                          <TextField
                            fullWidth
                            sx={{
                              display: 'flex',
                              width: '400px',
                              height: '52px',
                              padding: '16px',
                              flexDirection: 'column',
                              justifyContent: 'center',
                              alignItems: 'flex-start', 
                              // borderRadius: '4px',
                              // border: '1px solid var(--Gray-Gray-200, #EEE)'
                          }}
                              name="username"
                              onChange={handleChange}
                              value={values.userid}
                              />
                          비밀번호
                         </Typography>
                         <TextField
                            fullWidth
                            sx={{
                              display: 'flex',
                              width: '400px',
                              height: '52px',
                              padding: '16px',
                              flexDirection: 'column',
                              justifyContent: 'center',
                              alignItems: 'flex-start', 
                              // borderRadius: '4px',
                              // border: '1px solid var(--Gray-Gray-200, #EEE)'
                          }}
                              type="password"
                              name="password"
                              />
                              <Button
                                variant="outlined"
                                color="primary"
                                onClick={handleSubmit}
                                sx={{
                                    display: 'flex',
                                    width: '400px',
                                    height: '44px',
                                    padding: '8px 22px',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center' ,
                                    borderRadius: '4px',
                                    background: 'var(--Main-Blue-Blue-500, #067DFD)',
                                    color:'white'
                                }}
                                >
                                  로그인하기
                              </Button>
                              <Grid container spacing={0}>
                                <Grid item>
                                    <Typography
                                       sx={{
                                        color: 'var(--Gray-Gray-500, #9E9E9E)',
                                        fontFamily: 'Pretendard',
                                        fontSize: '14px',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: '20px'
                                       }}
                                       >
                                        아이디/비밀번호를 잊어버리셨나요? 
                                      </Typography>
                                </Grid>
                                <Grid item>
                                <Typography
                                    sx={{
                                      color: 'var(--Main-Blue-Blue-500, #067DFD)',
                                      fontFamily: 'Pretendard',
                                      fontSize: '14px',
                                      fontStyle: 'normal',
                                      fontWeight: '400',
                                      lineH1eight: '20px' 
                                    }}
                                  >
                                    초기화 하기 
                                  </Typography>    
                                </Grid>
                              </Grid>
                              
                         </Stack>
                         {/* <BetweenDiv /> */}

                      </LoginBoxStyle>
                         
                        
                   
                 </Grid>
                 
                 <Grid item xs={6} 
                   sx={{
                    paddingLeft:'280px'
                   }}
                 > 
                   <SectionStyle/>
                 </Grid>
           </Grid>
        </RootStyle>
    );
}

export default Login;
