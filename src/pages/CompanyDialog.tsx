import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import { Container, MenuItem,Stack, Typography, TextField, Grid , Paper, Box, Button, Dialog,DialogTitle,DialogContent,DialogActions, Select, Chip,OutlinedInput } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useQuery, useQueryClient, QueryClient } from '@tanstack/react-query';
import { getBranch } from '../api/assetapi';
import Page from 'src/components/Page';
import { styled } from '@mui/material/styles';
import { Icon , addIcon } from '@iconify/react';
import ErrorIcon from 'src/assets/images/icons/error.png';
import InitImage from 'src/assets/images/restart_alt.png';
import * as _ from "lodash";

const getIcon = (name) => <Icon icon={name} width={20} height={20} />;
// const branch = [
//     {
//         value: '',
//         label: '',
//       },
//     {
//       value: 'seoul',
//       label: '서울',
//     },
//     {
//         value: 'inchon',
//         label: '인천',
//       },
//       {
//         value: 'gyoungkey',
//         label: '경기',
//       },
//       {
//         value: 'dagoo',
//         label: '대구',
//       },
// ]
// const company = [
//     {
//         value: '',
//         label: '',
//       },
//     {
//       value: 'shinhan',
//       label: '신한',
//     },
//     {
//         value: 'busan',
//         label: '부산',
//       },
//       {
//         value: 'gyungnam',
//         label: '경남',
//       },
//       {
//         value: 'jungbook',
//         label: '전북',
//       },
// ]

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
  fontWeight:
  personName.indexOf(name) === -1
  ? theme.typography.fontWeightRegular
  : theme.typography.fontWeightMedium,
  };
  }

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

function CompanyDialog(props) {
  const theme = useTheme();

  const [open1, setOpen1] = React.useState(false);
    
  const [values, setValues] = React.useState({
      company: '',
      branch: '',
    });

    let company=[]
    let branch=[]

  
  const [branches, setBranches] = React.useState<Number[]>([]);

  
  const { data, error, isSuccess, refetch, isFetching,isFetched } = useQuery({
    queryKey: ['Branch'],
    queryFn: getBranch,
    // enabled:fetched
    });
    console.log(open1)
    if(open1){
    for (let i=0;i<data?.length;i++){
    let obj = {}
    obj.value=data[i].compNo
    obj.label=data[i].compName
    company.push(obj)
    
  

    console.log(company)
    company = _.uniqBy(company, 'label');
    console.log(company)
  }

}
    const setBranch = (companyno) =>{
    let tempbranch =  _.filter(data, function(o) { return o.compNo===companyno });
    console.log('tempbranch',tempbranch)
    for (let i=0;i<tempbranch?.length;i++){
      let obj = {}
      obj.value=tempbranch[i].branchNo
      obj.label=tempbranch[i].branchName
      branch.push(obj)
    }
    console.log('branch',branch)
    return branch
    }

    if(company.length>0)
    branch = setBranch(company[0].value)

  
  
    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
      // const {
      //   target: { value },
      //   } = event

      if(event.target.name==='company'){
        setValues({...values, ['company']: event.target.value});
        branch = setBranch(event.target.value)
      }if(event.target.name==='branch'){
        setBranches(
          typeof event.target.value === 'string' ? event.target.value.split(',') : event.target.value
       )
        // setValues({...values, [event.target.name]: event.target.value});
    }
  }

    const getBranchName = (val) => {
      let bname = ''
        for (let i=0;i<branch.length; i++){
          if(branch[i].value===val){
            bname=branch[i].label
            break;
          }
        }
        return bname
     }

    const handleClose = () => {
      setOpen1(false);
    };

    const handleFinish = () => {
      props.setBranchName1()
      props.setValues1('branch', '');

      let bnametemp=[]
      for (let i=0;i<branches.length;i++){
        bnametemp.push( _.find(branch, { 'value': branches[i] }).label + ',')
      }
      props.setValues1('branch', branches);
      props.handleClose1(bnametemp)
      handleClose()
  }
  
    const handleInit = () => {
        // props.setValues({...values,
        //     ['company']: '',
        //     ['branch']: '',
        //   });
          setBranches([])
        console.log(values);
    }

    const handleClickOpen = () => {
      // refetch()
      setOpen1(true)
      // props.setBranchName1()
      // props.setValues1('branch', '');
    }

    return (
      <React.Fragment>
        
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



        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open1}
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
                    width: '652px',
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
            {/* <TextField
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
                multiple
                onChange={handleChange}
                
              >
                {branch.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </TextField> */}
            
            <Select
            fullWidth
                id="branch"
                multiple
                name='branch'
                value={branches}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
              <Chip key={value} label={getBranchName(value)} />
              ))}
              </Box>
              )}
              MenuProps={MenuProps}
              >
              {branch.map((option) => (
              <MenuItem
                key={option.value}
                value={option.value}
                style={getStyles(option, branches, theme)}
              >
                {option.label}
              </MenuItem>
              ))}
            </Select>

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
                onClick={handleFinish}
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