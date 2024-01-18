import * as React from 'react';
import { Container, Stack, Typography, Grid, Button , TextField, MenuItem, Popover} from '@mui/material'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { DataGrid, GridColDef, GridCellParams, GridToolbar } from '@mui/x-data-grid'
import { styled } from '@mui/material/styles'
import frame from 'src/assets/images/icons/frame.png'
import plus from 'src/assets/images/icons/plus.png'
import publish from 'src/assets/images/icons/publish.png'
import filesave from 'src/assets/images/icons/file_save.png'

const ManagerBadge = styled('div')({
    display: 'flex',
    padding: '4px 8px',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: '4px',
    borderRadius: '100px',
    background: 'var(--Gray-Gray-200, #EEE)'
})

type IconProps = {
    iconProp:any
  }
function AccountAuthority({ iconProp }: IconProps) {
  console.log(iconProp);
  const role = iconProp.authority;
  return(
    <>
      {role==='manager' && ( 
             <ManagerBadge>
             <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="4" cy="4" r="4" fill="#00C400"/>
             </svg>
             관리자
           </ManagerBadge>
        )
      }
      {role==='supermanager' && ( 
             <ManagerBadge>
             <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="4" cy="4" r="4" fill="#9D50E5"/>
             </svg>
               승인권자
             </ManagerBadge>
        )
       }
        {role==='asadvisor' && ( 
            <ManagerBadge>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="4" cy="4" r="4" fill="#067DFD"/>
            </svg>
              AS총괄
            </ManagerBadge>
       )
      }
      {role==='asmanager' && ( 
            <ManagerBadge>
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <circle cx="4" cy="4" r="4" fill="#067DFD"/>
               </svg>
              AS담당자
            </ManagerBadge>
       )
      }

      {role==='callcenter' && ( 
            <ManagerBadge>
               <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <circle cx="4" cy="4" r="4" fill="#43BED0"/>
              </svg>
              콜센터
            </ManagerBadge>
       )
      }

     {role==='callcenter' && ( 
            <ManagerBadge>
               <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="4" cy="4" r="4" fill="#F9560E"/>
              </svg>
              고객
            </ManagerBadge>
       )
      }


      

    </>
  );
}

export default AccountAuthority;