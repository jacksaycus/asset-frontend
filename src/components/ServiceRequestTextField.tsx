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
    Divider
} from '@mui/material';

const ServiceRequestTextField = ({ formState, register, handleChange,values }) => {
  
  
    if(formState.errors.servicename?.type === "required"){
        return (
    <TextField
                    fullWidth
                    error
                    InputProps={{disableUnderline:true}}
                    {...register('servicename', { required: true} )}
                    style={{
                        display: 'flex',
                        width: '890px',
                        height: '48px',
                        // padding: '16px 20px',
                        marginLeft: '29px',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flex: '1 0 0',
                        // borderRadius: '4px',
                        background: 'var(--Gray-Gray-100, #F5F5F5)'
                    }}
                    onChange={handleChange}
                    type="text"
                    name="servicename"
                    id="servicename"
                    value={values.servicename}
                />
        );
    }
    else{
     return (
    <TextField
                    fullWidth
                    variant='error'
                    InputProps={{disableUnderline:true}}
                    {...register('servicename', { required: true} )}
                    style={{
                        display: 'flex',
                        width: '890px',
                        height: '48px',
                        // padding: '16px 20px',
                        marginLeft: '29px',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flex: '1 0 0',
                        // borderRadius: '4px',
                        background: 'var(--Gray-Gray-100, #F5F5F5)'
                    }}
                    onChange={handleChange}
                    type="text"
                    name="servicename"
                    id="servicename"
                    value={values.servicename}
                />
        );
    }
  
}
export default ServiceRequestTextField;