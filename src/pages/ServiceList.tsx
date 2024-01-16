import { Container, Stack, Typography, Grid, Button } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Page from 'src/components/Page';
import activeicon from 'src/assets/images/icons/notifications_active.png';
import add from 'src/assets/images/icons/add.png';

function ServiceRequest() {
  
  const navigate = useNavigate();

  const moveRequest = (e) => {
    e.preventDefault()
    navigate('/service/request', { replace: true });
    }

  return(
    
      <Page title='서비스'>
        <Container sx={{
            marginLeft:'38px'
        }}>

        <div style={{
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
            background: 'var(--White, #FFF)',
        }}>
          <img src={activeicon} width='100px' height='100px' />
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px'
          }}
          >
          <Typography sx={{
                 color: 'var(--Gray-Gray-900, #222)',
                 fontFamily: 'Pretendard',
                 fontsize: '20px',
                 fontStyle: 'normal',
                 fontWeight: '600',
                 lineHeight: '28px'
                 }}
                  >
               요청된 서비스가 아직 없습니다
           </Typography>
           <Typography  sx={{
                  color: 'var(--Gray-Gray-500, #9E9E9E)',
                  textSlign: 'center',
                  fontFamily: 'Pretendard',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  lineHeight: '24px'
           }}
           >
            왼쪽 하단 영역에 서비스 요청하시는 자산의 이미지를 올려주세요.<br/>
            손쉽고 빠르게 서비스 요청을 할 수 있습니다.
           </Typography>
           </div>
           <Button sx={{
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
           <img src={add} width='24px' height='24px' />   
               <Typography sx={{
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
        </Container>
      </Page>
    
  );
}

export default ServiceRequest;