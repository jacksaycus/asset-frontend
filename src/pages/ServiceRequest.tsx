import { Container, Stack, Typography, Grid } from '@mui/material';
import Page from 'src/components/Page';

function ServiceRequest() {
  const rqueststep = [
                     {title:'요청정보입력',link:''},
                     {title:'회사및지점선택',link:''},
                     {title:'계약선택',link:''},
                     {title:'자산선택',link:''},
                     {title:'요청자선택',link:''},
                     {title:'승인권자선택',link:''}];

  return(
    
      <Page>
        <Container>

          {/* <Stack direction="row" spacing={0} > */}
          <Grid container spacing={0}> 
          <Grid item>
            <div
                style={{
                  display: 'flex',
                  // padding: '12px 117.5px 12px 118.5px',
                  justifyContent: 'flex-start',
                  alignItems: 'left',
                  alignSelf: 'stretch',
                }}
            >

            {rqueststep.map((val, index) => (
              <>
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
                    background: 'var(--White, #FFF)',
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
                      {index+1}
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
                    paddingTop:'7px',
                    paddingLeft:'3px'
                   }}
                >
                  {val.title}
                </Typography>
                {index<5 &&
                <div
                  style={{
                    width: '80px',
                    height: '1px',
                    background: 'var(--Gray-Gray-300, #E0E0E0)'
                  }}
                >
                </div>
                }
            </>
            ))}
           </div>
        {/* </Stack> */}
        </Grid>
        </Grid>

        </Container>
      </Page>
    
  );
}

export default ServiceRequest;