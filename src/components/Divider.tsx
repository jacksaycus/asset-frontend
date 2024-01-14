import React from 'react';
import { styled } from '@mui/material/styles';
// import { Box, Typography } from '@mui/material';


const DividerDiv = styled('div')({
    width: '208px',
    height: '1px',
    background: 'var(--Gray-Gray-300, #E0E0E0)'
})

export const Divider = (): JSX.Element => {
    
    return (
      <>
      <DividerDiv>
     
       </DividerDiv> 
      </>
    );
};

export default Divider;
