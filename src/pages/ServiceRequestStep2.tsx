import * as React from 'react';
import {
    Container,
    Stack,
    Typography,
    Grid,
    Box,
    Radio,
    RadioGroup,
    FormControlLabel,
    TextField,
    Divider,
    Button,
    MenuItem
} from '@mui/material';
import {Service } from 'src/types';

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

type RequestFormProps = {
    values: Service;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    formState: Service;
};

function ServiceRequestStep2({ values, handleChange, formState }: RequestFormProps) {
    
    return (
        <React.Fragment>
            <div
                style={{
                    display: 'flex',
                    width: 'fit-content',
                    height: '48px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20px',
                    alignSelf: 'stretch',
                    padding: '28px'
                }}
            >
                <Typography
                    sx={{
                        color: 'var(--Gray-Gray-900, #222)',
                        fontFamily: 'Pretendard',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '24px',
                        width:'100px'
                    }}
                >
                    회사및지점
                </Typography>
                <Typography
                    sx={{
                        color: 'var(--Main-Red-Red-500, #EF2B2A)',
                        fontFamily: 'Pretendard',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '24px'
                    }}
                >
                    *
                </Typography>
                <TextField
                    fullWidth
                    name="branch"
                    value={values.branch}
                    variant='standard'
                    select
                    InputProps={{disableUnderline:true}}
                    sx={{
                        '.MuiInputBase-input': {
                            display: 'flex',
                            height:'28px',
                            width:'860px',
                            padding: '16px 20px',
                            justifyContent: 'space-between',
                            alignitems: 'center',
                            flex: '1 0 0',
                            paddingLeft: '20px',
                            borderRadius: '4px'
                           
                            ,marginBottom : formState.branch === 'required' ? '20px' :'',
                            borderWidth : formState.branch === 'required' ? '1px 1px 1px 10px':'',
                            borderStyle : formState.branch === 'required' ?  'solid':'',
                            borderColor : formState.branch === 'required' ? 'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)':'',
                            borderImage : formState.branch === 'required' ? 'initial':'',
                            background : formState.branch === 'required' ? 'rgb(251, 236, 242)':'var(--Gray-Gray-100, #F5F5F5)'
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
        </React.Fragment>
    );
}
export default ServiceRequestStep2;
