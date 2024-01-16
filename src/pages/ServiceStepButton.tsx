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
  }

function ServiceStepButton({handleNextStep, handleCancelStep }: RequestFormProps) {
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
                    background: 'var(--Gray-Gray-50, #FAFAFA)'
                }}
            >
                <Button
                    sx={{
                        display: 'flex',
                        height: '36px',
                        padding: '8px 16px',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onClick={handleNextStep}
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
                        다음단계
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
