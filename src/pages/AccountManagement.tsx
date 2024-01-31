import * as React from 'react'
import { Container, Stack, Typography, Grid, Button , TextField, MenuItem, Popover, IconButton, Link } from '@mui/material'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { DataGrid, GridColDef, GridCellParams, GridToolbar,GridPagination,useGridApiContext,useGridSelector,gridPageCountSelector } from '@mui/x-data-grid'
import MuiPagination from '@mui/material/Pagination';
import CustomToolbar from './CustomToolbar'
import frame from 'src/assets/images/icons/frame.png'
import plus from 'src/assets/images/icons/plus.png'
import down from 'src/assets/images/icons/down.png'
import filesave from 'src/assets/images/icons/file_save.png'
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined'
import * as FileSaver from 'file-saver';
import * as _ from "lodash";
import { v4 as uuidv4 } from 'uuid'
import { useQuery, useMutation, useQueryClient, QueryClient, dataTagSymbol } from '@tanstack/react-query';
import { getAccount } from '../api/assetapi';
import {Account} from './src/types'
import AccountAuthority from './AccountAuthority'
import AccountRating from './AccountRating'
import AccountManagementDetail from './AccountManagementDetail';
import CustomNoRowsOverlay from './CustomNoRowsOverlay'
import CustomPagination from './CustomPagination'

