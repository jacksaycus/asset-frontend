import * as React from 'react'
import { Container, Button, Stack, Typography, TextField, Grid , Paper, Box } from '@mui/material'
import sign from 'src/assets/images/icons/sign.png'
import {Profile} from 'src/types'
import { useForm, SubmitHandler } from "react-hook-form"

function PersonalInfoForm() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Profile>()
    //   const onSubmit: SubmitHandler<Profile> = (data) => console.log(data)
    
      
    const [profile, setProfile] = React.useState<Profile>({
        name: '',
        userid: '',
        password: '',
        email: '',
        tel: '',
        phone: '',
        bigo:'',
      });
    //   console.log(watch("name")); 
      const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setProfile({...profile, [event.target.name]: event.target.value});
      }
      
      const onSubmit = (data: Profile) => {
        alert(JSON.stringify(data));
      };

    return(
        <React.Fragment>
            <form  autoComplete="off" noValidate onSubmit={handleSubmit(onSubmit)}>
            <div style={{
                     display: 'flex',
                     padding: '28px',
                     flexDirection: 'column',
                     alignItems: 'flex-start',
                     gap: '20px',
                     alignSelf: 'stretch',
                     borderRadius: '12px',
                    border: '1px solid var(--Gray-Gray-300, #E0E0E0)',
                    background: 'var(--White, #FFF)',
                    position:'relative',
                    left:'-20px'
            }}       
                >
                    <div style={{
                        display: 'flex',
                        paddingBottom: '12px',
                        alignItems: 'center',
                        gap: '10px',
                        alignSelf: 'stretch',
                        borderBottom: '1px solid var(--Gray-Gray-400, #BDBDBD)'
                    }}
                    >
                         <Typography sx={{
                                    color: 'var(--Gray-Gray-900, #222)',
                                    fontFamily: 'Pretendard',
                                    fontSize: '20px',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    lineHeight: '28px'
                                }}
                                >
                            프로필 정보
                            </Typography>

                    </div>

                <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '4px',
                        alignSelf: 'stretch'
                    }}
                    >
                        <div style={{display:'flex',
                                    flexDirection:'row'
                                    }}
                        >
                            <Typography sx={{
                                  color: 'var(--Gray-Gray-900, #222)',
                                  fontFamily: 'Pretendard',
                                  fontSize: '14px',
                                  fontStyle: 'normal',
                                  fontWeight: '700',
                                  lineHeight: '20px'
                            }}
                            >
                                이름
                            </Typography>
                            <Typography sx={{
                                color: 'var(--Main-Red-Red-500, #EF2B2A)',
                                fontFamily: 'Pretendard',
                                fontSize: '14px',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                lineHeight: '20px'
                            }}
                            >
                                *
                            </Typography>
                        </div>
                        <TextField
                             {...register('name', { required: true, maxLength: 20, pattern: /[ㄱ-힣]+/ })}
                              fullWidth
                              variant='standard'
                              InputProps={{ disableUnderline: true }}
                              sx={{
                                display: 'flex',
                                height: '48px',
                                padding: '16px',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                alignSelf: 'stretch',
                                borderRadius: '4px',
                                border: '1px solid var(--Gray-Gray-200, #EEE)'

                                ,background : errors.name?.type === "required" ?'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',    
                                marginBottom: errors.name?.type === "required" ?'20px' : '',    
                                borderWidth: errors.name?.type === "required" ? '1px 1px 1px 10px': '' ,
                                borderStyle: errors.name?.type === "required" ? 'solid' : '',
                                borderColor: errors.name?.type === "required" ? 'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',
                                borderImage: errors.name?.type === "required" ? 'initial' : '',
                              }}   
                              name='name'
                              value={profile.name}
                              onChange={handleChange}
                              >
                            </TextField>
                            {/* {errors.name?.type === "required" && <span>이름을 입력하세요</span>} */}
                            {errors?.name?.type === "maxLength" && (
                                <p>초과입력하였습니다</p>
                            )}
                            {errors?.name?.type === "pattern" && (<p>이름을 제대로 입력하세요</p> )}
                    </div>


                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '4px',
                        alignSelf: 'stretch'
                    }}
                    >
                        <div style={{display:'flex',
                                    flexDirection:'row'
                                    }}
                        >
                            <Typography sx={{
                                  color: 'var(--Gray-Gray-900, #222)',
                                  fontFamily: 'Pretendard',
                                  fontSize: '14px',
                                  fontStyle: 'normal',
                                  fontWeight: '700',
                                  lineHeight: '20px'
                            }}
                            >
                                아이디
                            </Typography>
                        </div>
                        <TextField
                              fullWidth
                              variant='standard'
                              InputProps={{ disableUnderline: true }}
                              name='userid'
                              value={profile.userid}
                              onChange={handleChange}
                              sx={{
                                display: 'flex',
                                height: '48px',
                                padding: '16px',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                alignSelf: 'stretch',
                                borderRadius: '4px',
                                border: '1px solid var(--Gray-Gray-200, #EEE)'
                              }}    
                              >
                            </TextField>
                    </div>


                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '4px',
                        alignSelf: 'stretch'
                    }}
                    >
                        <div style={{display:'flex',
                                    flexDirection:'row'
                                    }}
                        >
                            <Typography sx={{
                                  color: 'var(--Gray-Gray-900, #222)',
                                  fontFamily: 'Pretendard',
                                  fontSize: '14px',
                                  fontStyle: 'normal',
                                  fontWeight: '700',
                                  lineHeight: '20px'
                            }}
                            >
                                비밀번호
                            </Typography>
                        </div>
                        <div style={{display:'flex', flexDirection:'row'}}>
                        <TextField
                              fullWidth
                              type="password"
                              variant='standard'
                              InputProps={{ disableUnderline: true }}
                              name='password'
                              value={profile.password}
                              onChange={handleChange}
                              sx={{
                                display: 'flex',
                                width:'920px',
                                height: '48px',
                                padding: '16px',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                flex: '1 0 0',
                                borderRadius: '4px',
                                border: '1px solid var(--Gray-Gray-200, #EEE)'
                              }}    
                              >
                            </TextField>
                            <Button
                              sx={{
                                display: 'flex',
                                padding: '8px 16px',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '100px',
                                border: '1px solid var(--Main-Blue-Blue-500, #067DFD)',
                                background: 'var(--White, #FFF)',
                                marginLeft:'12px'
                              }}
                              >
                                비밀번호 변경
                              </Button>
                            </div>
                    </div>

                    
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '4px',
                        alignSelf: 'stretch'
                    }}
                    >
                        <div style={{display:'flex',
                                    flexDirection:'row'
                                    }}
                        >
                            <Typography sx={{
                                  color: 'var(--Gray-Gray-900, #222)',
                                  fontFamily: 'Pretendard',
                                  fontSize: '14px',
                                  fontStyle: 'normal',
                                  fontWeight: '700',
                                  lineHeight: '20px'
                            }}
                            >
                                이메일
                            </Typography>
                        </div>
                        <TextField
                              fullWidth
                              variant='standard'
                              InputProps={{ disableUnderline: true }}
                              name='email'
                              value={profile.email}
                              onChange={handleChange}
                              sx={{
                                display: 'flex',
                                height: '48px',
                                padding: '16px',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                alignSelf: 'stretch',
                                borderRadius: '4px',
                                border: '1px solid var(--Gray-Gray-200, #EEE)'
                              }}    
                              >
                            </TextField>
                    </div>

                    <div style={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '4px',
                        alignSelf: 'stretch'
                    }}
                    >
                        <div style={{display:'flex',
                                    flexDirection:'row'
                                    }}
                        >
                            <Typography sx={{
                                  color: 'var(--Gray-Gray-900, #222)',
                                  fontFamily: 'Pretendard',
                                  fontSize: '14px',
                                  fontStyle: 'normal',
                                  fontWeight: '700',
                                  lineHeight: '20px'
                            }}
                            >
                                연락처
                            </Typography>
                            {/* <Typography sx={{
                                color: 'var(--Main-Red-Red-500, #EF2B2A)',
                                fontFamily: 'Pretendard',
                                fontSize: '14px',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                lineHeight: '20px'
                            }}
                            >
                                *
                            </Typography> */}
                        </div>
                        <TextField
                              value={profile.tel}
                              name='tel'
                              onChange={handleChange}
                              variant='standard'
                              InputProps={{ disableUnderline: true }}
                              sx={{
                                display: 'flex',
                                width:'520px',
                                height: '48px',
                                padding: '16px',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                alignSelf: 'stretch',
                                borderRadius: '4px',
                                border: '1px solid var(--Gray-Gray-200, #EEE)'
                              }}    
                              >
                            </TextField>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '4px',
                        alignSelf: 'stretch',
                        marginLeft:'20px'
                    }}
                    >
                        <div style={{display:'flex',
                                    flexDirection:'row'
                                    }}
                        >
                            <Typography sx={{
                                  color: 'var(--Gray-Gray-900, #222)',
                                  fontFamily: 'Pretendard',
                                  fontSize: '14px',
                                  fontStyle: 'normal',
                                  fontWeight: '700',
                                  lineHeight: '20px'
                            }}
                            >
                                핸드폰연락처
                            </Typography>
                            <Typography sx={{
                                color: 'var(--Main-Red-Red-500, #EF2B2A)',
                                fontFamily: 'Pretendard',
                                fontSize: '14px',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                lineHeight: '20px'
                            }}
                            >
                                *
                            </Typography>
                        </div>
                        <TextField
                             {...register('phone', { required: true , pattern: /^\d{3}-\d{3,4}-\d{4}$/ })}
                              name='phone'
                              value={profile.phone}
                              onChange={handleChange}
                              variant='standard'
                              InputProps={{ disableUnderline: true }}
                              sx={{
                                display: 'flex',
                                width:'520px',
                                height: '48px',
                                padding: '16px',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                alignSelf: 'stretch',
                                borderRadius: '4px',
                                border: '1px solid var(--Gray-Gray-200, #EEE)'

                                ,background : errors.phone?.type === "required" ?'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',    
                                marginBottom: errors.phone?.type === "required" ?'20px' : '',    
                                borderWidth: errors.phone?.type === "required" ? '1px 1px 1px 10px': '' ,
                                borderStyle: errors.phone?.type === "required" ? 'solid' : '',
                                borderColor: errors.phone?.type === "required" ? 'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',
                                borderImage: errors.phone?.type === "required" ? 'initial' : '',
                              }}    
                              >
                            </TextField>
                            {/* {errors.phone?.type === "required" && <span>연락처를 입려하세요</span>} */}
                            {errors?.phone?.type === "pattern" && (<p>휴대폰번호를제대로 입력하세요</p> )}
                    </div>
                  </div>

                  <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '4px',
                        alignSelf: 'stretch'
                    }}
                    >
                        <div style={{display:'flex',
                                    flexDirection:'row'
                                    }}
                        >
                            <Typography sx={{
                                  color: 'var(--Gray-Gray-900, #222)',
                                  fontFamily: 'Pretendard',
                                  fontSize: '14px',
                                  fontStyle: 'normal',
                                  fontWeight: '700',
                                  lineHeight: '20px'
                            }}
                            >
                                서명이미지
                            </Typography>
                        </div>
                        <div style={{
                            display: 'flex',
                            padding: '16px',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            borderRadius: '4px',
                            border: '1px solid var(--Gray-Gray-200, #EEE)'
                        }}
                        >
                            <img src={sign} width='150px' height='127px' />
                        </div>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '4px',
                        alignSelf: 'stretch'
                    }}
                    >
                        <div style={{display:'flex',
                                    flexDirection:'row'
                                    }}
                        >
                            <Typography sx={{
                                  color: 'var(--Gray-Gray-900, #222)',
                                  fontFamily: 'Pretendard',
                                  fontSize: '14px',
                                  fontStyle: 'normal',
                                  fontWeight: '700',
                                  lineHeight: '20px'
                            }}
                            >
                                비고
                            </Typography>
                        </div>
                        <TextField
                              fullWidth
                              variant='standard'
                              InputProps={{ disableUnderline: true }}
                              name='bigo'
                              value={profile.bigo}
                              onChange={handleChange}
                              sx={{
                                display: 'flex',
                                height: '48px',
                                padding: '16px',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                alignSelf: 'stretch',
                                borderRadius: '4px',
                                border: '1px solid var(--Gray-Gray-200, #EEE)'
                              }}    
                              >
                            </TextField>
                    </div>
                   
                   </div> 
                
                <Stack direction="row" spacing={1} mt={3} ml={-3} >
                    {/* <Button 
                         sx={{
                            display: 'flex',
                            height: '36px',
                            padding: '8px 16px',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '4px',
                            background: 'var(--Main-Blue-Blue-500, #067DFD)',
                            boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.20)'
                         }}
                         type='submit'
                         >
                            <Typography sx={{
                                color: 'var(--White, #FFF)',
                                fontFamily: 'Pretendard',
                                fontSize: '14px',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                lineHeight: '20px'
                            }}
                            >
                            저장하기
                            </Typography>
                         </Button> */}
                      <Button
                        style={{
                            display: 'flex',
                            height: '36px',
                            padding: '8px 16px',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '4px',
                            background: 'var(--Main-Blue-Blue-500, #067DFD)',
                            boxShadow:
                                '0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.20)'
                        }}
                        type='submit'
                    >
                        <Typography
                            sx={{
                                color: 'var(--White, #FFF)',
                                fontFamily: 'Pretendard',
                                fontSize: '14px',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                lineHeight: '20px'
                            }}
                        >
                            저장하기
                        </Typography>
                    </Button>
                    <Button
                        sx={{
                            display: 'flex',
                            height: '36px',
                            padding: '8px 16px',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '4px',
                            marginLeft:'12px',
                            boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.20)'
                        }}
                    >
                        <Typography
                             sx={{
                                color: 'var(--Gray-Gray-700, #616161)',
                                fontFamily: 'Pretendard',
                                fontSize: '14px',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                lineHeight: '20px'
                             }}
                             >
                        취소하기
                        </Typography>
                    </Button>
                </Stack>
                </form>
                </React.Fragment>
  );
}

export default PersonalInfoForm;