import { Container, Stack, Typography, Grid, Button } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Page from 'src/components/Page';
import activeicon from 'src/assets/images/icons/notifications_active.png';
import add from 'src/assets/images/icons/add.png';

function AssetNoop() {
    const navigate = useNavigate();

    const moveRequest = (e) => {
        e.preventDefault();
        navigate('/service/request', { replace: true });
    };

    return (
        <div
            style={{
                display: 'flex',
                padding: '32px',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                flex: '1 0 0',
                alignSelf: 'stretch',
                borderRadius: '12px',
                border: '1px solid var(--Gray-Gray-200, #EEE)',
                background: 'var(--White, #FFF)'
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="32"
                viewBox="0 0 40 32"
                fill="none"
            >
                <path
                    d="M2.25 32C1.625 32 1.09375 31.7804 0.65625 31.3412C0.21875 30.902 0 30.3686 0 29.7412C0 29.1137 0.21875 28.5833 0.65625 28.15C1.09375 27.7167 1.625 27.5 2.25 27.5H4V3C4 2.175 4.29375 1.46875 4.88125 0.88125C5.46875 0.29375 6.175 0 7 0H36.5C36.925 0 37.2813 0.144583 37.5688 0.433749C37.8563 0.722949 38 1.08128 38 1.50875C38 1.93625 37.8563 2.29167 37.5688 2.575C37.2813 2.85833 36.925 3 36.5 3H7V27.5H16.75C17.375 27.5 17.9062 27.7196 18.3438 28.1588C18.7812 28.598 19 29.1314 19 29.7588C19 30.3863 18.7812 30.9167 18.3438 31.35C17.9062 31.7833 17.375 32 16.75 32H2.25ZM23.5 32C23.075 32 22.7188 31.8563 22.4312 31.5688C22.1437 31.2812 22 30.925 22 30.5V7.5C22 7.075 22.1437 6.71875 22.4312 6.43125C22.7188 6.14375 23.075 6 23.5 6H38.5C38.925 6 39.2813 6.14375 39.5688 6.43125C39.8563 6.71875 40 7.075 40 7.5V30.5C40 30.925 39.8563 31.2812 39.5688 31.5688C39.2813 31.8563 38.925 32 38.5 32H23.5ZM25 27.5H37V9H25V27.5Z"
                    fill="#067DFD"
                />
            </svg>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '12px'
                }}
            >
                <Typography
                    sx={{
                        color: 'var(--Gray-Gray-900, #222)',
                        fontFamily: 'Pretendard',
                        fontsize: '20px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '28px'
                    }}
                >
                    등록된 자산이 아직 없습니다
                </Typography>
                <Typography
                    sx={{
                        color: 'var(--Gray-Gray-500, #9E9E9E)',
                        textSlign: 'center',
                        fontFamily: 'Pretendard',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '24px'
                    }}
                >
                    자산을 등록하고 서비스 요청해 주세요
                </Typography>
            </div>
            <Button
                sx={{
                    display: 'flex',
                    height: '40px',
                    padding: '8px 16px 8px 12px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '4px',
                    borderRadius: '4px',
                    background: 'var(--Main-Blue-Blue-500, #067DFD)',
                    boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.25)'
                }}
                onClick={moveRequest}
            >
                <img src={add} width="24px" height="24px" />
                <Typography
                    sx={{
                        color: 'var(--White, #FFF)',
                        textAlign: 'center',
                        fontFamily: 'Pretendard',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '24px'
                    }}
                >
                    요청하기
                </Typography>
            </Button>
        </div>
    );
}

export default AssetNoop;
