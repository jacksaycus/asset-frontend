import * as React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import {Snackbar } from '@mui/material';
import { DataGrid, GridColDef, GridCellParams, GridToolbar } from '@mui/x-data-grid'
import MuiPagination from '@mui/material/Pagination';
import { Icon , addIcon } from '@iconify/react';
import Rating from '@mui/material/Rating';
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'
import { getAccountDetail,delAccount } from '../api/assetapi';
import { useQuery, useMutation, useQueryClient, QueryClient, dataTagSymbol } from '@tanstack/react-query';
import CustomToolbar from './CustomToolbar'
import CustomPagination from './CustomPagination'
import * as _ from "lodash";
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
  {field: 'serviceNo', headerName: '요청번호', width: 150},
  {field: 'serviceName', headerName: '서비스명', width: 150},
  {field: 'serviceTypeValue', headerName: '서비스유형', width: 150},
  {field: 'serviceJobStatusValue', headerName: '작업상태', width: 150},
  {field: 'serviceStartDate', headerName: '요청일', width: 150},
  {field: 'asUserName', headerName: '이름', width: 150},
//   {
//     field: 'serviceStar',
//     align:'left',
//     headerName: '평점',
//     width: 130,
//     sortable: false,
//     filterable: false,
//     disableColumnMenu: true,
//     renderCell: (params: GridCellParams) =>
//      <AccountRating iconProp={params.row} />
//    },      
];

const columns1: GridColDef[] = [
   {field: 'id', headerName: '', width: 0 },
   {field: 'compName', headerName: '회사', width: 150},
   {field: 'branchNo', headerName: '지점번호', width: 150},
   {field: 'branchName', headerName: '지점명', width: 150},
   {field: 'branchEtc', headerName: '지점비고', width: 150},
   {field: 'branchAddr', headerName: '지점주소', width: 150},
   
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
let accountList = ['신현은행(인천점)','k-itms01','홍길동','01-111-1111','02-000-0000','gildong@k-one.co.kr'];

function AccountManagementDetail({requestno,toggleDetail}) {
  console.log(requestno)
  const navigate = useNavigate();
  
const queryClient = useQueryClient();

  const { data, error, isSuccess } = useQuery({
    queryKey: ['AccountDetail',{searchValue:requestno}],
    queryFn: getAccountDetail
  });

  const[isSave,setIsSave] = React.useState(false)    
  const { mutate } = useMutation({mutationFn : delAccount,
   onSuccess: () => {
   //   queryClient.invalidateQueries(["Account"]);
   setIsSave(true)
  //  navigate(-1)
  toggleDetail()
   },
   onError: (err) => {
     console.error(err);
   },
 }) 
 
  if(_.isUndefined(data))return
  console.log(data)
  
  accountList[0] = `${data.compName}(${data.branchName})`
  accountList[1] = data.userId
  accountList[2] = data.userName
  accountList[3] = data.userTel
  accountList[4] = data.userMobile
  accountList[5] = data.userEmail

  const moveUpdate = (e) => {
   e.preventDefault();
   const param = {
     requestno:requestno,
     userId:data.userId,
     userName: data.userName,
     branchList:data.branchList,
     authCode:data.authCode,
     useEmail: data.userEmail,
     userMobile: data.userMobile,
     usePwd: data.userPwd,
     userTel : data.userTel,
     attachFileName:data.attachFileName,
     attachFilePath:data.attachFilePath,
     attachNo:data.attachNo,
     userNo:data.userNo,
   }
   console.log(param)
   navigate('/dashboard/accountcreate',{state: {node:'u', param:param} })
 };

 const handleDelete = (e) => {
   mutate(data.userNo)
 }

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
            <Box key={index}
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
                  rows={data.serviceList}
                  columns={columns}
                  columnVisibilityModel={{
                    id: false,
                  }}
                  disableRowSelectionOnClick={true}
                  // getRowId={row => row._links.self.href}
                  getRowId={(row: any) =>  uuidv4()}
                  // slots={{ toolbar: GridToolbar }}
                  slots={{ toolbar: CustomToolbar, pagination: CustomPagination }}
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
                   {data.enable==true &&
                    <span>사용중</span>
                   }
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
                   {moment(data.createDt).format("YYYY-MM-DD")}
                </Typography>
            </Box>
        </Box>


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
                        지점
                    </Typography> 
       </Stack>
       <Stack direction="row" alignItems="center" spacing={1}>
             <Box sx={{ height: 400, width: '100%' ,backgroundColor:'white'}}>
                <DataGrid
                  rows={data.branchList}
                  columns={columns1}
                  columnVisibilityModel={{
                    id: false,
                  }}
                  disableRowSelectionOnClick={true}
                  // getRowId={row => row._links.self.href}
                  getRowId={(row: any) =>  uuidv4()}
                  // slots={{ toolbar: GridToolbar }}
                  slots={{ toolbar: CustomToolbar, pagination: CustomPagination }}
                />
              </Box>
        </Stack>
        
        <DeviderStyle/>
        
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
                  onClick={(e) => {
                    if (window.confirm(`진심으로 삭제하시겠습니까?`)) {
                       //mutate(params.row._links.car.href);
                       handleDelete(e)
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
      <Snackbar
          open={isSave}
          autoHideDuration={2000}
          onClose={() => setOpen(false)}
          message="삭제되었습니다" />
    </>
  );
}

export default AccountManagementDetail;