function AccountManagement() {
    const navigate = useNavigate();

    const [detail, setDetail] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const [searchColumn, setSearchColumn] = React.useState('')
    const [searchValue, setSearchValue] = React.useState('')
    
   const handleChangeSearchColumn = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchColumn(event.target.value);
   };
   const handleChangeSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);
   };
   
    const moveRequest = (e) => {
        e.preventDefault();
        navigate('/dashboard/accountcreate', { replace: true });
    };

    const condition = [
      {
        value: 'userId',
        label: '아이디',
      },
      {
        value: 'userName',
        label: '이름',
      },
      {
        value: 'userTel',
        label: '연락처',
      },
      {
        value: 'userMobile',
        label: '개인연락처',
      },
      {
        value: 'userEmail',
        label: '이메일',
      }
    ]

    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          
        },
      },
    })
    
    let accountData = []
    const doinquiery = async () => {
    const data = await queryClient.fetchQuery({ queryKey: ['Account',{searchColumn:searchColumn,searchValue:searchValue}], queryFn: getAccount })
    console.log(data)
    accountData = data
    // manuplate()
   }

   const { data, error, isSuccess } = useQuery({
    queryKey: ["Account",{searchColumn:searchColumn,searchValue:searchValue}],
    queryFn: getAccount
  });
  accountData = data
  //  React.useEffect(() => {
  //   doinquiery()
  // }, []);
  

   const condition1 = [
    {
      value: 'userId',
      label: '아이디',
    }
]


    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      navigate("/dashboard/accountcreate");
    };
  
    
    const excelcols = 
              // ["회사및지점명","아이디","권한", "이름", "연락처", "핸드폰연락처", "이메일",  "평점"];
              ["아이디","이름", "연락처", "핸드폰연락처", "이메일",  "평점"];
    const maptocol = {
                // company:'회사및지점명',
                userid:'아이디',
                // authority:'권한',
                name:'이름',
                tel:'연락처',
                phone:'핸드폰연락처', 
                email:'이메일@kon.com',
                rating:"평점"
    };          
             
    // const data = [{
    //             //  company:'신한은행',
    //              userid:'길길동',
    //             //  authority:'supermanager',
    //              name:'레노보',
    //              tel:'0134213',
    //              phone:'00000000', 
    //              email:'kone@kon.com',
    //              rating:0
    //             }];

    
      let data1= []
      //const manuplate = () => { 
        for (let i=0;i<accountData?.length;i++) {
          let obj1 = {};
            obj1.userid = accountData[i].userId;
            obj1.name = accountData[i].userName;
            obj1.tel = accountData[i].userTel;
            obj1.phone = accountData[i].userPhone;
            obj1.email = accountData[i].userEmail;
            obj1.rating = Math.floor(Number(accountData[i].serviceStarAvg));
            //  console.log(obj1)
            // data1 = [...data1,obj1]
            data1.push(obj1)
        }

      let obj={}
      let exceldata1 = []
      for(let i=0;i<data1.length;i++){
            let j=0;
            _.map(data1[i], function(val, k) {
                  obj[excelcols[j]]=val;
                    ++j;
            })
            exceldata1.push(obj)
            obj={}
      }
      console.log(exceldata1);
      //}

      
     const columns: GridColDef[] = [
      {field: 'id', headerName: '', width: 0 },
      // {field: 'company', headerName: '회사및지점명', width: 150},
      {field: 'userid', headerName: '아이디', width: 120},
      // {
      //   field: 'authority',
      //   align:'left',
      //   headerName: '권한',
      //   width: 120,
      //   sortable: false,
      //   filterable: false,
      //   disableColumnMenu: true,
      //   renderCell: (params: GridCellParams) =>
      //    <AccountAuthority iconProp={params.row} />
      //  },
      {field: 'name', headerName: '이름.', width: 120},
      {field: 'tel', headerName: '연락처', width: 150},
      {field: 'phone', headerName: '핸드폰연락처', width: 150},
      {field: 'email', headerName: '이메일', width: 160},
      {
        field: 'rating',
        align:'left',
        headerName: '평점',
        width: 150,
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        renderCell: (params: GridCellParams) =>
         <AccountRating iconProp={params.row} />
       },      
    ]; 
  
    const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      const fileExtension = ".xlsx";
      
      const exportToExcel = async (fileName) => {
        const ws = XLSX.utils.json_to_sheet(exceldata1,{header:excelcols});
        const wb = { Sheets: { "data" : ws }, SheetNames: ["data"] };
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array"});
        const data1 = new Blob([excelBuffer], {type: fileType});
        FileSaver.saveAs(data1, fileName + fileExtension);
      }

      const [olddetail,setOlddetail] = React.useState('');
      let detailrow = 0;
      const handleRowClick: GridEventListener<'rowClick'> = (params) => {
        if(params.row.requestno===olddetail){
           setDetail(false);
           setOlddetail(''); 
           detailrow = params.row.requestno
        }else{
           setDetail(true);
           setOlddetail(params.row.requestno); 
        }
      };
    
    return (
            <>
            <div style={{
                    display: 'flex',
                    width: '1140px',
                    // minWidth: '1180px',
                    padding: '22px',
                    marginRight:'auto',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '20px',
                    flex: '1 0 0',
                    background: 'var(--Gray-Gray-50, #FAFAFA)',
                    marginLeft:'0px',
                    paddingLeft:'32px',
                    justifyContent: 'flex-start'
            }}
            >
              
            <Stack direction="row" spacing={2} style={{marginLeft:'20px', width:'1000px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '20px',
            alignSelf: 'stretch',
          }}>
              <TextField
                name="searchColumn"
                value={searchColumn}
                variant="standard"
                InputProps={{disableUnderline:true}}
                select
                sx={{
                  ".MuiInputBase-input": {
                    display: 'flex',
                    width: '200px',
                    height: '36px',
                    // padding: '8px 4px',
                    // alignItems: 'center',
                    gap: '4px',
                    borderBottom: '1px solid var(--Gray-Gray-700, #616161)'
                  }
                }}
                onChange={handleChangeSearchColumn}
                >
                {condition.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
              </TextField>
              <TextField
                    fullWidth
                    name="searchValue"
                    value={searchValue}
                    variant="standard"
                    InputProps={{disableUnderline:true}}
                    onChange={handleChangeSearchValue}
                    sx={{
                        '.MuiInputBase-input': {
                            width: '150px',
                            height: '18px',
                            display: 'flex',
                            padding: '8px 12px',
                            alignItems: 'center',
                            gap: '10px',
                            flex: '1 0 0',
                            borderRadius: '4px',
                            border: '1px solid var(--Gray-Gray-300, #E0E0E0)',
                            background: 'var(--White, #FFF)'
                        }
                    }}
                ></TextField>
                <div
                   style={{
                    display: 'flex',
                    width:'auto',
                    height: '36px',
                    padding: '8px 16px',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'left',
                    borderRadius:'4px',
                    background: 'var(--Main-Blue-Blue-500, #067DFD)',
                   }}
                   >
                <Button 
                  fullWidth
                sx = {{
                    width:'80px'
                }}
                onClick={doinquiery}
                >
                  <Typography
                        sx = {{
                          color: 'var(--White, #FFF)',
                          fontFamily: 'Pretendard',
                          fontSize: '14px',
                          fontStyle: 'normal',
                          fontWeight: '600',
                          lineHeight: '20px',
                        }}
                        >
                          검색하기
                  </Typography>
                </Button>
                </div>
                <img src={frame} style={{
                     marginLeft:'6px',
                }} width='36px' height='36px' />
              </Stack>

              <div style={{
                      display: 'flex',
                      padding: '20px',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      gap: '20px',
                      alignSelf: 'stretch',
                      borderRadius: '12px',
                      border: '1px solid var(--Gray-Gray-200, #EEE)',
                      background: 'var(--White, #FFF)',
                      width:'1050px'
                   }}
              >
                  <Stack direction="row" spacing={2} style={{marginLeft:'20px', width:'1100px'}}>
                    <div style={{
                          width:'100%',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          gap: '12px',
                          alignSelf: 'stretch',
                          
                    }}>
                        <Typography
                            sx={{
                              color: 'var(--Gray-Gray-900, #222)',
                              fontFamily: 'Pretendard',
                              width:'150px',
                              fontSize: '20px',
                              fontStyle: 'normal',
                              fontWeight: '600',
                              lineHeight: '28px',
                              position: 'relative',
                              left:'-124px'
                            }}
                        >
                          계정 리스트
                        </Typography>
                      
                      <div style={{
                              display: 'flex',
                              height: '40px',
                              padding: '8px 12px 8px 16px',
                              justifyContent: 'center',
                              alignItems: 'center',
                              gap: '4px',
                              borderRadius: '4px',
                              background: 'var(--Main-Blue-Blue-50, #EEF7FF)',
                              marginLeft:'540px'
                         }}
                       >
                       <Button
                          sx={{width:'120px'}}
                          onClick={handleClick}

                       >
                          <Typography
                                sx={{
                                  color: 'var(--Main-Blue-Blue-500, #067DFD)',
                                  textAlign: 'center',
                                  fontFamily: 'Pretendard',
                                  fontSize: '16px',
                                  fontStyle: 'normal',
                                  fontWeight: '600',
                                  lineHeight: '24px'
                                }}
                           >
                          계정 추가
                          </Typography>
                          <img src={plus} width='24px' height='24px'/>
                        </Button>
                        
                     </div>
                   </div>
                  </Stack>  
                  
                  <div style={{
                    height: 400, width: 'auto',
                        display: 'flex',
                        padding: '20px',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '20px',
                        alignSelf: 'stretch',
                        borderRadius: '12px',
                        border: '1px solid var(--Gray-Gray-200, #EEE)',
                        background: 'var(--White, #FFF)'
                    }}>
                       
                       <DataGrid  sx={{
                        position: 'relative',
                        left:'-20px',
                        width:'920px'
                       }}
                       onRowClick={handleRowClick}
                          columnVisibilityModel={{
                            id: false,
                          }}
                          rows={data1}
                          columns={columns}
                          disableRowSelectionOnClick={true}
                          // getRowId={row => row._links.self.href}
                          getRowId={(row: any) =>  uuidv4()}
                          slots={{ pagination: CustomPagination, toolbar: CustomToolbar,noRowsOverlay: CustomNoRowsOverlay }}
                          // slots={{ toolbar: CustomToolbar,noRowsOverlay: CustomNoRowsOverlay }}
                          checkboxSelection
                        />
                  </div>

               </div>

            </div>

            {
                 detail && 
                     <AccountManagementDetail requestno={detailrow} />
            }

            <div style={{
                   display: 'flex',
                   width: '1660px',
                   minWidth: '1180px',
                   padding: '32px',
                   flexDirection: 'column',
                   alignItems: 'flex-start',
                   gap: '20px'
            }}
            >
             <Button sx={{
                      display: 'flex',
                      height: '36px',
                      padding: '8px 12px 8px 16px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '8px',
                      borderRadius: '4px',
                      border: '1px solid var(--Main-Blue-Blue-500, #067DFD)',
                      background: 'var(--White, #FFF)',
                      boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.20)',
                      position: 'relative',
                      left:'-30px'
              }}
              onClick={(e) => exportToExcel('계정')}
              >
                  <Typography sx={{
                          color: 'var(--Main-Blue-Blue-500, #067DFD)',
                          fontFamily: 'Pretendard',
                          fontSize: '14px',
                          fontStyle: 'normal',
                          fontWeight: '600',
                          lineHeight: '20px'
                  }}
                  >
                    엑셀 다운로드
                  </Typography>
                  <img src={down} width='24px' height='24px' />   
              </Button>

            </div>

            </>   
        );
}

export default AccountManagement;
