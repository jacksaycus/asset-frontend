// @ts-nocheck
import * as React from 'react'
import { Container, Stack, Typography, Grid, Button , TextField, MenuItem, Popover, IconButton, Link } from '@mui/material'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { DataGrid, GridColDef, GridCellParams, GridToolbar,GridPagination,useGridApiContext,useGridSelector,gridPageCountSelector } from '@mui/x-data-grid'
import CustomToolbar from './CustomToolbar';
import { v4 as uuidv4 } from 'uuid'
import frame from 'src/assets/images/icons/frame.png'
import plusblack from 'src/assets/images/icons/plusblack.png'
import ServiceStatus from './ServiceStatus'
import moment from 'moment'
import down from 'src/assets/images/icons/down.png'
import ServiceDetail from './ServiceDetail'
import * as FileSaver from 'file-saver';
import * as _ from "lodash";
import MuiPagination from '@mui/material/Pagination';
import CustomPagination from './CustomPagination'
import ServiceEmpty from './ServiceEmpty'

function Service() {
    
    const [detail, setDetail] = React.useState(false);

    const condition = [
        {
            value: 'cond1',
            label: '조건1',
          },
    ]

    const excelcols = 
              ["요청번호","회사","서비스명", "AS담당자", "중요도", "유형", "서비스일자",  "요청자", "상태"];

    const maptocol = {
        requestno:"요청번호",
        company:"회사",
        servicename:"서비스명",
        asmanager:"AS담당자",
        priority:"중요도",
        servicetype:"유형",
        servicedate:"서비스일자",
        requester:"요청자",
        status:"상태"
    };

    const data =
        // id:uuidv4(),
        [
          {
          requestno:"#2342",
          company:"노트북",
          servicename:"모델명",
          asmanager:"레노보",
          priority:"중",
          servicetype:"error",
          servicedate:"20000101",
          requester:"tester",
          status:"요청"
        },
        {
          requestno:"#2343",
          company:"노트북1",
          servicename:"모델명1",
          asmanager:"레노보1",
          priority:"하",
          servicetype:"normal",
          servicedate:"20000102",
          requester:"rrr",
          status:"완료"
        }
      ];


      let obj={}
      let exceldata1 = []
      for(let i=0;i<data.length;i++){
        let j=0;
        _.map(data[i], function(val, k) {
            obj[excelcols[j]]=val;
            ++j;
        })
        exceldata1.push(obj)
        obj={}
      }
      console.log(exceldata1);
        
      const exceldata = [
        {
          요청번호:"#2342",
          회사:"노트북",
          서비스명:"모델명",
          AS담당자:"레노보",
          중요도:"중",
          유형:"error",
          서비스일자:"20000101",
          요청자:"tester",
          상태:"요청"
        }
      ]


    const columns: GridColDef[] = [
      // {field: 'id', headerName: '', width: 0 },
      {field: 'requestno', headerName: '요청번호', width: 150},
      {field: 'company', headerName: '회사명', width: 150},
      {field: 'servicename', headerName: '서비스명', width: 100},
      {field: 'asmanager', headerName: 'AS담당자.', width: 100},
      {field: 'priority', headerName: '중요도', width: 100},
      {
        field: 'servicetype',
        align:'left',
        headerName: '유형',
        width: 120,
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        renderCell: (params: GridCellParams) =>
        <ServiceStatus iconProp={params.row} />
      },
      {field: 'servicedate', headerName: '요청일', width: 100,
      valueFormatter: params => 
      moment(params?.value).format("YYYY-MM-DD"),
      },
      {field: 'requester', headerName: '요청자', width: 100},
      {field: 'status', headerName: '상태', width: 100},
    ]; 

    const [olddetail,setOlddetail] = React.useState('');
    const handleRowClick: GridEventListener<'rowClick'> = (params) => {
      // alert(`Movie "${params.row.requestno}" clicked`);
      // alert(params.row.requestno===olddetail);
      // alert(olddetail);
      if(params.row.requestno===olddetail){
         setDetail(false);
         setOlddetail(''); 
      }else{
         setDetail(true);
         setOlddetail(params.row.requestno); 
      }
    };
    
    
      const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      const fileExtension = ".xlsx";
      
      const exportToExcel = async (fileName) => {
        const ws = XLSX.utils.json_to_sheet(exceldata1,{header:excelcols});
        const wb = { Sheets: { "data" : ws }, SheetNames: ["data"] };
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array"});
        const data1 = new Blob([excelBuffer], {type: fileType});
        // var worksheet = XLSX.utils.aoa_to_sheet(data);
        // var new_workbook = XLSX.utils.book_new();
        // XLSX.utils.book_append_sheet(new_workbook, worksheet, "SheetJS");
        FileSaver.saveAs(data1, fileName + fileExtension);
      }
    

    return (
            <>
              <div style={{
                    display: 'flex',
                    width: '1460px',
                    // minWidth: '1180px',
                    padding: '32px',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '20px',
                    flex: '1 0 0',
                    background: 'var(--Gray-Gray-50, #FAFAFA)',
                    position:'relative',
                    left:'-40px'
              }}
              >

                 <div style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '20px',
                        alignSelf: 'stretch',
                        
                 }}
                 >

             <TextField
                name="condition"
                variant="standard"
                InputProps={{disableUnderline:true}}
                select
                sx={{
                  ".MuiInputBase-input": {
                    display: 'flex',
                    width: '200px',
                    height: '36px',
                    padding: '8px 4px',
                    alignItems: 'center',
                    gap: '4px',
                    borderBottom: '1px solid var(--Gray-Gray-700, #616161)'
                  }
                }}
                >
                {condition.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
              </TextField>
              <TextField
                    fullWidth
                    name="condition1"
                    variant="standard"
                    InputProps={{disableUnderline:true}}
                    sx={{
                        '.MuiInputBase-input': {
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
                >
                </TextField>
                <Button
                    sx={{
                        width:'120px',
                        display: 'flex',
                        height: '36px',
                        padding: '8px 16px',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '4px',
                        background: 'var(--Main-Blue-Blue-500, #067DFD)'
                    }}
                >
                   <Typography
                        sx={{
                            color: 'var(--White, #FFF)',
                            fontFamily: 'Pretendard',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '20px'
                        }}
                    >
                        검색하기
                    </Typography>
                </Button>
                <img src={frame} style={{
                     marginLeft:'6px',
                     cursor: 'pointer',
                }} width='36px' height='36px' />
              </div>   
              
              <div style={{
                    display: 'flex',
                    padding: '28px',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '20px',
                    alignSelf: 'stretch',
                    borderRadius: '12px',
                    border: '1px solid var(--Gray-Gray-200, #EEE)',
                    background: 'var(--White, #FFF)'
                    }}
               >     
                  <div style={{
                            display: 'flex',
                            justifyContent: 'left',
                            alignItems: 'left',
                            gap: '12px',
                            alignSelf: 'stretch',
                       }}
                       >
                        <Typography
                              sx={{
                                marginTop:'6px',
                                color: 'var(--Gray-Gray-900, #222)',
                                fontFamily: 'Pretendard',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                lineHeight: '28px',
                              }}
                              >
                                서비스 현황
                              </Typography>
                        </div>
                        <div style={{
                            marginLeft:'850px',
                            display: 'flex',
                            justifyContent: 'right',
                            alignItems: 'right',
                            gap: '12px',
                            alignSelf: 'stretch'
                       }}
                            
                        >
                        <Button 
                             sx={{
                                display: 'flex',
                                padding: '8px 12px 8px 16px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '4px',
                                borderRadius: '4px',
                                background: 'var(--Main-Blue-Blue-50, #EEF7FF)'
                             }}
                             >
                                <Typography
                                     sx={{
                                        color: 'var(--Main-Blue-Blue-500, #067DFD)',
                                        textAlign: 'center',
                                        fontFamily: 'Pretendard',
                                        fontSize: '14px',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        lineHeight: '20px'
                                     }}
                                     >
                                        보고서 작성
                                </Typography>
                                <img src={plusblack} width='24px' height='24px' />
                             </Button>
                    </div>
                   

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
                       
                       <DataGrid
                          columnVisibilityModel={{
                            id: false,
                          }}
                          onRowClick={handleRowClick}
                          rows={data}
                          columns={columns}
                          disableRowSelectionOnClick={true}
                          // getRowId={(row: any) =>  uuidv4()}
                          getRowId={(row: any) =>  row.requestno}
                          slots={{ pagination: CustomPagination, toolbar: CustomToolbar,noRowsOverlay: ServiceEmpty }}
                          checkboxSelection
                          pagination
                          initialState={{
                            pagination: { paginationModel: { pageSize: 10 } },
                          }}
                        />
                    </div>
               
                   {
                    detail &&
                       <ServiceDetail />                 
                   }

              </div>

              <div style={{
                   display: 'flex',
                   width: '1660px',
                   minWidth: '1180px',
                   paddingLeft: '32px',
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
                        onClick={(e) => exportToExcel('서비스')}
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

          </div>
         </>   
        );
}

export default Service;

// function CustomPagination(props: any) {
//   return <GridPagination ActionsComponent={Pagination} {...props} />;
// }

// function Pagination({
//   page,
//   onPageChange,
//   className,
// }: Pick<TablePaginationProps, 'page' | 'onPageChange' | 'className'>) {
//   const apiRef = useGridApiContext();
//   const pageCount = useGridSelector(apiRef, gridPageCountSelector);

//   return (
//     <MuiPagination
//       color="primary"
//       className={className}
//       count={pageCount}
//       page={page + 1}
//       onChange={(event, newPage) => {
//         onPageChange(event as any, newPage - 1);
//       }}
//     />
//   );
// }
