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


type RequestFormProps = {
    handleNextStep: () => void;
    handleCancelStep: () => void;
    step:number;
  }

function ServiceStepButton({onSubmit, handleCancelStep,step }: RequestFormProps) {
    return (
        <React.Fragment>
            <div
                style={{
                    display: 'flex',
                    minWidth: '1180px',
                    padding: '32px',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    gap: '20px',
                    background: 'var(--Gray-Gray-50, #FAFAFA)',
                    marginTop:'20px',
                    marginLeft:'-60px'
                }}
            >
                <Button
                    sx={{
                        display: 'flex',
                        height: '36px',
                        padding: '8px 16px',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '4px',
                        background: 'var(--Main-Blue-Blue-50, #EEF7FF)'
                    }}
                    onClick={onSubmit}
                >
                    <Typography
                        sx={{
                            color: 'var(--Main-Blue-Blue-500, #067DFD)',
                            fontFamily: 'Pretendard',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '20px'
                        }}
                    >
                        {step<5&&
                        <span>다음단계</span>
                        }
                        {step>4&&
                        <span>저장하기</span>
                        }
                    </Typography>
                </Button>
                <Button
                    sx={{
                        display: 'flex',
                        height: '36px',
                        padding: '8px 16px',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '4px'
                    }}
                    onClick={handleCancelStep}
                >
                    <Typography
                        sx={{
                            color: 'var(--Gray-Gray-700, #616161)',
                            fontFamily: 'Pretendard',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '20px'
                        }}
                    >
                        취소하기
                    </Typography>
                </Button>
            </div>
        </React.Fragment>
    );
}
export default ServiceStepButton;
