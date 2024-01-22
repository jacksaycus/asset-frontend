import * as React from 'react';
import { Container, Button, Stack, Typography, TextField, Grid, Paper, Box } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import Page from 'src/components/Page';
import { styled } from '@mui/material/styles';
import { Icon, addIcon } from '@iconify/react';
import ErrorIcon from 'src/assets/images/icons/error.png';
import CompanyDialog from './CompanyDialog';
import { Account } from 'src/types';

const getIcon = (name) => <Icon icon={name} width={20} height={20} />;

addIcon('search', {
    body: '<path d="M16.3333 17.5L11.0833 12.25C10.6667 12.5833 10.1875 12.8472 9.64583 13.0417C9.10417 13.2361 8.52778 13.3333 7.91667 13.3333C6.40278 13.3333 5.12153 12.809 4.07292 11.7604C3.02431 10.7118 2.5 9.43056 2.5 7.91667C2.5 6.40278 3.02431 5.12153 4.07292 4.07292C5.12153 3.02431 6.40278 2.5 7.91667 2.5C9.43056 2.5 10.7118 3.02431 11.7604 4.07292C12.809 5.12153 13.3333 6.40278 13.3333 7.91667C13.3333 8.52778 13.2361 9.10417 13.0417 9.64583C12.8472 10.1875 12.5833 10.6667 12.25 11.0833L17.5 16.3333L16.3333 17.5ZM7.91667 11.6667C8.95833 11.6667 9.84375 11.3021 10.5729 10.5729C11.3021 9.84375 11.6667 8.95833 11.6667 7.91667C11.6667 6.875 11.3021 5.98958 10.5729 5.26042C9.84375 4.53125 8.95833 4.16667 7.91667 4.16667C6.875 4.16667 5.98958 4.53125 5.26042 5.26042C4.53125 5.98958 4.16667 6.875 4.16667 7.91667C4.16667 8.95833 4.53125 9.84375 5.26042 10.5729C5.98958 11.3021 6.875 11.6667 7.91667 11.6667Z" fill="#067DFD"/>'
});
addIcon('attach', {
    body: '<path d="M9.58333 18.3307C8.30556 18.3307 7.22222 17.8863 6.33333 16.9974C5.44444 16.1085 5 15.0252 5 13.7474V4.9974C5 4.08073 5.32639 3.29601 5.97917 2.64323C6.63194 1.99045 7.41667 1.66406 8.33333 1.66406C9.25 1.66406 10.0347 1.99045 10.6875 2.64323C11.3403 3.29601 11.6667 4.08073 11.6667 4.9974V11.6641H10.4167V4.9974C10.4167 4.41406 10.2153 3.92101 9.8125 3.51823C9.40972 3.11545 8.91667 2.91406 8.33333 2.91406C7.75 2.91406 7.25694 3.11545 6.85417 3.51823C6.45139 3.92101 6.25 4.41406 6.25 4.9974V13.7474C6.25 14.6641 6.57639 15.4488 7.22917 16.1016C7.88194 16.7543 8.66667 17.0807 9.58333 17.0807C9.98611 17.0807 10.3646 17.0148 10.7188 16.8828C11.0729 16.7509 11.3889 16.5668 11.6667 16.3307V17.8307C11.3472 17.9835 11.0139 18.105 10.6667 18.1953C10.3194 18.2856 9.95833 18.3307 9.58333 18.3307ZM13.3333 17.4974V14.9974H10.8333V13.3307H13.3333V10.8307H15V13.3307H17.5V14.9974H15V17.4974H13.3333ZM9.58333 13.7474V14.9974C9 14.9974 8.50694 14.796 8.10417 14.3932C7.70139 13.9905 7.5 13.4974 7.5 12.9141V4.9974H8.75V12.9141C8.75 13.1502 8.82986 13.3481 8.98958 13.5078C9.14931 13.6675 9.34722 13.7474 9.58333 13.7474ZM12.9167 9.16406V4.9974H14.1667V9.16406H12.9167Z" fill="#067DFD"/>'
});
addIcon('error', {
    body: '<path d="M12 17C12.2833 17 12.5208 16.9042 12.7125 16.7125C12.9042 16.5208 13 16.2833 13 16C13 15.7167 12.9042 15.4792 12.7125 15.2875C12.5208 15.0958 12.2833 15 12 15C11.7167 15 11.4792 15.0958 11.2875 15.2875C11.0958 15.4792 11 15.7167 11 16C11 16.2833 11.0958 16.5208 11.2875 16.7125C11.4792 16.9042 11.7167 17 12 17ZM11 13H13V7H11V13ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" fill="#9E9E9E"/>'
});

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary
}));
const BadgeLayout = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '4px',
    alignSelf: 'stretch'
});
const ManagerBadge = styled('div')({
    display: 'flex',
    padding: '4px 8px',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: '4px',
    borderRadius: '100px',
    background: 'var(--Gray-Gray-200, #EEE)'
});

