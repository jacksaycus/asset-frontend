import * as React from 'react'
import { Container, Button, Stack, Typography, TextField, Grid , Paper, Box } from '@mui/material'
import Page from 'src/components/Page'
import AccountCreate from './AccountCreate';

function AccountCreateWrapper() {

    return(
    <>
      <Page>
        <Container>
           <AccountCreate />
         </Container>
      </Page>
    </>
  );
}

export default AccountCreateWrapper;