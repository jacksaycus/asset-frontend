import * as React from 'react';
import { Container, Button, Stack, Typography, TextField, Grid, Paper, Box, Alert,Snackbar } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { useLocation  } from 'react-router-dom'
import { useMutation, useQueryClient, useQuery,QueryClient } from '@tanstack/react-query';
// import Page from 'src/components/Page';
import { styled } from '@mui/material/styles';
import { Icon, addIcon } from '@iconify/react';
import ErrorIcon from 'src/assets/images/icons/error.png';
import CompanyDialog from './CompanyDialog';
import { Account } from 'src/types';
import { addAccount,getBranch,delAccount } from '../api/assetapi';
import Auth0 from 'src/assets/images/icons/auth0.png';
import Auth1 from 'src/assets/images/icons/auth1.png';
import Auth2 from 'src/assets/images/icons/auth2.png';
import Auth3 from 'src/assets/images/icons/auth3.png';
import Auth4 from 'src/assets/images/icons/auth4.png';
import Auth5 from 'src/assets/images/icons/auth4.png';
import * as _ from "lodash";

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
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        trigger,
        setValue,
        getValues,
        formState: { errors }
    } = useForm<Account>();

    let location = useLocation();
    
    const undefinedtostr = (str) =>{
        if(str==null || _.isUndefined(str))return ''
        else return str
    }
   
    const[auth,setAuth] = React.useState(0)
    const handleAuth = (param) => {
        setAuth(Number(param))
        console.log('auth',auth)
    }
    const [isWarning, setIsWarning] = React.useState(false)
    const [open, setOpen] = React.useState(false);
    const [file, setFile] = React.useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

    const [branchname, setBranchname] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // setValues({ ...values, [event.target.name]: event.target.value });
    }

     const delmutate = useMutation({mutationFn : delAccount,
        onSuccess: () => {
        },
        onError: (err) => {
          console.error(err);
        },
      })
    
      const handleDel = (event) => {

        // if (window.confirm(`진심으로 삭제하시겠습니까?`)) {

        // console.log(getValues('userNo'))
        // let param = new FormData()
        // let arg = {}
        // arg.userNo = undefinedtostr(getValues('userNo'))
        // param.append('params',JSON.stringify(arg))
        // delmutate.mutate(userNo) 
        // }
    }

    const[isSave,setIsSave] = React.useState(false)    
    const addmutate = useMutation({mutationFn : addAccount,
        onSuccess: () => {
        //   queryClient.invalidateQueries(["Account"]);
        setIsSave(true)
        },
        onError: (err) => {
          console.error(err);
        },
      }) 

      const handleSave = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        console.log(branchname.length)
        if(branchname.length<1){
            setIsWarning(true)
            return;
        }
        
        let param = new FormData()
        let props = {}
        let arg = {}
        arg.userNo = undefinedtostr(getValues('userNo'))
        arg.userId = undefinedtostr(getValues('userid'))
        arg.userName = undefinedtostr(getValues('username'))
        arg.userPwd = undefinedtostr(getValues('password'))
        arg.userTel = undefinedtostr(getValues('tel'))
        arg.userMobile = undefinedtostr(getValues('phone'))
        arg.userEmail = undefinedtostr(getValues('email'))
        arg.userEtc = undefinedtostr(getValues('bigo'))
        arg.enable = true
        arg.firstFlag = true
        arg.authCode = auth.toString()
        let temp = undefinedtostr(getValues('branch'))
        let b = []
        for (let i=0;i<temp.length;i++){
            b.push(Number(temp[i]))
        }
        arg.branchNoList = b
        param.append('params',JSON.stringify(arg))
        param.append('file',file)
        console.log(JSON.stringify(arg))
        let params = {}
        for (var key of param.entries()) {
            console.log(key[0] + ', ' + key[1]);
        }
        // console.log(file)
        let mode='POST'
        if(location.state!=null){
            mode='PUT'
        }
        param.append('mode',mode)
        
        addmutate.mutate(param)
      
      }  
    
 
    const onSubmit = (data: any,e) => {
        console.log(e)
        handleSave(e)
    };

    const setBranchName1 = () => {
        setBranchname('')
    }

    const setValues1 = (name,value) => {
        //setValues({ ...values, [name]: value });
        setValue('branch', value)
        
    }
    
    const handleClose = (branchname1) => {
        setOpen(false);
        //setCompanyname('');
        setBranchname(branchname1)
        setIsWarning(false)
    };


    const [delorcancel, setDelorcancel] = React.useState('취소하기');
    React.useEffect(() => {
        if(location.state!=null){
            console.log(location.state.node)
            const param = location.state.param
            console.log(param)
            setValue('userid', undefinedtostr(param.userId))
            setValue('username', undefinedtostr(param.userName))
            setValue('password' , undefinedtostr(param.usePwd))
            setValue('tel' , undefinedtostr(param.userTel))
            setValue('phone' , undefinedtostr(param.userMobile))
            setValue('email' , undefinedtostr(param.userEmail))
            setValue('bigo' , undefinedtostr(param.userEtc))
            setValue('branch','')
            
            let temp = undefinedtostr(param.branchList)
            if(temp!==''){
            let str=[]
            let branchname=''
            for(let i=0;i<param.branchList.length;i++){
               str.push(param.branchList[i].branchNo)
            //    str+=','
               branchname += param.branchList[i].branchName
               branchname+=','
            }
            // console.log(branchname)
            setBranchname(branchname)
            setValue('branch',str)
            setValue('attachFileName' , undefinedtostr(param.attachFileName))
            setValue('attachFilePath' , undefinedtostr(param.attachFilePath))
            setValue('attachNo' , undefinedtostr(param.attachNo))
            setValue('userNo' , undefinedtostr(param.userNo))
           }
           setDelorcancel('삭제하기')
        }    
      }, [])
    return (
        <>
            <form autoComplete="off" method='post' noValidate onSubmit={handleSubmit(onSubmit)} encType='multipart/form'>
                <input type='hidden' {...register('branch', { required: false} )} />
                <input type='hidden' {...register('attachFileName', { required: false} )} />
                <input type='hidden' {...register('attachFilePath', { required: false} )} />
                <input type='hidden' {...register('attachNo', { required: false} )} />
                <input type='hidden' {...register('userNo', { required: false} )} />
                
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
                            <Button 
                                   style={{
                                    display: 'flex',
                                    padding: '4px 8px',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '4px',
                                    borderRadius: '100px',
                                    background: 'var(--Gray-Gray-200, #EEE)',
                                    border: auth===0 ? '1px solid var(--Sub-Purple-Purple-500, #9D50E5)':''
                                   }}
                                   onClick={()=>setAuth(0)}
                                >
                                <img src={Auth0} width='8px' height='8px' />
                                <span style={{
                                    color: 'var(--Main-Green-Green-500, #00C400)',
                                    textAlign: 'center',
                                    fontFamily: 'Pretendard',
                                    fontSize: '12px',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    lineHeight: '16px'
                                }}
                                >
                                관리자
                                </span>
                                </Button>
                        </Grid>
                        <Grid item>
                        <Button
                        
                                   style={{
                                    display: 'flex',
                                    padding: '4px 8px',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '4px',
                                    borderRadius: '100px',
                                    background: 'var(--Gray-Gray-200, #EEE)',
                                    border: auth===1 ? '1px solid var(--Sub-Purple-Purple-500, #9D50E5)':''
                                   }}
                                   onClick={()=>handleAuth(1)}
                                >
                                <img src={Auth1} width='8px' height='8px' />
                                <span style={{
                                    color: 'var(--Sub-Purple-Purple-500, #9D50E5)',
                                    textAlign: 'center',
                                    fontFamily: 'Pretendard',
                                    fontSize: '12px',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    lineHeight: '16px'
                                }}
                                >
                                승인권자
                                </span>
                                </Button>

                        </Grid>
                        <Grid item>
                        <Button
                        
                                   style={{
                                    display: 'flex',
                                    padding: '4px 8px',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '4px',
                                    borderRadius: '100px',
                                    background: 'var(--Gray-Gray-200, #EEE)',
                                    border: auth===2 ? '1px solid var(--Sub-Purple-Purple-500, #9D50E5)':''
                                   }}
                                   onClick={()=>setAuth(2)}
                                >
                                <img src={Auth2} width='8px' height='8px' />
                                <span style={{
                                    color: 'var(--Main-Blue-Blue-500, #067DFD)',
                                    textAlign: 'center',
                                    fontFamily: 'Pretendard',
                                    fontSize: '12px',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    lineHeight: '16px'
                                }}
                                >
                                AS총괄
                                </span>
                                </Button>
                           
                        </Grid>
                        <Grid item>
                        <Button 
                        
                                   style={{
                                    display: 'flex',
                                    padding: '4px 8px',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '4px',
                                    borderRadius: '100px',
                                    background: 'var(--Gray-Gray-200, #EEE)',
                                    border: auth===3 ? '1px solid var(--Sub-Purple-Purple-500, #9D50E5)':''
                                   }}
                                   onClick={()=>setAuth(3)}
                                >
                                <img src={Auth3} width='8px' height='8px' />
                                <span style={{
                                    color: 'var(--Main-Blue-Blue-500, #067DFD)',
                                    textAlign: 'center',
                                    fontFamily: 'Pretendard',
                                    fontSize: '12px',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    lineHeight: '16px'
                                }}
                                >
                                AS담당자
                                </span>  
                            </Button>    
                        </Grid>
                        <Grid item>
                        <Button 
                        
                                   style={{
                                    display: 'flex',
                                    padding: '4px 8px',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '4px',
                                    borderRadius: '100px',
                                    background: 'var(--Gray-Gray-200, #EEE)',
                                    border: auth===4 ? '1px solid var(--Sub-Purple-Purple-500, #9D50E5)':''
                                   }}
                                   onClick={()=>setAuth(4)}
                                >
                                <img src={Auth4} width='8px' height='8px' />
                                <span style={{
                                    color: 'var(--Sub-Teal-Teal-500, #43BED0)',
                                    textAlign: 'center',
                                    fontFamily: 'Pretendard',
                                    fontSize: '12px',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    lineHeight: '16px'
                                }}
                                >
                                콜센터
                                </span>  
                            </Button>
                        </Grid>
                        <Grid item>
                        <Button 
                        
                                   style={{
                                    display: 'flex',
                                    padding: '4px 8px',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '4px',
                                    borderRadius: '100px',
                                    background: 'var(--Gray-Gray-200, #EEE)',
                                    border: auth===5 ? '1px solid var(--Sub-Purple-Purple-500, #9D50E5)':''
                                   }}
                                   onClick={()=>setAuth(5)}
                                >
                                <img src={Auth5} width='8px' height='8px' />
                                <span style={{
                                    color: 'var(--Main-Orange-Orange-500, #F9560E)',
                                    textAlign: 'center',
                                    fontFamily: 'Pretendard',
                                    fontSize: '12px',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    lineHeight: '16px'
                                }}
                                >
                                고객
                                </span>  
                            </Button>
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
                        
                        <CompanyDialog handleClose1={handleClose} setBranchName1= {setBranchName1} setValues1={setValues1} />
                        <span>
                            {branchname}
                        </span>
                        {isWarning &&
                        <Alert severity="error" >지점을 선택하세요</Alert>
                        }
                    </Stack>
                    
                    <Grid
                        container
                        spacing={62}
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
                                    이름
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
                        {...register('userid', { required: true} )}
                        fullWidth
                        variant="outlined"
                        sx={{
                            width: '535px',
                            background : errors.userid?.type === "required" ?'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',    
                            marginBottom: errors.userid?.type === "required" ?'20px' : '',    
                            borderWidth: errors.userid?.type === "required" ? '1px 1px 1px 10px': '' ,
                            borderStyle: errors.userid?.type === "required" ? 'solid' : '',
                            borderColor: errors.userid?.type === "required" ? 'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',
                            borderImage: errors.userid?.type === "required" ? 'initial' : '',
                        }}
                        name="userid"
                        // value={values.userid}
                        onChange={handleChange}
                    />
                    </Grid>
                    <Grid item>
                        <TextField
                        {...register('username', { required: true} )}
                        fullWidth
                        variant="outlined"
                        // InputProps={{disableUnderline:true}}
                        sx={{
                            width: '535px',
                            background : errors.username?.type === "required" ?'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',    
                            marginBottom: errors.username?.type === "required" ?'20px' : '',    
                            borderWidth: errors.username?.type === "required" ? '1px 1px 1px 10px': '' ,
                            borderStyle: errors.username?.type === "required" ? 'solid' : '',
                            borderColor: errors.username?.type === "required" ? 'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',
                            borderImage: errors.username?.type === "required" ? 'initial' : '',
                        }}
                        name="username"
                        // value={values.username}
                        onChange={handleChange}
                    />
                     <div style={{display:'flex', flexDirection:'row', margin:'0px', padding:'0px'}} >
                    </div>
                    </Grid>
                    </Grid>




                    
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
                                // InputProps={{disableUnderline:true}}
                                sx={{
                                     width: '535px',
                                    background : errors.password?.type === "required" ?'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',    
                                    marginBottom: errors.password?.type === "required" ?'20px' : '',    
                                    borderWidth: errors.password?.type === "required" ? '1px 1px 1px 10px': '' ,
                                    borderStyle: errors.password?.type === "required" ? 'solid' : '',
                                    borderColor: errors.password?.type === "required" ? 'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',
                                    borderImage: errors.password?.type === "required" ? 'initial' : '',
                                }}
                                type="password"
                                name="password"
                                // value={values.password}
                                onChange={handleChange}
                            />
                            {/* {errors.password?.type === "required" && <p>비밀번호를 입력하세요</p>} */}
                            <div style={{display:'flex', flexDirection:'row', margin:'0px', padding:'0px'}} >
                    {errors.repassword?.type === "required" && <p>비밀번호확인을 입력하세요</p>}
                    {errors.repassword && <p>{errors.repassword?.message}</p>} 
                    </div>
                        </Grid>
                        <Grid item>
                            <TextField
                                {...register('repassword', { required: true,
                                  validate: (value) => value === watch("password") || "패스워드가 일치하지 않습니다"
                                } )}
                                fullWidth
                                variant="outlined"
                                // InputProps={{disableUnderline:true}}
                                sx={{
                                    width: '535px',
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
                     {/* <div style={{display:'flex', flexDirection:'row', margin:'0px', padding:'0px'}} >
                    {errors.repassword?.type === "required" && <p>비밀번호확인을 입력하세요</p>}
                    {errors.repassword && <p>{errors.repassword?.message}</p>} 
                    </div> */}
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
                            {...register('tel', { required: false} )}
                                fullWidth
                                variant="outlined"
                                // InputProps={{disableUnderline:true}}
                                sx={{
                                    width: '535px',
                                    
                                }}
                                name='tel'
                                // value={values.tel}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                {...register('phone', { required: true,  pattern: /^\d{3}-\d{3,4}-\d{4}$/ } )}
                                fullWidth
                                variant="outlined"
                                // InputProps={{disableUnderline:true}}
                                helperText='ex) 000-0000-0000'
                                sx={{
                                    width: '535px',
                                    
                                    background : errors.phone?.type === "required" ?'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',    
                                    marginBottom: errors.phone?.type === "required" ?'20px' : '',    
                                    borderWidth: errors.phone?.type === "required" ? '1px 1px 1px 10px': '' ,
                                    borderStyle: errors.phone?.type === "required" ? 'solid' : '',
                                    borderColor: errors.phone?.type === "required" ? 'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',
                                    borderImage: errors.phone?.type === "required" ? 'initial' : '',  
                                }}
                                name="phone"
                                // value={values.phone}
                                onChange={handleChange}
                            />
                            {/* {errors.phone?.type === "required" && <p>핸드폰 연락처를 입력하세요</p>}*/}
                            {errors?.phone?.type === "pattern" && (<p>휴대폰번호를제대로 입력하세요(010-0000-0000)</p> )} 
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
                            이메일
                        </Typography>
                    </Stack>
                    <TextField
                    {...register('email', { required: false} )}
                        fullWidth
                        variant="outlined"
                        // InputProps={{disableUnderline:true}}
                        {...register("email", {
                            pattern: {
                              value: /\S+@\S+\.\S+/,
                              message: "이메일을 제대로 입력하세요",
                            },
                          })}
                        sx={{
                            display: 'flex',
                            height: '46px',
                            padding: '0px',
                            flexDirection: 'column',
                            justifycontent: 'left',
                            alignItems: 'flex-start',
                            alignSelf: 'stretch',
                            borderRadius: '4px',
                            // border: '1px solid var(--Main-Blue-Blue-500, #067DFD)'
                            background : errors.email?.type === "pattern" ?'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',    
                            marginBottom: errors.email?.type === "pattern" ?'20px' : '',    
                            borderWidth: errors.email?.type === "pattern" ? '1px 1px 1px 10px': '' ,
                            borderStyle: errors.email?.type === "pattern" ? 'solid' : '',
                            borderColor: errors.email?.type === "pattern" ? 'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',
                            borderImage: errors.email?.type === "pattern" ? 'initial' : '',
                        }}
                        name="email"
                        // value={values.email}
                        onChange={handleChange}
                    />

                    {/* <Stack
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
                        // InputProps={{disableUnderline:true}}
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
                    /> */}

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
                        <input id="file" type="file" accept='.JPEG, .PNG, .GIF' onChange={handleFileChange} hidden />
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
                        {file && file.name}
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
                        {...register('bigo', { required: false} )}
                            fullWidth
                            variant="outlined"
                            // InputProps={{disableUnderline:true}}
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
                            // value={values.bigo}
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
                        //  onClick={(e) => {
                        //      handleSave(e)
                        //    }}
                        // onClick={handleSave}
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
                        onClick={() => navigate(-1)}
                    >
                        {/* {delorcancel} */}
                        취소하기
                    </Button>
                </Stack>
            </form>
            <Snackbar
          open={isSave}
          autoHideDuration={2000}
          onClose={() => setOpen(false)}
          message="저장되었습니다" />
        </>
    );
}

export default AccountCreate;
