import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Icon , addIcon } from '@iconify/react';
import Rating from '@mui/material/Rating';
 import {
         Stack,
         Box,
         Typography,
         Paper
} from '@mui/material';
// import { Link as RouterLink, useLocation } from 'react-router-dom';
// import Page from 'src/components/Page';
import SignImage from 'src/assets/images/sign.png';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

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

const BetweenDiv = styled('div')({
                    display: 'flex',
                     padding: '20px',
                    flexDirection: 'column',
                    alignItems: 'flexStart',
                    gap: '20px',
                    flex: '1 0 0',
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
];

const AccountDetailRootDiv = styled('div')({
        display: "flex",
        // width: "1540px",
        width: "auto",
        padding: "20px",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "20px",
        borderRadius: "0px 0px 8px 8px",
        background: "var(--Gray-Gray-50, #FAFAFA)"
})

const SignImgStyle = styled('img')({
    width: '150px',
    height: '127.434px' 
});


const DeviderStyle = styled('div')({
    height: '1px',
    alignSelf: 'stretch',
    background: 'var(--Gray-Gray-400, #BDBDBD)'
})


const accountListColumn = ['회사및지점','아이디','이름','연란처','핸드폰 연락처','이메일'];
const accountList = ['신현은행(인천점)','k-itms01','홍길동','01-111-1111','02-000-0000','gildong@k-one.co.kr'];
function AccountManagementDetail() {
  return(
    <>
      <AccountDetailRootDiv>
      <Stack direction="row" alignItems="center"
         sx={{
            display: 'flex',
            paddingBottom: '12px',
            alignItems: 'center',
            gap: '10px',
            alignSelf: 'stretch',
            borderBottom: '1px solid var(--Gray-Gray-400, #BDBDBD)'
         }}
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
                        계정 상세 정보
                    </Typography>
        </Stack>
        {/* <BetweenDiv></BetweenDiv> */}
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' , width: 500 }} >
            {/* {Array.from(Array(6)).map((_, index) => (
                    <Item key={index} >xs=2</Item>
            ))} */}
        
        {accountListColumn.map((val, index) => (
            <Box
               sx={{
                // display: 'flex',
                // flexDirection: 'row',
                // justifyContent: 'center',
                // alignItems: 'flex-start',
                // flex: '1 0 0',
                display: 'grid',
                columnGap: 3,
                rowGap: 0,
                gridTemplateColumns: 'repeat(1, 1fr)',
                paddingRight:'250px',
                paddingBottom:'20px',
                width:'480px'
               }}
            >
                <Typography
                     sx={{
                        color: 'var(--Gray-Gray-700, #616161)',
                        fontFamily: 'Pretendard',
                        fontSize: '12px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '16px'
                     }}
                >
                   {val}
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
                   {accountList[index]}
                </Typography>
            </Box>
            ))}
         </Box>

         {/* <BetweenDiv/> */}
         <DeviderStyle/>

         <Stack direction="row" alignItems="left"
         sx={{
            display: 'flex',
            padding: '16px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start', 
            borderRadius: '4px',
            border: '1px solid var(--Gray-Gray-200, #EEE)'
         }}
         >
            <SignImgStyle src={SignImage} />
        </Stack>
         
        <Stack direction="row" alignItems="center"
         sx={{
            display: 'flex',
            paddingBottom: '12px',
            alignItems: 'center',
            gap: '10px',
            alignSelf: 'stretch',
            borderBottom: '1px solid var(--Gray-Gray-400, #BDBDBD)'
         }}
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
                        서비스 이력
                    </Typography> 
       </Stack>
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
        
        <DeviderStyle/>

        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <Box
               sx={{
                display: 'grid',
                columnGap: 3,
                rowGap: 0,
                gridTemplateColumns: 'repeat(1, 1fr)',
                paddingRight:'250px',
                paddingBottom:'20px',
                width:'480px'
               }}
            >
                <Typography
                     sx={{
                        color: 'var(--Gray-Gray-700, #616161)',
                        fontFamily: 'Pretendard',
                        fontSize: '12px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '16px'
                     }}
                >
                   활성상태
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
                   사용중
                </Typography>
            </Box>
            <Box
               sx={{
                display: 'grid',
                columnGap: 3,
                rowGap: 0,
                gridTemplateColumns: 'repeat(1, 1fr)',
                paddingRight:'250px',
                paddingBottom:'20px',
                width:'480px'
               }}
            >
                <Typography
                     sx={{
                        color: 'var(--Gray-Gray-700, #616161)',
                        fontFamily: 'Pretendard',
                        fontSize: '12px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '16px'
                     }}
                >
                   계정생성일
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
                   2023-12-01
                </Typography>
            </Box>
        </Box>

        <Stack direction="row" alignItems="center"
          sx = {{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            gap: '12px',
            alignSelf: 'stretch',
          }}
        >

        </Stack>
      </AccountDetailRootDiv>
    </>
  );
}

export default AccountManagementDetail;