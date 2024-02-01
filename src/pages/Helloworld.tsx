import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import { Container, MenuItem,Stack, Typography, TextField, Grid , Paper, Box, Button, Dialog,DialogTitle,DialogContent,DialogActions, Select, Chip,OutlinedInput } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useQuery, useQueryClient } from '@tanstack/react-query';
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
  const queryClient = useQueryClient();

  const { data, error, isSuccess } = useQuery({
    queryKey: ['Branch'],
    queryFn: getBranch
  });

  let company=[]
  let branch=[]
 for (let i=0;i<data?.length;i++){
    let obj = {}
    obj.value=data[i].compNo
    obj.label=data[i].compName
    company.push(obj)
  }
  
  // console.log(company)
  company = _.uniqBy(company, 'label');
  console.log(company)
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
    }
  if(company.length>0)
  setBranch(company[0].value)

  
    // const {mopen} = props;
    const [open, setOpen] = React.useState(false);
    
    const [values, setValues] = React.useState({
        company: '',
        branch: '',
      });


    const [branches, setBranches] = React.useState<string[]>([]);
    

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
      // const {
      //   target: { value },
      //   } = event

        if(event.target.name==='company'){
          setValues({...values, ['company']: event.target.value});
        }if(event.target.name==='branch'){
          setBranches(
            typeof event.target.value === 'string' ? event.target.value.split(',') : event.target.value,
         )
        //  console.log(event.target.value);
        }  
        // setValues({...values, [event.target.name]: event.target.value});
        
    }

    // const setBranchName = () => {
    //   let temp =[];
    //   for(let i=0;i<branches.length;i++){
    //     temp.push(getBranchName(branches[i]))
    //   }
    //   setBranchName(temp)
    // }

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
      setOpen(false);

      setValues({...values, ['branch']: branches});

      console.log(values['company']);
      console.log(values['branch']);
      
      // const companyname = company.find((item) => item.value === values['company'])?.label;
      // const branchname=branch.find((item) => item.value === values['branch'])?.label;
      
      props.handleClose1(branches);
    };
  
    const handleInit = () => {
        setValues({
            company: '',
            branch: '',
          });
        console.log(values);
    }

    const handleClickOpen = () => {
      setOpen(true);
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
              {selected.map( (value) => (
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

          
      </React.Fragment>
    );
  }

export default CompanyDialog;