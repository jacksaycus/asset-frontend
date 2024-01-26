import * as React from 'react';
import { Container, Stack, Typography, Grid, Button , TextField, MenuItem, Popover} from '@mui/material'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { DataGrid, GridColDef, GridCellParams, GridToolbar } from '@mui/x-data-grid'
import frame from 'src/assets/images/icons/frame.png'
import plus from 'src/assets/images/icons/plus.png'
import publish from 'src/assets/images/icons/publish.png'
import filesave from 'src/assets/images/icons/file_save.png'

type IconProps = {
    iconProp:any
  }
function ServiceStatus({ iconProp }: any) {
//   console.log(iconProp);
  const servicetype = iconProp.servicetype;
  return(
    <>
      {servicetype==='error' && ( <div style={{
            width:'auto',
            display: 'flex',
            padding: '4px 8px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '4px',
            borderRadius: '100px',
            background: 'var(--Gray-Gray-200, #EEE)'
        }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
            <circle cx="4" cy="4" r="4" fill="#EAAD06"/>
            </svg>
            <Typography
                sx={{
                    color: 'var(--Main-Green-Green-500, #00C400)',
                    textAlign: 'left',
                    fontFamily: 'Pretendard',
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    lineHeight: '16px',
                }}    
            >
                장애
                </Typography>
            </div>
            )
        }


        {servicetype==='defact' && ( <div style={{
             width:'auto',
             display: 'flex',
             padding: '4px 8px',
             justifyContent: 'center',
             alignItems: 'center',
             gap: '4px',
             borderRadius: '100px',
             background: 'var(--Gray-Gray-200, #EEE)'
        }}
        >
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                <circle cx="4" cy="4" r="4" fill="#F9560E"/>
                </svg>
                <Typography sx={{
                    color: 'var(--Sub-Yellow-Yellow-500, #EAAD06)',
                    textAlign: 'center',
                    fontFamily: 'Pretendard',
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    lineHeight: '16px',
                }}
                >
                    점검
                </Typography>
            </div>
            )
        }

        {servicetype==='install' && ( <div style={{
           width:'auto',
           display: 'flex',
           padding: '4px 8px',
           justifyContent: 'center',
           alignItems: 'center',
           gap: '4px',
           borderRadius: '100px',
           background: 'var(--Gray-Gray-200, #EEE)'
        }}
        >
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                <circle cx="4" cy="4" r="4" fill="#43BED0"/>
                </svg>
                <Typography sx={{
                    color: 'var(--Sub-Purple-Purple-500, #9D50E5)',
                    textAlign: 'center',
                    fontFamily: 'Pretendard',
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    lineHeight: '16px',
                }}
                >
                    설치
                </Typography>
            </div>
            )
        }

       {servicetype==='widraw' && ( <div style={{
           width:'auto',
           display: 'flex',
           padding: '4px 8px',
           justifyContent: 'center',
           alignItems: 'center',
           gap: '4px',
           borderRadius: '100px',
           background: 'var(--Gray-Gray-200, #EEE)'
        }}
        >
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                <circle cx="4" cy="4" r="4" fill="#706FF7"/>
                </svg>
                <Typography sx={{
                    color: 'var(--Main-Orange-Orange-500, #F9560E)',
                    textAlign: 'center',
                    fontFamily: 'Pretendard',
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    lineHeight: '16px',
                }}
                >
                    철수
                </Typography>
            </div>
            )
        }

    </>
  );
}

export default ServiceStatus;