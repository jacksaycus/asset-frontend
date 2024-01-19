import * as React from 'react'
import { Container, Button, Stack, Typography, TextField, Grid , Paper, Box } from '@mui/material'
import Page from 'src/components/Page'
import AccountUpdate from './AccountUpdate';

function AccountUpdateWrapper() {

    return(
    <>
      <Page>
        <Container>
           <AccountUpdate />
         </Container>
      </Page>
    </>
  );
}

export default AccountUpdateWrapper;