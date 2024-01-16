import { Container, Stack, Typography, Grid, Button } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Page from 'src/components/Page';
import activeicon from 'src/assets/images/icons/notifications_active.png';
import add from 'src/assets/images/icons/add.png';
import AssetNoop from './AssetNoop';
import AssetList from './AssetList';

function AssetManagement() {
  
  return(
    
      <Page title='자산관리'>
        <Container sx={{
            marginLeft:'10px'
        }}>

           {/* <AssetNoop /> */}
           <AssetList />

        </Container>
      </Page>
    
  );
}

export default AssetManagement;