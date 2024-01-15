import * as React from 'react';
import { Container, MenuItem,Stack, Typography, TextField, Grid , Paper, Box, Button, Dialog,DialogTitle,DialogContent,DialogActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Page from 'src/components/Page';
import { styled } from '@mui/material/styles';
import { Icon , addIcon } from '@iconify/react';
import ErrorIcon from 'src/assets/images/icons/error.png';
import InitImage from 'src/assets/images/restart_alt.png';


const branch = [
    {
        value: '',
        label: '',
      },
    {
      value: 'seoul',
      label: '서울',
    },
    {
        value: 'inchon',
        label: '인천',
      },
      {
        value: 'gyoungkey',
        label: '경기',
      },
      {
        value: 'dagoo',
        label: '대구',
      },
]
const company = [
    {
        value: '',
        label: '',
      },
    {
      value: 'shinhan',
      label: '신한',
    },
    {
        value: 'busan',
        label: '부산',
      },
      {
        value: 'gyungnam',
        label: '경남',
      },
      {
        value: 'jungbook',
        label: '전북',
      },
]
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

function CompanyDialog(props) {
    const {mopen} = props;
    const [open, setOpen] = React.useState(mopen);
    
    const [values, setValues] = React.useState({
        company: '',
        branch: '',
      });


      const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {

        setValues({...values, [event.target.name]: event.target.value});

    }
    const handleClose = () => {
      setOpen(false);

      console.log(values['company']);
      console.log(values['branch']);
      
      const companyname = company.find((item) => item.value === values['company'])?.label;
      const branchname=branch.find((item) => item.value === values['branch'])?.label;
      props.handleClose1(false,values['company'],values['branch'],companyname, branchname);
    };
  
    const handleInit = () => {
        setValues({
            company: '',
            branch: '',
          });
        console.log(values);
    }
    return (
      <React.Fragment>
        {/* <Button variant="outlined" onClick={handleClickOpen}>
          Open dialog
        </Button> */}
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle 
             sx={{
                //  m: 0, p: 2 
                display: 'flex',
                height: '40px',
                flexDirection: 'column',
                justifyContent: 'center',
                flex: '1 0 0'
                }} 
             id="customized-dialog-title"
             >
             <Typography
                   sx={{
                    color: 'var(--Gray-Gray-900, #222)',
                    fontFamily: 'Pretendard',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: '28px',
                    paddingTop:'28px'
                   }}
              >
            회사 및 지점 선택
            </Typography>
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            
          <Stack direction="row" spacing={0}>
             <div
                style={{
                    display: 'flex',
                    width: '452px',
                    justifyContent: 'left',
                    alignItems: 'left',
                    gap: '0px',
                    borderRadius: '4px',
                    background: 'var(--Gray-Gray-100, #F5F5F5)'
                }}    
            >
                <Typography
                     sx={{
                        width: '40px',
                        flexShrink: '0',
                        color: 'var(--Gray-Gray-900, #222)',
                        fontFamily: 'Pretendard',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '24px',
                        paddingTop:'14px'
                     }}
                >
                    회사
            </Typography>    
            <Typography
                   sx={{
                    color: 'var(--Main-Red-Red-500, #EF2B2A)',
                    fontFamily: 'Pretendard',
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    lineHeight: '20px',
                    paddingTop:'17px'
                  }}
                   >
                    *
            </Typography>
            
            <TextField
                fullWidth
                name="company"
                value={values.company}
                variant="standard"
                select
                sx={{
                  ".MuiInputBase-input": {
                    display: 'flex',
                    padding: '16px 20px',
                    justifyContent: 'space-between',
                    alignitems: 'center',
                    flex: '1 0 0',
                    paddingLeft:'20px'
                  }
                }}
                onChange={handleChange}
              >
                 {company.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </TextField>
             </div>
             
             <div
                style={{
                    display: 'flex',
                    width: '452px',
                    justifyContent: 'left',
                    alignItems: 'left',
                    gap: '0px',
                    borderRadius: '4px',
                    paddingLeft:'40px',
                    background: 'var(--Gray-Gray-100, #F5F5F5)'
                }}    
            >
                <Typography
                     sx={{
                        width: '40px',
                        flexShrink: '0',
                        color: 'var(--Gray-Gray-900, #222)',
                        fontFamily: 'Pretendard',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '24px',
                        paddingTop:'14px'
                     }}
                >
                    지점
            </Typography>    
            <TextField
                fullWidth
                name="branch"
                value={values.branch}
                variant="standard"
                select
                sx={{
                  ".MuiInputBase-input": {
                    display: 'flex',
                    padding: '16px 20px',
                    justifyContent: 'space-between',
                    alignitems: 'center',
                    flex: '1 0 0',
                    paddingLeft:'20px'
                  }
                }}
                onChange={handleChange}
              >
                {branch.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </TextField>
             </div>
          </Stack>

          <Stack direction="row" spacing={0} sx={{paddingTop:'20px'}}>
             <Button
                sx={{
                    display: 'flex',
                    height: '36px',
                    padding: '4px 20px',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '4px',
                    background: 'var(--Main-Blue-Blue-500, #067DFD)',
                    boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.20)'
                }}
                onClick={handleClose}
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
                    선택완료
                    </Typography>
             </Button>    
             <Button
                sx={{
                    display: 'flex',
                    height: '36px',
                    padding: '8px 16px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '4px',
                    borderRadius: '4px',
                }}
                onClick={handleInit}
             >
                초기화
                <img src={InitImage} width='24px' height='24px' />
             </Button>   
          </Stack>

          </DialogContent>
          <DialogActions>
            {/* <Button autoFocus onClick={handleClose}>
              Save changes
            </Button> */}
          </DialogActions>
        </BootstrapDialog>
      </React.Fragment>
    );
  }

export default CompanyDialog;