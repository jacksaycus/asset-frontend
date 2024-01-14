import * as React from 'react';
import { Container, Stack, Typography, Box, Grid , Paper} from '@mui/material';
import Page from 'src/components/Page';
import { styled } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));
const BadgeLayout = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '4px',
    alignSelf: 'stretch',
})
const ManagerBadge = styled('div')({
    display: 'flex',
    padding: '4px 8px',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: '4px',
    borderRadius: '100px',
    background: 'var(--Gray-Gray-200, #EEE)'
})

const RootDiv = styled('div')({
    display: 'flex',
    padding: '28px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '20px',
    alignSelf: 'stretch',
    borderRadius: '12px',
    border: '1px solid var(--Gray-Gray-300, #E0E0E0)',
    background: 'var(--White, #FFF)'
})

function AccountCreate() {
  
  return(
    <>
      <Page>
        <Container>
            <RootDiv>
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
                계정등록
                </Typography>              
              {/* <Stack spacing={2} alignItems="left" mt={6}> */}
                  <Typography variant="h6" gutterBottom 
                              sx={{
                                  color: 'var(--Main-Red-Red-500, #EF2B2A)',
                                  fontFamily: 'Pretendard',
                                  fontSize: '14px',
                                  fontStyle: 'normal',
                                  fontWeight: '700',
                                  lineHeight: '20px',
                              }}
                        >
                          권한
                      </Typography>
                 <Grid container spacing={1} px={{m:1}}>   
                  <Grid item>
                    <ManagerBadge>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4" cy="4" r="4" fill="#00C400"/>
                      </svg>
                      관리자
                    </ManagerBadge>
                  </Grid>
                  <Grid item>
                    <ManagerBadge>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="4" cy="4" r="4" fill="#9D50E5"/>
                    </svg>
                      승인권자
                    </ManagerBadge>
                  </Grid>
                  <Grid item>
                    <ManagerBadge>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="4" cy="4" r="4" fill="#067DFD"/>
                      </svg>
                      AS총괄
                    </ManagerBadge>
                  </Grid>
                  <Grid item>
                    <ManagerBadge>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="4" cy="4" r="4" fill="#067DFD"/>
                      </svg>
                      AS담당자
                    </ManagerBadge>
                  </Grid>
                  <Grid item>
                    <ManagerBadge>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="4" cy="4" r="4" fill="#43BED0"/>
                      </svg>
                      콜센터
                    </ManagerBadge>
                  </Grid>
                  <Grid item >
                    <ManagerBadge>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="4" cy="4" r="4" fill="#F9560E"/>
                      </svg>
                      고객
                    </ManagerBadge>
                  </Grid>
                </Grid>
               {/* </Stack>  */}
           </RootDiv>
        </Container>
      </Page>
    </>
  );
}

export default AccountCreate;