const RootDiv = styled('div')({
    display: 'flex',
    padding: '28px',
    width: '1150px',
    flexDirection: 'column',
    position: 'relative',
    left: '-15px',
    alignItems: 'flex-start',
    gap: '20px',
    alignSelf: 'stretch',
    borderRadius: '12px',
    border: '1px solid var(--Gray-Gray-300, #E0E0E0)',
    background: 'var(--White, #FFF)'
});

const SearchButton = styled('div')({
    display: 'flex',
    padding: '8px 16px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px',
    borderRadius: '100px',
    border: '1px solid var(--Main-Blue-Blue-500, #067DFD)',
    background: 'var(--White, #FFF)'
});

const ErrorStyle = styled('div')({
    width: '24px',
    height: '24px',
    marginTop: '7px',
    background: `url(${ErrorIcon}), lightgray -287.299px -188.073px / 291.971% 137.615% no-repeat`
});

const AttachCommentStyle = styled('div')({
    display: 'inline-flex',
    padding: '4px 8px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '4px',
    borderRadius: '4px',
    border: '1px solid var(--Gray-Gray-200, #EEE)'
});

function AccountCreate() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<Account>();

    const [values, setValues] = React.useState<Account>({
        company: '',
        userid:  '',
        authority:  '',
        name :  '',
        tel :  '',
        phone:  '',
        email :  '',
        rating:  '0',
        password:  '',
        repassword:  '',
        priority: '',
        bigo: '',
        branch: ''
    });
    
    const [file, setFile] = React.useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

    const [commpanyname, setCompanyname] = React.useState('');
    const [branchname, setBranchname] = React.useState('');

    const handleChange = ({ target: { name, value } }) => {
        setValues({
            [name]: value
        });
    };

    const handleSubmit1 = (e) => {
        e.preventDefault();
        console.log(`${values.userid} ${values.password}`);
        // navigate('/', { replace: true });

    //   const formData = new FormData();
    //   formData.append('_method', 'put');
    //   formData.append('first_name', values.first_name);
    //   formData.append('last_name', values.last_name);
    //   formData.append('phone_no', values.phone_no);
    //   formData.append('profile_picture', values.profile_picture, 'bermuda.png');
    //   formData.append('password', values.password);

    //   await axios
    //     .post(`/api/v1/users/${user.member_no}`, formData, 
    //      {
    //        headers: {'Content-Type': 'multipart/form-data'}
    //      })
    //     .then((res) => {
    //       console.log(res.data);
    //       if (res.status === 201) {
    //         console.log('success');
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err.response.data.message);
    //     });
    // },

    };

    const onSubmit = (data: Profile) => {
        alert(JSON.stringify(data));
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = (isopen, company, branch, companyname, branchname) => {
        setOpen(false);
        setCompanyname(companyname);
        setBranchname(branchname);
    };

    return (
        <>
            <form autoComplete="off" noValidate onSubmit={handleSubmit(onSubmit)}>
                <RootDiv>
                    <Typography
                        sx={{
                            color: 'var(--Gray-Gray-900, #222)',
                            fontFamily: 'Pretendard',
                            fontSize: '20px',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '28px'
                        }}
                    >
                        계정등록
                    </Typography>
                    {/* <Stack spacing={2} alignItems="left" mt={6}> */}
                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                            color: 'var(--Main-Red-Red-500, #EF2B2A)',
                            fontFamily: 'Pretendard',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            lineHeight: '20px'
                        }}
                    >
                        권한
                    </Typography>
                    <Grid container spacing={1} px={{ m: 1 }}>
                        <Grid item>
                            <ManagerBadge>
                                <svg
                                    width="8"
                                    height="8"
                                    viewBox="0 0 8 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="4" cy="4" r="4" fill="#00C400" />
                                </svg>
                                관리자
                            </ManagerBadge>
                        </Grid>
                        <Grid item>
                            <ManagerBadge>
                                <svg
                                    width="8"
                                    height="8"
                                    viewBox="0 0 8 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="4" cy="4" r="4" fill="#9D50E5" />
                                </svg>
                                승인권자
                            </ManagerBadge>
                        </Grid>
                        <Grid item>
                            <ManagerBadge>
                                <svg
                                    width="8"
                                    height="8"
                                    viewBox="0 0 8 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="4" cy="4" r="4" fill="#067DFD" />
                                </svg>
                                AS총괄
                            </ManagerBadge>
                        </Grid>
                        <Grid item>
                            <ManagerBadge>
                                <svg
                                    width="8"
                                    height="8"
                                    viewBox="0 0 8 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="4" cy="4" r="4" fill="#067DFD" />
                                </svg>
                                AS담당자
                            </ManagerBadge>
                        </Grid>
                        <Grid item>
                            <ManagerBadge>
                                <svg
                                    width="8"
                                    height="8"
                                    viewBox="0 0 8 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="4" cy="4" r="4" fill="#43BED0" />
                                </svg>
                                콜센터
                            </ManagerBadge>
                        </Grid>
                        <Grid item>
                            <ManagerBadge>
                                <svg
                                    width="8"
                                    height="8"
                                    viewBox="0 0 8 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="4" cy="4" r="4" fill="#F9560E" />
                                </svg>
                                고객
                            </ManagerBadge>
                        </Grid>
                    </Grid>
                    {/* </Stack>  */}
                    <Stack direction="row" spacing={0}>
                        <Typography
                            sx={{
                                color: 'var(--Gray-Gray-900, #222)',
                                fontFamily: 'Pretendard',
                                fontSize: '14px',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                lineHeight: '20px'
                            }}
                        >
                            회사 및 지점
                        </Typography>
                        <Typography
                            sx={{
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
                    </Stack>
                    <Stack direction="row" spacing={0}>
                        {/* <SearchButton>
                        <Typography
                           sx={{
                            color: 'var(--Main-Blue-Blue-500, #067DFD)',
                            textAlign: 'center',
                            fontFamily: 'Pretendard',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '20px'
                           }}
                           >
                            찾아보기
                           </Typography>
                           {getIcon('search')}
                    </SearchButton> */}
                        <Button
                            sx={{
                                display: 'flex',
                                padding: '8px 16px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '16px',
                                borderRadius: '100px',
                                border: '1px solid var(--Main-Blue-Blue-500, #067DFD)',
                                background: 'var(--White, #FFF)'
                            }}
                            onClick={handleClickOpen}
                        >
                            <Typography
                                sx={{
                                    color: 'var(--Main-Blue-Blue-500, #067DFD)',
                                    textAlign: 'center',
                                    fontFamily: 'Pretendard',
                                    fontSize: '14px',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    lineHeight: '20px'
                                }}
                            >
                                찾아보기
                            </Typography>
                            {getIcon('search')}
                        </Button>
                        {/* </SearchButton> */}
                        <CompanyDialog mopen={open} handleClose1={handleClose} />
                        <span>
                            {commpanyname} {branchname}
                        </span>
                    </Stack>

                    <Stack
                        direction="row"
                        spacing={0}
                        sx={{
                            paddingTop: '20px',
                            paddingBottom:'0px',
                            marginBottom:'0px'
                        }}
                    >
                        <Typography
                            sx={{
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
                        <Typography
                            sx={{
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
                    </Stack>
                    <TextField
                        {...register('userid', { required: true} )}
                        fullWidth
                        variant="outlined"
                        InputProps={{disableUnderline:true}}
                        sx={{
                            // display: 'flex',
                            // height: '48px',
                            // padding: '16px',
                            // flexDirection: 'column',
                            // justifycontent: 'left',
                            // alignItems: 'flex-start',
                            // alignSelf: 'stretch',
                            // borderRadius: '4px',
                            // paddingTop: '20px'
                            // border: '1px solid var(--Main-Blue-Blue-500, #067DFD)'

                            background : errors.userid?.type === "required" ?'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',    
                            marginBottom: errors.userid?.type === "required" ?'20px' : '',    
                            borderWidth: errors.userid?.type === "required" ? '1px 1px 1px 10px': '' ,
                            borderStyle: errors.userid?.type === "required" ? 'solid' : '',
                            borderColor: errors.userid?.type === "required" ? 'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',
                            borderImage: errors.userid?.type === "required" ? 'initial' : '',
                        }}
                        name="userid"
                        value={values.userid}
                        onChange={handleChange}
                    />
                    {/* {errors.userid?.type === "required" && <span>아이디를 입력하세요</span>} */}
                    <Grid
                        container
                        spacing={61}
                        px={{ m: 1 }}
                        sx={{
                            paddingTop: '30px'
                        }}
                    >
                        <Grid item>
                            <Stack direction="row" spacing={0}>
                                <Typography
                                    sx={{
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
                                <Typography
                                    sx={{
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
                            </Stack>
                        </Grid>
                        <Grid item>
                            <Stack direction="row" spacing={0}>
                                <Typography
                                    sx={{
                                        color: 'var(--Gray-Gray-900, #222)',
                                        fontFamily: 'Pretendard',
                                        fontSize: '14px',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        lineHeight: '20px'
                                    }}
                                >
                                    비밀번호 확인
                                </Typography>
                                <Typography
                                    sx={{
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
                            </Stack>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} ml={{ m: 0 }}>
                        <Grid item>
                            <TextField
                               {...register('password', { required: true} )}
                                fullWidth
                                variant="outlined"
                                InputProps={{disableUnderline:true}}
                                sx={{
                                     width: '535px',
                                    // display: 'flex',
                                    // height: '38px',
                                    // padding: '0px',
                                    // flexDirection: 'column',
                                    // justifycontent: 'left',
                                    // alignItems: 'flex-start',
                                    // alignSelf: 'stretch',
                                    // borderRadius: '4px'
                                      // border: '1px solid var(--Main-Blue-Blue-500, #067DFD)'
                                    background : errors.password?.type === "required" ?'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',    
                                    marginBottom: errors.password?.type === "required" ?'20px' : '',    
                                    borderWidth: errors.password?.type === "required" ? '1px 1px 1px 10px': '' ,
                                    borderStyle: errors.password?.type === "required" ? 'solid' : '',
                                    borderColor: errors.password?.type === "required" ? 'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',
                                    borderImage: errors.password?.type === "required" ? 'initial' : '',
                                }}
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                            />
                            {/* {errors.password?.type === "required" && <p>비밀번호를 입력하세요</p>} */}
                        </Grid>
                        <Grid item>
                            <TextField
                                {...register('repassword', { required: true,
                                  validate: (value) => value === watch("password") || "패스워드가 일치하지 않습니다"
                                } )}
                                fullWidth
                                variant="outlined"
                                InputProps={{disableUnderline:true}}
                                sx={{
                                    width: '535px',
                                    // display: 'flex',
                                    // height: '38px',
                                    // padding: '0px',
                                    // flexDirection: 'column',
                                    // justifycontent: 'left',
                                    // alignItems: 'flex-start',
                                    // alignSelf: 'stretch',
                                    // borderRadius: '4px'
                                    background : errors.repassword?.type === "required" ?'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',    
                                    marginBottom: errors.repassword?.type === "required" ?'20px' : '',    
                                    borderWidth: errors.repassword?.type === "required" ? '1px 1px 1px 10px': '' ,
                                    borderStyle: errors.repassword?.type === "required" ? 'solid' : '',
                                    borderColor: errors.repassword?.type === "required" ? 'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',
                                    borderImage: errors.repassword?.type === "required" ? 'initial' : '',
                                }}
                                type="password"
                                name="repassword"
                                
                            />
                     <div style={{display:'flex', flexDirection:'row', margin:'0px', padding:'0px'}} >
                    {/* {errors.repassword?.type === "required" && <p>비밀번호확인을 입력하세요</p>}
                    {errors.repassword && <p>{errors.repassword?.message}</p>} */}
                    </div>
                        </Grid>
                    </Grid>
                    
                    <Grid
                        container
                        spacing={64}
                        px={{ m: 1 }}
                        pt={{ m: 2 }}
                        sx={{
                            paddingTop: '20px'
                        }}
                    >
                        <Grid item>
                            <Stack direction="row" spacing={0}>
                                <Typography
                                    sx={{
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
                            </Stack>
                        </Grid>
                        <Grid item>
                            <Stack direction="row" spacing={0}>
                                <Typography
                                    sx={{
                                        color: 'var(--Gray-Gray-900, #222)',
                                        fontFamily: 'Pretendard',
                                        fontSize: '14px',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        lineHeight: '20px'
                                    }}
                                >
                                    핸도폰 연락처
                                </Typography>
                                <Typography
                                    sx={{
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
                            </Stack>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} ml={{ m: 0 }}>
                        <Grid item>
                            <TextField
                                fullWidth
                                variant="outlined"
                                InputProps={{disableUnderline:true}}
                                sx={{
                                    width: '535px',
                                    // display: 'flex',
                                    // height: '38px',
                                    // padding: '0px',
                                    // flexDirection: 'column',
                                    // justifycontent: 'left',
                                    // alignItems: 'flex-start',
                                    // alignSelf: 'stretch',
                                    // borderRadius: '4px'
                                      // border: '1px solid var(--Main-Blue-Blue-500, #067DFD)'
                                }}
                                name='tel'
                                value={values.tel}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                {...register('phone', { required: true,  pattern: /^\d{3}-\d{3,4}-\d{4}$/ } )}
                                fullWidth
                                variant="outlined"
                                InputProps={{disableUnderline:true}}
                                sx={{
                                    width: '535px',
                                    // display: 'flex',
                                    // height: '38px',
                                    // padding: '0px',
                                    // flexDirection: 'column',
                                    // justifycontent: 'left',
                                    // alignItems: 'flex-start',
                                    // alignSelf: 'stretch',
                                    // borderRadius: '4px'
                                    background : errors.phone?.type === "required" ?'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',    
                                    marginBottom: errors.phone?.type === "required" ?'20px' : '',    
                                    borderWidth: errors.phone?.type === "required" ? '1px 1px 1px 10px': '' ,
                                    borderStyle: errors.phone?.type === "required" ? 'solid' : '',
                                    borderColor: errors.phone?.type === "required" ? 'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',
                                    borderImage: errors.phone?.type === "required" ? 'initial' : '',  
                                }}
                                name="phone"
                                value={values.phone}
                                onChange={handleChange}
                            />
                            {/* {errors.phone?.type === "required" && <p>핸드폰 연락처를 입력하세요</p>}
                            {errors?.phone?.type === "pattern" && (<p>휴대폰번호를제대로 입력하세요</p> )} */}
                        </Grid>
                    </Grid>
                    
                    <Stack
                        direction="row"
                        spacing={0}
                        sx={{
                            paddingTop: '20px'
                        }}
                    >
                        <Typography
                            sx={{
                                color: 'var(--Gray-Gray-900, #222)',
                                fontFamily: 'Pretendard',
                                fontSize: '14px',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                lineHeight: '20px'
                            }}
                        >
                            운선순위
                        </Typography>
                    </Stack>
                    <TextField
                        fullWidth
                        variant="standard"
                        InputProps={{disableUnderline:true}}
                        sx={{
                            display: 'flex',
                            height: '46px',
                            padding: '0px',
                            flexDirection: 'column',
                            justifycontent: 'left',
                            alignItems: 'flex-start',
                            alignSelf: 'stretch',
                            borderRadius: '4px'
                            // border: '1px solid var(--Main-Blue-Blue-500, #067DFD)'
                        }}
                        name="priority"
                        value={values.priority}
                        onChange={handleChange}
                    />

                    <Typography
                        sx={{
                            color: 'var(--Gray-Gray-900, #222)',
                            fontFamily: 'Pretendard',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            lineHeight: '20px'
                        }}
                    >
                        서명 이미지
                    </Typography>

                    <Stack direction="row" spacing={0}>
                        {/* <SearchButton> */}
                        <input id="file" type="file" accept='.JPEG, PNG, GIF' onChange={handleFileChange} hidden />
                        <label htmlFor='file'
                             style={{
                                cursor: 'pointer',
                                display: 'flex',
                                padding: '8px 16px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '16px',
                                borderRadius: '100px',
                                border: '1px solid var(--Main-Blue-Blue-500, #067DFD)',
                                background: 'var(--White, #FFF)',
                             }}
                             >
                            <Typography
                                sx={{
                                    color: 'var(--Main-Blue-Blue-500, #067DFD)',
                                    textAlign: 'center',
                                    fontFamily: 'Pretendard',
                                    fontSize: '14px',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    lineHeight: '20px'
                                }}
                            >
                                파일선택
                            </Typography>
                            {getIcon('attach')}
                        </label>
                        
                        {/* </SearchButton> */}
                        <div
                            style={{ display: 'flex', alignItems: 'center', paddingLeft: '12px' }}
                        ></div>
                        <ErrorStyle />
                        <div
                            style={{
                                width: '5px',
                                height: '8px',
                                flexShrink: '0',
                                fill: 'var(--Gray-Gray-900, #222)',
                                paddingTop: '5px'
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="5"
                                height="8"
                                viewBox="0 0 5 8"
                                fill="none"
                            >
                                <path d="M0 4L5 0V8L0 4Z" fill="#222222" />
                            </svg>
                        </div>
                        <div
                            style={{
                                display: 'inline-flex',
                                padding: '4px 8px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '4px',
                                borderRadius: '4px',
                                background: 'var(--Gray-Gray-900, #222)'
                            }}
                        >
                            <Typography
                                sx={{
                                    color: 'var(--White, #FFF)',
                                    fontFamily: 'Pretendard',
                                    fontSize: '12px',
                                    fontStyle: 'normal',
                                    fontWeight: '500',
                                    lineHeight: '16px'
                                }}
                            >
                                PNG 파일 업로드만 가능합니다.
                            </Typography>
                        </div>
                    </Stack>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: '4px',
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
                                lineHeight: '20px'
                            }}
                        >
                            비고
                        </Typography>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            height: '48px',
                            //  padding: '16px',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            alignSelf: 'stretch',
                            borderRadius: '4px',
                            border: '1px solid var(--Gray-Gray-200, #EEE)'
                        }}
                    >
                        <TextField
                            fullWidth
                            variant="outlined"
                            InputProps={{disableUnderline:true}}
                            sx={{
                                display: 'flex',
                                height: '46px',
                                padding: '0px',
                                flexDirection: 'column',
                                justifycontent: 'left',
                                alignItems: 'flex-start',
                                alignSelf: 'stretch'
                                //borderRadius: '4px',
                                // border: '1px solid var(--Main-Blue-Blue-500, #067DFD)'
                            }}
                            name="bigo"
                            value={values.bigo}
                            onChange={handleChange}
                        />
                    </div>
                </RootDiv>
                <Stack direction="row" spacing={0} sx={{ paddingTop: '20px' }}>
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
                        style={{
                            display: 'flex',
                            marginLeft:'10px',
                            height: '36px',
                            padding: '8px 16px',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '4px',
                            boxShadow:
                                '0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.20)'
                        }}
                    >
                        취소하기
                    </Button>
                </Stack>
            </form>
        </>
    );
}

export default AccountCreate;
