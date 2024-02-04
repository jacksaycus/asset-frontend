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
import { useForm } from "react-hook-form"
import ServiceStepButton from './ServiceStepButton';

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

function ServiceRequestStep2({formData, handleChange, handleNextStep, handlePreveStep,step }) {
    const { register, handleSubmit,trigger, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        trigger().then((res) => {
            if (res) {
                handleNextStep()
            }})
    }
    return (
        <React.Fragment>
            <div
                    style={{
                        display: 'flex',
                        width: '1346px',
                        padding: '28px',
                        marginTop: '20px',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '32px',
                        borderRadius: '12px',
                        border: '1px solid var(--Gray-Gray-300, #E0E0E0)',
                        background: 'var(--White, #FFF)',
                        position:'relative',
                        left:'-60px'
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            width: '1316px',
                            marginTop: '20px',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            padding: '32px',
                            // borderRadius: '12px',
                            // border: '1px solid var(--Gray-Gray-300, #E0E0E0)',
                            background: 'var(--White, #FFF)'
                        }}
                    >
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
                            서비스 요청
                        </Typography>

                        <div style={{marginBottom:'32px'}}></div>

            <form  autoComplete="off"
                            method="post"
                            noValidate
                            onSubmit={handleSubmit(onSubmit)}
                            encType="multipart/form"
            >



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
                 {...register('contract', { required: true} )}
                    fullWidth
                    name="contract"
                    value={formData.contract}
                    variant="standard"
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
                            paddingLeft: '20px'

                            ,background : errors.contract?.type === "required" ?'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : 'var(--Gray-Gray-100, #F5F5F5)', 
                            marginBottom: errors.contract?.type === "required" ?'20px' : '',    
                            borderWidth: errors.contract?.type === "required" ? '1px 1px 1px 10px': '' ,
                            borderStyle: errors.contract?.type === "required" ? 'solid' : '',
                            borderColor: errors.contract?.type === "required" ? 'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',
                            borderImage: errors.contract?.type === "required" ? 'initial' : '',
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

            </form>

            </div>
                </div>

                <ServiceStepButton onSubmit={onSubmit} handleCancelStep={handlePreveStep} step={step} />

        </React.Fragment>
    );
}
export default ServiceRequestStep2;
