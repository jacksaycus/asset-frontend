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
function AssetStatus({ iconProp }: IconProps) {
  console.log(iconProp);
  const status = iconProp.status;
  return(
    <>
      {status==='normal' && ( <div style={{
            width:'auto',
            display: 'flex',
            padding: '4px 12px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            borderRadius: '100px',
            border: '1px solid var(--Main-Green-Green-500, #00C400)',
            background: 'var(--Main-Green-Green-50, #E5FCE3)',
        }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                <circle cx="2" cy="2" r="2" fill="#00C400"/>
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
                정상
                </Typography>
            </div>
            )
        }


        {status==='defact' && ( <div style={{
            width:'auto',
            display: 'flex',
            padding: '4px 12px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            borderRadius: '100px',
            border: '1px solid var(--Sub-Yellow-Yellow-500, #EAAD06)',
            background: 'var(--Sub-Yellow-Yellow-50, #FFFCE5)',
        }}
        >
                <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                    <circle cx="2" cy="2" r="2" fill="#EAAD06"/>
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
                    고장
                </Typography>
            </div>
            )
        }

        {status==='lose' && ( <div style={{
            width:'auto',
            display: 'flex',
            padding: '4px 12px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            borderRadius: '100px',
            border: '1px solid var(--Sub-Purple-Purple-500, #9D50E5)',
            background: 'var(--Sub-Purple-Purple-50, #FBF5FF)'
        }}
        >
                <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                    <circle cx="2" cy="2" r="2" fill="#9D50E5"/>
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
                    분실
                </Typography>
            </div>
            )
        }

       {status==='drop' && ( <div style={{
            width:'auto',
            display: 'flex',
            padding: '4px 12px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            borderRadius: '100px',
            border: '1px solid var(--Main-Orange-Orange-500, #F9560E)',
            background: 'var(--Main-Orange-Orange-50, #FFF6F2)',
        }}
        >
                <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                <circle cx="2" cy="2" r="2" fill="#F9560E"/>
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
                    폐기
                </Typography>
            </div>
            )
        }

        {status==='delete' && ( <div style={{
            width:'auto',
            display: 'flex',
            padding: '4px 12px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            borderRadius: '100px',
            border: '1px solid var(--Main-Red-Red-500, #EF2B2A)',
            background: 'var(--Main-Red-Red-50, #FFF5F5)',
        }}
        >
                <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                <circle cx="2" cy="2" r="2" fill="#EF2B2A"/>
                </svg>
                <Typography sx={{
                    color: 'var(--Main-Red-Red-500, #EF2B2A)',
                    textAlign: 'center',
                    fontFamily: 'Pretendard',
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    lineHeight: '16px',
                }}
                >
                    삭제
                </Typography>
            </div>
            )
        }

    </>
  );
}

export default AssetStatus;