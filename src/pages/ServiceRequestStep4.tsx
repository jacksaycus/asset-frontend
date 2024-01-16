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

const asset = [
    {
        value: '',
        label: '',
      },
    {
      value: 'asset1',
      label: '자산1',
    },
    {
      value: 'asset2',
      label: '자산2',
      },
      {
        value: 'asset3',
        label: '자산3',
      }
];

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
                <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap"
                   sx={{
                    marginTop:'32px'
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
                        width:'33px'
                    }}
                >
                    자산
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
                    <Typography
                        sx={{
                            color: 'var(--Gray-Gray-900, #222)',
                            fontFamily: 'Pretendard',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '24px',
                            width:'100px'
                        }}
                    >
                        (다중선택가능)
                    </Typography>
                </Stack>

                <TextField
                    fullWidth
                    name="asset"
                    value={values.branch}
                    variant="standard"
                    select
                    sx={{
                        '.MuiInputBase-input': {
                            display: 'flex',
                            height:'48px',
                            width:'760px',
                            padding: '16px 20px',
                            justifyContent: 'space-between',
                            alignitems: 'center',
                            flex: '1 0 0',
                            paddingLeft: '20px'
                        }
                    }}
                    onChange={handleChange}
                >
                    {asset.map((option) => (
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