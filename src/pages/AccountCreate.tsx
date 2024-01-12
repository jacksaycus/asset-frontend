import * as React from 'react';
import { Container, Stack, Typography } from '@mui/material';
import Page from 'src/components/Page';

function AccountCreate() {
  
  return(
    <>
      <Page title="HelloWorld">
        <Container>
           <Typography variant="h4" sx={{ mb: 5 }}>
              Helloworld
           </Typography>
        </Container>
      </Page>
    </>
  );
}

export default AccountCreate;