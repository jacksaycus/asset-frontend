import { Link as RouterLink, useNavigate } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import { Card, Stack, Link, Container, Typography, Grid , TextField, Button } from '@mui/material';
import Page from 'src/components/Page';
import { MHidden } from 'src/components/@material-extend';
import { LoginForm } from 'src/components/authentication/login';
import LoginleftImage from 'src/assets/images/loginbackground.png';
import Snackbar from '@mui/material/Snackbar';
import { useForm, SubmitHandler } from 'react-hook-form';
import DashboardApp from './DashboardApp';
import {User} from 'src/types'

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
  const [user, setUser] = React.useState<User>({
    userid: '',
    password: ''
  });
  const [isAuthenticated, setAuth] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({...user, [event.target.name] : event.target.value});
  }
  const handleLogin = () => {
    axios.post(import.meta.env.VITE_API_URL + "/login", user, {
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
      const jwtToken = res.headers.authorization;
      if (jwtToken !== null) {
        sessionStorage.setItem("jwt", jwtToken);
        setAuth(true);
      }
    })
    .catch(() => setOpen(true));
  }  

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
} = useForm<User>();

  // const handleChange = ({ target: { name, value } }) => {
  //   setValues({
  //   [name]: value
  //   })
  //   }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(`${values.userid} ${values.password}`)
  //   navigate('/', { replace: true });
  //   }
  const onSubmit = (data: User) => {
   // alert(JSON.stringify(data));
   // handleLogin();
   navigate('/dashboard/app');
};
if (isAuthenticated) {
    return <DashboardApp />;
}
else {
    return (
        <div style={{
          display: 'flex',
          width: '328px',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '20px'
        }}>

          <form autoComplete="off" noValidate onSubmit={handleSubmit(onSubmit)}>
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
                         
                          <TextField
                          {...register('userid', { required: true} )}
                            fullWidth
                            variant="standard"
                            // InputProps={{disableUnderline:true}}
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
                              background : errors.userid?.type === "required" ?'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',    
                              marginBottom: errors.userid?.type === "required" ?'20px' : '',    
                              borderWidth: errors.userid?.type === "required" ? '1px 1px 1px 10px': '' ,
                              borderStyle: errors.userid?.type === "required" ? 'solid' : '',
                              borderColor: errors.userid?.type === "required" ? 'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',
                              borderImage: errors.userid?.type === "required" ? 'initial' : '',
                          }}
                              name="userid"
                              onChange={handleChange}
                              value={user.userid}
                              />
                               {/* {errors.userid?.type === "required" && <p>아이디를 입력하세요</p>} */}
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
                          비밀번호
                         </Typography>
                         <TextField
                          {...register('password', { required: true} )}
                            fullWidth
                            type='password'
                            variant="standard"
                            // InputProps={{disableUnderline:true}}
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
                              background : errors.password?.type === "required" ?'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',    
                              marginBottom: errors.password?.type === "required" ?'20px' : '',    
                              borderWidth: errors.password?.type === "required" ? '1px 1px 1px 10px': '' ,
                              borderStyle: errors.password?.type === "required" ? 'solid' : '',
                              borderColor: errors.password?.type === "required" ? 'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',
                              borderImage: errors.password?.type === "required" ? 'initial' : '',
                          }}
                              
                              name="password"
                              onChange={handleChange}
                              value={user.password}
                              />
                              {/* {errors.password?.type === "required" && <span>비밀번호를 입력하세요</span>} */}
                              <Button
                                variant="outlined"
                                color="primary"
                                // onClick={handleSubmit}
                                type='submit'
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
                              <Snackbar
                                  open={open}
                                  autoHideDuration={3000}
                                  onClose={() => setOpen(false)}
                                  message="로그인 실패: 아이디 비밀번호를 확인하세요"
                                />
                              
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
           </form>
        </div>
    );
  }
}

export default Login;
