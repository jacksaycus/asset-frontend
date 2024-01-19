import * as React from 'react'
import { Container, Button, Stack, Typography, TextField, Grid , Paper, Box } from '@mui/material'
import Page from 'src/components/Page'
import PersonalInfoForm from './PersonalInfoForm';

function PersonalInfo() {

    return(
    <>
      <Page>
        <Container>
           <PersonalInfoForm />
         </Container>
      </Page>
    </>
  );
}

export default PersonalInfo;