import * as React from 'react'
import { Container, Stack, Typography, Grid, Button , TextField, MenuItem, Popover, IconButton, Link } from '@mui/material'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { DataGrid, GridColDef, GridCellParams, GridToolbar } from '@mui/x-data-grid'
import frame from 'src/assets/images/icons/frame.png'
import plus from 'src/assets/images/icons/plus.png'
import publish from 'src/assets/images/icons/publish.png'
import filesave from 'src/assets/images/icons/file_save.png'
import AssetStatus from './AssetStatus'
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import QrCodemodal from './QrCodemodal'
import { v4 as uuidv4 } from 'uuid'
import AssetBatchUpload from './AssetBatchUpload'

function AssetList() {
    const navigate = useNavigate();

    const moveRequest = (e) => {
        e.preventDefault();
        navigate('/service/request', { replace: true });
    };

    const condition = [
        {
            value: 'cond1',
            label: '조건1',
          },
    ]

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const moveCreate = () => {
      navigate("/assetcreate");
    }

    const [batchopen, setBatchopen] = React.useState(false);

    const handleBatchUpload  = (event:React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      handleClose();
      setBatchopen(true);
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    

    const data = [{id:uuidv4(),company:'신한은행',assetsort:'노트북',model:'모델명',manufactuer:'레노보',serial:'0134213',status:'normal'}];
    const columns: GridColDef[] = [
      {field: 'id', headerName: '', width: 0 },
      {field: 'company', headerName: '회사및지점명', width: 150},
      {field: 'assetsort', headerName: '자산분류', width: 150},
      {field: 'model', headerName: '모델명', width: 100},
      {field: 'manufactuer', headerName: '제조사.', width: 100},
      {field: 'serial', headerName: '시리얼넘버', width: 100},
      {
        field: 'status',
        align:'left',
        headerName: '상태',
        width: 120,
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        renderCell: (params: GridCellParams) =>
         <AssetStatus iconProp={params.row} />
        // <AssetStatus iconProp={'normal'} />
      },
      {
        field: 'qr',
        headerName: 'QR조회',
        width: 90,
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        renderCell: (params: GridCellParams) => (
          <QrCodemodal qrdata={params.row} />
          // <IconButton 
          // onClick={() => {
          //   <QrCodemodal mopen={qopen} handleClose1={handleClosemodal} />
          // }}  
          // >
          // <QrCodeIcon/>
          // </IconButton>
        ),
      },
      {
        field: 'print',
        headerName: '인쇄',
        width: 90,
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        renderCell: (params: GridCellParams) => (
          <LocalPrintshopOutlinedIcon />
        ),
      },
    ]; 

    
    return (
            <>
            <div style={{
                    display: 'flex',
                    width: '960px',
                    // minWidth: '1180px',
                    padding: '22px',
                    marginRight:'auto',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '20px',
                    flex: '1 0 0',
                    background: 'var(--Gray-Gray-50, #FAFAFA)',
                    marginLeft:'0px',
                    paddingLeft:'0px',
                    justifyContent: 'flex-start'
            }}
            >
              
            <Stack direction="row" spacing={2}>
              <TextField
                name="condition"
                variant="standard"
                select
                sx={{
                  ".MuiInputBase-input": {
                    display: 'flex',
                    width: '192px',
                    height: '24px',
                    // padding: '8px 4px',
                    // alignItems: 'center',
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
                    sx={{
                        '.MuiInputBase-input': {
                            width: '650px',
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
                    width : '14%',
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
                    
                }}
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
                  <Stack direction="row" spacing={2}>
                    <div style={{
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
                              fontSize: '20px',
                              fontStyle: 'normal',
                              fontWeight: '600',
                              lineHeight: '28px'
                            }}
                        >
                          자산 리스트
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
                              marginLeft:'740px'
                         }}
                       >
                       <Button
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
                          자산 추가
                          </Typography>
                          <img src={plus} width='24px' height='24px'/>
                        </Button>
                        <Popover
                          id={id}
                          open={open}
                          anchorEl={anchorEl}
                          onClose={handleClose}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                          }}
                        >
                          <div style={{
                               display: 'flex',
                               flexDirection: 'row',
                               width:'100%',
                               height: '40px',
                               padding: '8px 12px 8px 16px',
                               justifyContent: 'space-between',
                               alignItems: 'center',
                               alignSelf: 'stretch'
                          }}>
                            <Typography
                               sx={{
                                color: 'var(--Gray-Gray-900, #222)',
                                textAlign: 'center',
                                fontFamily: 'Pretendard',
                                fontSize: '14px',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                lineHeight: '20px'
                               }}
                               >
                                자산 등록
                            </Typography>
                            <IconButton aria-label="자산등록" size="small" onClick={moveCreate}>
                                 <img src={publish} width='24px' height='24px'/>   
                            </IconButton>
                            
                          </div>
                          <div style={{
                               display: 'flex',
                               flexDirection: 'row',
                               width:'100%',
                               height: '40px',
                               padding: '8px 12px 8px 16px',
                               justifyContent: 'space-between',
                               alignItems: 'center',
                               alignSelf: 'stretch'
                          }}>
                            <Typography
                               sx={{
                                color: 'var(--Gray-Gray-900, #222)',
                                textAlign: 'center',
                                fontFamily: 'Pretendard',
                                fontSize: '14px',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                lineHeight: '20px'
                               }}
                               >
                                자산일괄등록
                            </Typography>
                            
                            {/* <IconButton size="small"  onClick={handleBatchUpload} > */}
                              {/* <img src={publish} width='24px' height='24px' onClick={() => setBatchopen(true) } /> */}
                              {/* <img src={publish} width='24px' height='24px' /> */}
                            {/* </IconButton> */}
                            <AssetBatchUpload />
                            {/* <img src={publish} width='24px' height='24px' onClick={() => setBatchopen(true) } />    */}
                          </div>

                          <div style={{
                               display: 'flex',
                               flexDirection: 'row',
                               width:'100%',
                               height: '40px',
                               padding: '8px 12px 8px 16px',
                               justifyContent: 'space-between',
                               alignItems: 'center',
                               alignSelf: 'stretch'
                          }}>
                            <Typography
                               sx={{
                                color: 'var(--Gray-Gray-900, #222)',
                                textAlign: 'center',
                                fontFamily: 'Pretendard',
                                fontSize: '14px',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                lineHeight: '20px',
                                marginRight:'14px'
                               }}
                               >
                                양식다운로드
                            </Typography>
                            <IconButton aria-label="양식다운로드" size="small">
                            <img src={filesave} width='24px' height='24px'/>   
                            </IconButton>
                          </div>
                        </Popover>
                     </div>
                   </div>
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

               </div>

            </div>
            </>   
        );
}

export default AssetList;
