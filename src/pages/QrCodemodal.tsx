import * as React from 'react';
import { Container, MenuItem,Stack, Typography, TextField, Grid , Paper, Box, Button, Dialog,DialogTitle,DialogContent,DialogActions } from '@mui/material';
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
import {CopyToClipboard} from 'react-copy-to-clipboard'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

function QrCodemodal(props) {
    const {qrdata} = props;
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
             <QrCodeIcon/>
          </IconButton>
        </Tooltip>  
        {/* <Button variant="outlined" onClick={handleClickOpen}>
          Open dialog
        </Button> */}
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
                marginBottom:'20px'
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
            QR 조회
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
                  width: 'auto',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '40px',
                  alignSelf: 'stretch'  
              }}
           >
              <img src={Qrbig} width='100px' height='100px' />
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                alignSelf: 'stretch',
                            }}
                            >
                            <Typography
                                sx={{
                                    color: 'var(--Gray-Gray-500, #9E9E9E)',
                                    fontFamily: 'Pretendard',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    lineHeight: '24px',
                                    
                                }}
                                >
                                    회사및지점
                                </Typography>
                                <Typography
                                   sx={{
                                    color: 'var(--Gray-Gray-900, #222)',
                                    fontFamily: 'Pretendard',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: '24px',
                                   }}
                                   >
                                    종로지점
                                </Typography>
                            </div>
                        </Grid>
                        
                        <Grid item xs={8}>
                        <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                alignSelf: 'stretch',
                                
                            }}
                            >
                            <Typography
                                sx={{
                                    color: 'var(--Gray-Gray-500, #9E9E9E)',
                                    fontFamily: 'Pretendard',
                                    fontSize: '16px',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    lineHeight: '24px',
                                    marginRight:'40px'
                                    
                                }}
                                >
                                    QR 관리번호
                                </Typography>
                                <div style={{
                                  display: 'flex',
                                  flexDirection:'row',
                                  // justifyContent:'end'
                                }}>
                                    <Typography
                                      sx={{
                                        color: 'var(--Gray-Gray-900, #222)',
                                        fontFamily: 'Pretendard',
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: '24px',
                                      }}
                                      >
                                        K01234-567890
                                    </Typography>
                                    <CopyToClipboard text={'K01234-567890'} >
                                        <IconButton aria-label="edit" size="small" onClick={handleClickOpen}>
                                        <ContentCopyOutlinedIcon/>
                                        </IconButton>
                                    </CopyToClipboard>

                                </div>
                            </div>
                        </Grid>
                    </Grid>
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

export default QrCodemodal;