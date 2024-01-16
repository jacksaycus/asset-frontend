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

const requester = [
    {
        value: '',
        label: '',
      },
    {
      value: 'requester1',
      label: '요청자1',
    },
    {
      value: 'requester2',
      label: '요청자2',
      },
      {
        value: 'requester3',
        label: '요청자3',
      }
];

type RequestFormProps = {
    values: any;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function ServiceRequestStep5({ values, handleChange }: RequestFormProps) {
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
                    요청자
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
                    name="requester"
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
                    {requester.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
        </React.Fragment>
    );
}
export default ServiceRequestStep5;
