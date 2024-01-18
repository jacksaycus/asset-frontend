import * as React from 'react';
import { Container, Button, Stack, Typography, TextField, Grid , Paper, Box, MenuItem } from '@mui/material';
import Page from 'src/components/Page';
import { styled } from '@mui/material/styles';
import { Icon , addIcon } from '@iconify/react';
import ErrorIcon from 'src/assets/images/icons/error.png';
import CompanyDialog from './CompanyDialog';
import {Asset} from '/src/types';

function AssetCreate() {
  const [asset, setAsset] = React.useState<Asset>({
    ompany: '',
    assetsort: '',
    serial: '',
    model: '',
    manufacturer: '',
    assetplace: '',
    assetdate: '',
    checkperiod: '',
    assetprice: '',
    bigo : ''
  });

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setAsset({...asset, [event.target.name]: event.target.value});
  }

  const handleSave = () => {
    setAsset({ company: '', assetsort: '', serial: '', model: '', manufacturer: '', assetplace: '', assetdate: '', checkperiod: '',  assetprice: '', bigo: ''});
  }  

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
           
            <div style={{
                   display: 'flex',
                   justifyContent: 'center',
                   alignItems: 'center',
                   gap: '20px',
                   alignSelf: 'stretch',
                   flexFlow: 'wrap',
                   
            }}
            >
              
              <div style={{width:'100%', display:'flex', flexDirection:'row',alignItems:'center' 
                          
                     }}>
                  <Typography
                       sx={{
                        color: 'var(--Gray-Gray-900, #222)',
                        fontFamily: 'Pretendard',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '24px',
                       }}
                       >
                        회사 및 지점
                       </Typography>
                       <Typography
                       sx={{
                        color: 'var(--Main-Red-Red-500, #EF2B2A)',
                        fontFamily: 'Pretendard',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '24px',
                       }}
                       >
                        *
                       </Typography>
                       <TextField
                            sx={{
                              borderRadius: '4px',
                              background: 'var(--Gray-Gray-100, #F5F5F5)',
                              width: '960px',
                              marginLeft:'20px'
                             }}
                            name="company"
                            value={asset.company}
                            onChange={handleChange}
                        />
                  </div>
                

                  <div style={{width:'100%', display:'flex', flexDirection:'row',
                          alignItems:'center'
                     }}>
                  <Typography
                       sx={{
                        color: 'var(--Gray-Gray-900, #222)',
                        fontFamily: 'Pretendard',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '24px',
                       }}
                       >
                        자산분류
                       </Typography>
                       <Typography
                       sx={{
                        color: 'var(--Main-Red-Red-500, #EF2B2A)',
                        fontFamily: 'Pretendard',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '24px',
                       }}
                       >
                        *
                       </Typography>
                       <TextField
                            select
                            sx={{
                              borderRadius: '4px',
                              background: 'var(--Gray-Gray-100, #F5F5F5)',
                              width: '960px',
                              marginLeft:'46px'
                             }}
                            name="company"
                            value={asset.company}
                            onChange={handleChange}
                        >
                           <MenuItem key={0} value={'assetsort'}>
                              {'자산분류1'}
                           </MenuItem>
                        </TextField>
                   </div>

                   
              
            </div>
          </div>
      </Page>
    </>
  );
}

export default AssetCreate;