import { Container, Stack, Typography, Grid, Button } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Page from 'src/components/Page';
import ServiceEmpty from './ServiceEmpty';
import Service from './Service';

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

        {/* <ServiceEmpty /> */}
        <Service />

        </Container>
      </Page>
    
  );
}
export default ServiceRequest;