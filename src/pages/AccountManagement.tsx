import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Icon , addIcon } from '@iconify/react';
import Rating from '@mui/material/Rating';
 import {
    Stack,
    Button,
     TextField,
     Box,
     Container,
    Typography
} from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Page from 'src/components/Page';
import AccountManagementDetail from './AccountManagementDetail';

function RatingEditInputCell(props) {
  const { id, value, api, field } = props;

  const handleChange = async (event) => {
    api.setEditCellValue({ id, field, value: Number(event.target.value) }, event);
    if (event.nativeEvent.clientX !== 0 && event.nativeEvent.clientY !== 0) {
      // Wait for the validation to run
      const isValid = await api.commitCellChange({ id, field });
      if (isValid) {
        api.setCellMode(id, field, 'view');
      }
    }
  };

  const handleRef = (element) => {
    if (element) {
      element.querySelector(`input[value="${value}"]`).focus();
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', pr: 2 }}>
      <Rating
        ref={handleRef}
        name="rating"
        precision={1}
        value={value}
        onChange={handleChange}
      />
    </Box>
  );
}
RatingEditInputCell.propTypes = {
  api: PropTypes.any.isRequired,
  field: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  value: PropTypes.number.isRequired,
};

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;
addIcon('create', {
  body: '<path d="M9.75 10.25H4V8.75H9.75V3H11.2499V8.75H17V10.25H11.2499V16H9.75V10.25Z" fill="#067DFD"/>',
  width: 20,
  height: 20,
});
addIcon('exceldownload', {
  body: '<path d="M9.99998 13.157L6.44233 9.59938L7.32052 8.69554L9.375 10.75V3.75H10.625V10.75L12.6794 8.69554L13.5576 9.59938L9.99998 13.157ZM5.25642 16.25C4.83547 16.25 4.47917 16.1041 4.1875 15.8125C3.89583 15.5208 3.75 15.1645 3.75 14.7435V12.484H4.99998V14.7435C4.99998 14.8077 5.02669 14.8664 5.0801 14.9199C5.13353 14.9733 5.19231 15 5.25642 15H14.7435C14.8077 15 14.8664 14.9733 14.9199 14.9199C14.9733 14.8664 15 14.8077 15 14.7435V12.484H16.25V14.7435C16.25 15.1645 16.1041 15.5208 15.8125 15.8125C15.5208 16.1041 15.1645 16.25 14.7435 16.25H5.25642Z" fill="#067DFD"/>',
  width: 20,
  height: 20,
});

const CellspacingDiv = styled('div')({
       justifyContent: 'spaceBetween',
       alignItems: 'center',
       alignSelf: 'stretch',
       width:'100x%'
})

// const TableBackground = styled('div')({
//        display: 'flex',
//        width: '1660px',
//        minWidth: '1180px',
//        padding: '32px',
//        flexDirection: 'column',
//        alignItems: 'flexStart',
//        gap: '20px',
//        flex: '1 0 0',
//        background: 'var(--Gray-Gray-50, #FAFAFA)'
// })
const BetweenDiv = styled('div')({
                    display: 'flex',
                     padding: '20px',
                    flexDirection: 'column',
                    alignItems: 'flexStart',
                    gap: '20px',
                    flex: '1 0 0',
})

const ExcelButtonDiv = styled('div')({
  display: 'flex',
  height: '36px',
  padding: '8px 12px 8px 16px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  borderRadius: '4px',
  border: '1px solid var(--Main-Blue-Blue-500, #067DFD)',
  background: 'var(--White, #FFF)',
  boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.20)'
})

function renderRating(params:any) {
  return <Rating readOnly value={params.value} />;
}

function renderRatingEditInputCell(params) {
  return <RatingEditInputCell {...params} />;
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'rating',
    headerName: 'Rating',
    renderCell: renderRating,
    renderEditCell: renderRatingEditInputCell,
    editable: true,
    width: 180,
    type: 'number',
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 , rating: 5 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 , rating: 4 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 , rating: 3 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 , rating: 2 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null , rating: 1 },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 , rating: 3 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 , rating: 4 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 , rating: 3 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 , rating: 2 },
];

