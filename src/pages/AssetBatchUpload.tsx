import * as React from 'react';
import { Container, MenuItem,Stack, Typography, TextField, Grid , Paper, Box, Button, Dialog,DialogTitle,DialogContent,DialogActions, Hidden } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Page from 'src/components/Page';
import { styled } from '@mui/material/styles';
import { Icon , addIcon } from '@iconify/react';
import ErrorIcon from 'src/assets/images/icons/error.png';
import InitImage from 'src/assets/images/restart_alt.png';
import Qrbig from 'src/assets/images/icons/qrbig.png';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import QrCodeIcon from '@mui/icons-material/QrCode';
import Tooltip from '@mui/material/Tooltip';
import assetbatchupload from 'src/assets/images/icons/assetbatchupload.png';
import publish from 'src/assets/images/icons/publish.png'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

function AssetBatchUpload() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    }

    const handleClose = () => {
      setOpen(false);
    };

  
    return (
      <React.Fragment>
        <Tooltip title="QR조회">
          <IconButton aria-label="edit" size="small" onClick={handleClickOpen}>
            <img src={publish} width='24px' height='24px' />
          </IconButton>
        </Tooltip>

        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
         
        >
          <DialogTitle 
             sx={{
                //  m: 0, p: 2 
                display: 'flex',
                height: '40px',
                flexDirection: 'column',
                justifyContent: 'center',
                flex: '1 0 0',
                marginBottom:'20px',
                }} 
             id="customized-dialog-title"
             >
             <Typography
                   sx={{
                    color: 'var(--Gray-Gray-900, #222)',
                    fontFamily: 'Pretendard',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: '28px',
                    paddingTop:'28px'
                   }}
              >
            자산 일괄 파일 업로드
            </Typography>
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>

            <div style={{
                display: 'flex',
                height: '312px',
                padding: '20px',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                alignSelf: 'stretch',
                borderRadius: '12px',
                border: '1px dashed var(--Main-Blue-Blue-500, #067DFD)',
                background: 'var(--Main-Blue-Blue-50, #EEF7FF)',
                width:'400px'
            }}  
            >
                <img src={assetbatchupload} width='40px' height='40px' />
                
                <Typography
                    sx={{
                        color: 'var(--Gray-Gray-900, #222)',
                        textAlign: 'center',
                        fontFamily: 'Pretendard',
                        fontSize: '18px',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        lineHeight: '24px',
                    }}
                    >
                    자산 일괄 양식 업로드
                </Typography>
                <Typography
                    sx={{
                        color: 'var(--Gray-Gray-500, #9E9E9E)',
                        textAlign: 'center',
                        fontFamily: 'Pretendard',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: '24px'
                    }}
                >
                    .xlsx or .csv
                </Typography>
            </div>

          
          </DialogContent>
          <DialogActions>
            {/* <Button autoFocus onClick={handleClose}>
              Save changes
            </Button> */}
          </DialogActions>
        </BootstrapDialog>
      </React.Fragment>
    );
  }

export default AssetBatchUpload;