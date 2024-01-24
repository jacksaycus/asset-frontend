import * as React from 'react'
import { Container, Stack, Typography, Grid, Button , TextField, MenuItem, Popover, IconButton, Link } from '@mui/material'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { DataGrid, GridColDef, GridCellParams, GridToolbar } from '@mui/x-data-grid'
import { v4 as uuidv4 } from 'uuid'
import frame from 'src/assets/images/icons/frame.png'
import plusblack from 'src/assets/images/icons/plusblack.png'
import ServiceStatus from './ServiceStatus'
import moment from 'moment'
import down from 'src/assets/images/icons/down.png'
import ServiceDetail from './ServiceDetail'

function Service() {
    
    const condition = [
        {
            value: 'cond1',
            label: '조건1',
          },
    ]

    const data = [{
        id:uuidv4(),
        requestno:'#2342',
        company:'노트북',
        servicename:'모델명',
        asmanager:'레노보',
        priority:'중',
        servicetype:'error',
        servicedate:'20000101',
        requester:'tester',
        status:'요청'
    }];
    const columns: GridColDef[] = [
      {field: 'id', headerName: '', width: 0 },
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
                    //  display: 'flex',
                    //  padding: '28px',
                    //  flexDirection: 'row',
                    //  alignItems: 'flex-start',
                    //  gap: '20px',
                    //  alignSelf: 'stretch',
                    //  borderRadius: '12px',
                    //  border: '1px solid var(--Gray-Gray-200, #EEE)',
                    //  background: 'var(--White, #FFF)'
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
                          rows={data}
                          columns={columns}
                          disableRowSelectionOnClick={true}
                          // getRowId={row => row._links.self.href}
                          getRowId={(row: any) =>  uuidv4()}
                          slots={{ toolbar: GridToolbar }}
                          checkboxSelection
                        />
                    </div>

                  <ServiceDetail />                 

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
                        // onClick={moveRequest}
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
