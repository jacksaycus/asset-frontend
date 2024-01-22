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
import {Service} from 'src/types'

const contract = [
    {
        value: '',
        label: '',
      },
    {
      value: 'contract1',
      label: '계약1',
    },
    {
      value: 'contract2',
      label: '계약2',
      },
      {
        value: 'contract3',
        label: '계약3',
      }
];

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
                    계약
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
                    name="contract"
                    value={values.contract}
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

                            ,background : formState.contract === "required" ?'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '', 
                            marginBottom: formState.contract === "required" ?'20px' : '',    
                            borderWidth: formState.contract === "required" ? '1px 1px 1px 10px': '' ,
                            borderStyle: formState.contract === "required" ? 'solid' : '',
                            borderColor: formState.contract === "required" ? 'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',
                            borderImage: formState.contract === "required" ? 'initial' : '',
                        }
                    }}
                    onChange={handleChange}
                >
                    {contract.map((option) => (
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
