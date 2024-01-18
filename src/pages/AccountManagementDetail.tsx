import * as React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import { DataGrid, GridColDef, GridCellParams, GridToolbar } from '@mui/x-data-grid'
import { Icon , addIcon } from '@iconify/react';
import Rating from '@mui/material/Rating';
import { v4 as uuidv4 } from 'uuid'
 import {
         Stack,
         Box,
         Typography,
         Paper,
         Button
} from '@mui/material';
import AccountRating from './AccountRating'
import SignImage from 'src/assets/images/sign.png';

const columns: GridColDef[] = [
  {field: 'id', headerName: '', width: 0 },
  {field: 'requestno', headerName: '요청번호', width: 150},
  {field: 'servicename', headerName: '서비스명', width: 150},
  {field: 'servicetype', headerName: '서비스유형', width: 150},
  {field: 'workstatus', headerName: '작업상태', width: 150},
  {field: 'requestdate', headerName: '요청일', width: 150},
  {field: 'name', headerName: '이름', width: 150},
  {
    field: 'rating',
    align:'left',
    headerName: '평점',
    width: 130,
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    renderCell: (params: GridCellParams) =>
     <AccountRating iconProp={params.row} />
   },      
];

const rows = [
    {id:uuidv4(),requestno:'#234213423',servicename:'신협은행장기점검',servicetype:'완료',workstatus:'완료',requestdate:'20230101',name:'김길동',rating:0},
    {id:uuidv4(),requestno:'#234213422',servicename:'국민은행장기점검',servicetype:'완료',workstatus:'완료',requestdate:'20230201',name:'김길동',rating:1},
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
  const navigate = useNavigate();
  const moveUpdate = (e) => {
    e.preventDefault();
    navigate('/accountupdate');
  };
  
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
                  columnVisibilityModel={{
                    id: false,
                  }}
                  disableRowSelectionOnClick={true}
                  // getRowId={row => row._links.self.href}
                  getRowId={(row: any) =>  uuidv4()}
                  slots={{ toolbar: GridToolbar }}
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
        <Button 
             sx= {{
              display: 'flex',
              padding: '8px 20px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '4px',
              borderRadius: '1000px',
              border: '1px solid var(--Main-Red-Red-500, #EF2B2A)',
              background: 'var(--White, #FFF)',
             }}
             onClick={moveUpdate}
             >
              <Typography
                  sx={{
                    color: 'var(--Main-Red-Red-500, #EF2B2A)',
                    textAlign: 'center',
                    fontFamily: 'Pretendard',
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: '20px'
                  }}
                  >
                    수정하기
                  </Typography>
             </Button>
             <Button
                  sx={{
                    display: 'flex',
                    padding: '8px 16px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '4px',
                    borderRadius: '4px',
                    boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.25)'
                  }}
                  onClick={() => {
                    if (window.confirm(`진심으로 삭제하시겠습니까?`)) {
                       //mutate(params.row._links.car.href);
                    } 
                  }}
             >
                  <Typography
                       sx={{
                        color: 'var(--Gray-Gray-500, #9E9E9E)',
                        textAlign: 'center',
                        fontFamily: 'Pretendard',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '20px',
                       }}
                       >
                       삭제하기
                       </Typography>
             </Button>

        </Stack>
      </AccountDetailRootDiv>
    </>
  );
}

export default AccountManagementDetail;