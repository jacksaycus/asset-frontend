import * as React from 'react';
import { Container, Stack, Typography, Grid, Button , TextField, MenuItem, Popover} from '@mui/material'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { DataGrid, GridColDef, GridCellParams, GridToolbar } from '@mui/x-data-grid'
import { styled } from '@mui/material/styles'
import frame from 'src/assets/images/icons/frame.png'
import plus from 'src/assets/images/icons/plus.png'
import publish from 'src/assets/images/icons/publish.png'
import filesave from 'src/assets/images/icons/file_save.png'
import Rating from '@mui/material/Rating';

type IconProps = {
    iconProp:any
  }
function AccountRating({ iconProp }: IconProps) {
  console.log(iconProp);
  const rating = iconProp.rating;
  return(
    <>
      <Rating 
            sx={{
                
            }}
            value={rating} readOnly />
    </>
  );
}

export default AccountRating;