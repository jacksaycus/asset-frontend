import * as React from 'react';
import { Container, Button, Stack, Typography, TextField, Grid , Paper, Box } from '@mui/material';
import Page from 'src/components/Page';
import { styled } from '@mui/material/styles';
import { Icon , addIcon } from '@iconify/react';
import ErrorIcon from 'src/assets/images/icons/error.png';
import CompanyDialog from './CompanyDialog';


function AssetCreate() {
  
    return(
    <>
      <Page>
        
          <div style={{
                display: 'flex',
                width: '1150px',
                padding: '28px',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '32px',
                alignSelf: 'stretch',
                borderRadius: '12px',
                border: '1px solid var(--Gray-Gray-300, #E0E0E0)',
                background: 'var(--White, #FFF)',
                position: 'relative',
                left:'-15px',
          }}
          >
            <div style={{
                display: 'flex',
                width: '1540px',
                flexDirection: 'column',
                justifyContent: 'center',
                alignSelf: 'stretch',
                color: 'var(--Gray-Gray-900, #222)',
                fontFamily: 'Pretendard',
                fontSize: '20px',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: '28px'
            }}>
               <Typography sx= {{
                     color: 'var(--Gray-Gray-900, #222)',
                     fontFamily: 'Pretendard',
                     fontSize: '20px',
                     fontStyle: 'normal',
                     fontWeight: '600',
                     lineHeight: '28px'
               }}
               >
                자산 등록
               </Typography>
            </div>
          </div>

        
      </Page>
    </>
  );
}

export default AssetCreate;