import { Helmet } from 'react-helmet-async';
import React, { forwardRef } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

interface Props {
    children?;
    title?;
    other?;
}
const Page = forwardRef(function Page(props: Props, ref) {
    const { children, title = '', ...other } = props;
    const RootDiv = styled('div')({
        display: 'flex',
        width: '1230px',
        // maxwidth: '1250px',
        minWidth: '1180px',
        padding: '32px',
        flexDirection: 'column',
        alignItems: 'flexStart',
        gap: '20px',
        // flex: '1 0 0',
        position: 'relative',
        top:'-47px',
        left:'-15px',
        background: 'var(--Gray-Gray-50, #FAFAFA)'
    });

    return (
        <Box ref={ref} {...other}>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <RootDiv>
              {children}
            </RootDiv>
        </Box>
    );
});

export default Page;
