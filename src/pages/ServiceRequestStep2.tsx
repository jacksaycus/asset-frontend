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
import { styled } from '@mui/material/styles';
import Page from 'src/components/Page';

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
    values: any;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function ServiceRequestStep2({ values, handleChange }: RequestFormProps) {
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
                    alignSelf: 'stretch'
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
                    variant="standard"
                    select
                    sx={{
                        '.MuiInputBase-input': {
                            display: 'flex',
                            height:'48px',
                            width:'860px',
                            padding: '16px 20px',
                            justifyContent: 'space-between',
                            alignitems: 'center',
                            flex: '1 0 0',
                            paddingLeft: '20px'
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
