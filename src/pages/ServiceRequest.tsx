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

function ServiceRequest() {
  
    const [values, setValues] = React.useState({
        servicename: '',
        servicecontent: '',
        servicetype: '',
        pridicttime: '',
        priority: '',
        servicehopedate: '',
        bigo: '',
        branch:'',
        contract:'',
        asset:[],
        requester:'',
    });
    const [formState, setFormState] = React.useState({
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
    });
    
    // const [file, setFile] = React.useState<File | null>(null);
    const [fileList, setFileList] = React.useState([])
    const handleFileChange = (list) => {
        console.log(list)
        setFileList(list)
        console.log(fileList)
      };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setValues({ ...values, [event.target.name]: event.target.value });
    };

  const [step, setStep] = React.useState(1);
  
  const handleNextStep = () => {
    if(step===1){
        (values.servicename.trim() === '') ? ( setFormState( formState => ({ ...formState, servicename: 'required' })) ,setStep(0)):'';
        (values.servicecontent.trim() === '') ? ( setFormState( formState => ({ ...formState, servicecontent: 'required' })) ,setStep(0)):'';
        (values.servicetype.trim() === '') ? ( setFormState( formState => ({ ...formState, servicetype: 'required' })) ,setStep(0)):'';
        (values.pridicttime.trim() === '') ? ( setFormState( formState => ({ ...formState, pridicttime: 'required' })) ,setStep(0)):'';
        (values.priority.trim() === '') ? ( setFormState( formState => ({ ...formState, priority: 'required' })) ,setStep(0)):'';
        (values.servicehopedate.trim() === '') ? ( setFormState( formState => ({ ...formState, servicehopedate: 'required' })) ,setStep(0)):'';
    }
        ( values.branch.trim() === '' && Number(step)===2 ) ? ( setFormState( formState => ({ ...formState, branch: 'required' })) ,setStep(1)):'';

        (values.contract.trim() === '' && Number(step)===3) ? ( setFormState( formState => ({ ...formState, contract: 'required' })) ,setStep(2)):'';

        (values.asset.length<1 && Number(step)===4 ) ? ( setFormState( formState => ({ ...formState, asset: 'required' })) ,setStep(3)):'';

        if(values.requester.trim() === ''  && Number(step)===5 ) { 
            setFormState( formState => ({ ...formState, requester: 'required' }));
            setStep(4);
         }
         
         if(step===5 && values.requester.trim() !== ''){
            alert(JSON.stringify(values));
         }
         if(step>5)setStep(step-1);
      setStep(
             value => value + 1
            )
            console.log('step', step)
            // console.log(fileList)
            
           
  };
  const handleCancelStep = ()=> {
    if(step>1){
        setStep(step-1);
    }
    // setStep(1);
    console.log('step', step);
  }

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
                        <ServiceRequestForm step={step} values={values} handleChange={handleChange} formState={formState} handleFileChange={handleFileChange} />

                    </div>
                </div>

                <ServiceStepButton handleNextStep={handleNextStep} handleCancelStep={handleCancelStep} step={step} />
                {/* </form>
                </FormProvider> */}
            </Container>
        </Page>
    );
}

export default ServiceRequest;
