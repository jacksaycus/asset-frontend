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
    Button
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Page from 'src/components/Page';
import ServiceRequestForm from './ServiceRequestForm';
import ServiceStepButton from './ServiceStepButton';
import group from 'src/assets/images/icons/group.png';
// import { useForm, FormProvider, useFormContext } from "react-hook-form"
import {Service} from 'src/types'
import reducer from './updateAction';

const initialState = {
    currentStep: 1,
    formData: {
        servicename: '',
        servicecontent: '',
        servicetype: '',
        pridicttime: '',
        priority: '',
        servicehopedate: '',
        bigo: '',
        branch:'',
        contract:'',
        asset:'',
        requester:'',
        files:[],
    }
  };
function ServiceRequest() {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const { currentStep, formData } = state;

    const handleNextStep = () => {
        if(currentStep===5){
            
        }else
        dispatch({ type: "next_step" });
    }
    const handlePrevStep = () => dispatch({ type: "prev_step" });

    const handleChange = (e) => {
      dispatch({
        type: "change",
        name: e.target.name,
        value: e.target.value
      });
    };

    const [fileList, setFileList] = React.useState([])
    const handleFileChange = (list) => {
        console.log(list)
        setFileList(list)
        console.log(fileList)
        dispatch({
            type: "change",
            name: 'files',
            value: list
          });
      };

    const rqueststep = [
        { title: '요청정보입력', link: '' },
        { title: '회사및지점선택', link: '' },
        { title: '계약선택', link: '' },
        { title: '자산선택', link: '' },
        { title: '요청자선택', link: '' },
        { title: '승인권자선택', link: '' }
    ];
    
    return (
        <Page title="서비스요청">
            <Container
                sx={{
                    marginLeft: '38px'
                }}
            >
             {/* <FormProvider {...methods}>    */}
                
             
             {/* <form  autoComplete="off" noValidate onSubmit={methods.handleSubmit(onSubmit)}> */}
                <Stack direction="row" spacing={0} sx={{ width: '1450px' }}>
                    <div
                        style={{
                            width: '1410px',
                            display: 'flex',
                            // padding: '12px 117.5px 12px 118.5px',
                            justifyContent: 'flex-start',
                            alignItems: 'left',
                            alignSelf: 'stretch',
                            position:'relative',
                            left:'-60px'
                        }}
                    >
                        {rqueststep.map((val, index) => (
                            <React.Fragment key={index}>
                                <div
                                    style={{
                                        display: 'flex',
                                        width: '36px',
                                        height: '36px',
                                        padding: '6px',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: '100px',
                                        border: '1px solid var(--Main-Blue-Blue-500, #067DFD)',
                                        background: 'var(--White, #FFF)'
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: 'var(--Main-Blue-Blue-500, #067DFD)',
                                            textAlign: 'center',
                                            fontFamily: 'Pretendard',
                                            fontSize: '16px',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            lineHeight: '24px'
                                        }}
                                    >
                                        {index + 1}
                                    </Typography>
                                </div>
                                <Typography
                                    sx={{
                                        color: 'var(--Gray-Gray-500, #9E9E9E)',
                                        fontFamily: 'Pretendard',
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        lineHeight: '24px',
                                        paddingTop: '7px',
                                        paddingLeft: '3px',
                                        paddingRight: '3px'
                                    }}
                                >
                                    {val.title}
                                </Typography>
                                {index < 5 && (
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            paddingRight: '3px',
                                            paddingLeft: '3px'
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: '100px',
                                                height: '1px',
                                                background: 'var(--Gray-Gray-300, #E0E0E0)'
                                            }}
                                        ></div>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </Stack>

               
                        <ServiceRequestForm formData={formData} step={currentStep} handleChange={handleChange} handleFileChange={handleFileChange} handleNextStep={handleNextStep} handlePreveStep={handlePrevStep} />

                
                {/* </form>
                </FormProvider> */}
            </Container>
        </Page>
    );
}

export default ServiceRequest;