function AccountManagement() {
  return(
    <>
      <Page title="계정관리">
         <Container>
            <Stack direction="row" alignItems="center" spacing={2}
            >
              <TextField
                id="select1"
                variant="standard"
                select
                // helperText="Please select your condition"
                sx={{
                  ".MuiInputBase-input": {
                  display: 'flex',
                  width: '200px',
                  padding: '8px 4px',
                  alignItems: 'center',
                  rightPadding: '4px',
                  alignSelf: 'stretch',
                  borderBottom: '1px solid var(--Gray-Gray-700, #616161)'
                  }
                }}
              >
            </TextField>
            <TextField
                variant="standard"
                id="select2"
                select
                // helperText="Please select your condition"
                sx={{
                  ".MuiInputBase-input": {
                  display: 'flex',
                  width: '200px',
                  padding: '8px 4px',
                  alignItems: 'center',
                  // rightPadding: '4px',
                  alignSelf: 'stretch',
                  borderBottom: '1px solid var(--Gray-Gray-700, #616161)'
                  }
                }}
              >
            </TextField>
            <TextField
              id="text"
              type="search"
              variant="standard"
              placeholder="검색어를 입력하세요"
              fullWidth
              sx={{
                   display: 'flex',
                   padding: '8px 12px',
                   alignItems: 'center',
                   gap: '10px',
                   flex: '1 0 0',
                   borderRadius: '4px',
                   border: '1px solid var(--Gray-Gray-300, #E0E0E0)',
                   background: 'var(--White, #FFF)'
              }}
            />
            <Button variant="contained"
                     sx={{
                          display: 'flex',
                          height: '36px',
                          padding: '8px 16px',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: '4px',
                          background: 'var(--Main-Blue-Blue-500, #067DFD)'
                     }}
            >검색하기</Button>
             </Stack>
             <BetweenDiv></BetweenDiv>
             <Stack direction="row" alignItems="center" spacing={58}
            >
              <Typography variant="h6" gutterBottom 
                  sx={{
                    color: 'var(--Gray-Gray-900, #222)',
                    fontFamily:'Pretendard',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: '600px',
                    lineHeight: '28px'
                  }}
              >
                        계정리스트
                    </Typography>
                    <CellspacingDiv></CellspacingDiv>
                    {/* <Button variant="contained">계정생성 + </Button> */}
                    <Box component={RouterLink} to="/accountcreate" 
                      sx={{ 
                          //  display: 'inline-flex' 
                          display: 'flex',
                          padding: '8px 12px 8px 16px',
                          justifyContent: 'center',
                          alignItems: 'center',
                          gap: '4px',
                          borderRadius: '4px',
                          background: 'var(--Main-Blue-Blue-50, #EEF7FF)',
                        }}
                    >
                    <Typography variant="h6" gutterBottom 
                  sx={{
                       color: 'var(--Main-Blue-Blue-500, #067DFD)',
                       textAlign: 'center',
                       fontFamily: 'Pretendard',
                       fontSize: '14px',
                       fontStyle: 'normal',
                       fontWeight: '600',
                       lineHeight: '20px'
                       }}
                       >계정생성</Typography>
                     {getIcon('create')}
                     </Box>
             </Stack>
             <BetweenDiv></BetweenDiv>
             <Stack direction="row" alignItems="center" spacing={1}>
             <Box sx={{ height: 400, width: '100%' ,backgroundColor:'white'}}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 5,
                      },
                    },
                  }}
                  pageSizeOptions={[5]}
                  checkboxSelection
                  disableRowSelectionOnClick
                />
              </Box>
             </Stack>
             <BetweenDiv/>
               <AccountManagementDetail/>
             <BetweenDiv/>
             <Stack direction="row" alignItems="center" spacing={1}>
             <Box component={RouterLink} to="/" 
               sx={{ 
                      // display: 'inline-flex' ,
                      display: 'flex',
                      height: '36px',
                      padding: '8px 12px 8px 16px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '8px',
                      borderRadius: '4px',
                      border: '1px solid var(--Main-Blue-Blue-500, #067DFD)',
                      background: 'var(--White, #FFF)',
                      boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.20)'
                   }}
             >
               <Typography variant="h6" gutterBottom
               sx={{
                color: 'var(--Main-Blue-Blue-500, #067DFD)',
                fontFamily: 'Pretendard',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: '20px'
               }}
              >
                   엑셀다운로드
                </Typography>
                {getIcon('exceldownload')}
             </Box>
          </Stack>
         </Container>
      </Page>
    </>
  );
}

export default AccountManagement;