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

function ServiceRequest() {
  const [step, setStep] = React.useState(1);
  
  const handleNextStep = () => {
      setStep(
             value => value + 1
            )
            console.log('step', step);
  };
  const handleCancelStep = ()=> {
    setStep(1);
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
                <Stack direction="row" spacing={0} sx={{ width: '1550px' }}>
                    <div
                        style={{
                            width: '1500px',
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
                        width: '1596px',
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
                            width: '1596px',
                            padding: '28px',
                            marginTop: '20px',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: '32px',
                            borderRadius: '12px',
                            border: '1px solid var(--Gray-Gray-300, #E0E0E0)',
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

                        <ServiceRequestForm step={step} />

                    </div>
                    <ServiceStepButton handleNextStep={handleNextStep} handleCancelStep={handleCancelStep} />
                </div>
            </Container>
        </Page>
    );
}

export default ServiceRequest;
