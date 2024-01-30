import * as React from 'react';
import {
    Container,
    Stack,
    Typography,
    Grid,
    Box,
    Radio,
    RadioGroup,
    FormControlLabel,
    TextField,
    Divider,
    Button,
    Rating,
    InputAdornment
} from '@mui/material';
import { DataGrid, GridColDef, GridCellParams, GridToolbar } from '@mui/x-data-grid'
import CustomToolbar from './CustomToolbar';
import { styled } from '@mui/material/styles';
import Page from 'src/components/Page';
import ServiceRequestForm from './ServiceRequestForm';
import ServiceStepButton from './ServiceStepButton';
import group from 'src/assets/images/icons/group.png';
// import { useForm, FormProvider, useFormContext } from "react-hook-form"
import { useQuery, useMutation, useQueryClient, QueryClient } from '@tanstack/react-query';
import ServiceStatus from './ServiceStatus'
import {Service} from 'src/types'
import AssetStatus from './AssetStatus'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'
import { getServiceDetail } from '../api/assetapi';
// import Serarch from 'src/assets/images/icons/search.png'
import SearchIcon from '@mui/icons-material/Search';

function ServiceDetail({serviceNo}) {

    // const { detaildata, error, isSuccess } = useQuery({
    //     queryKey: ["ServiceDetail"],
    //      queryFn: getServiceDetail(serviceNo)
    //   });
    
    const params = {servicetype:'error'};
    const rating = 1;
    const rqueststep = [
        { title: '요청', link: '2024-01-19 16:24' },
        { title: '접수', link: '2024-01-19 16:25' },
        { title: '시작', link: '2024-01-19 16:31' },
        { title: '종료', link: '' },
        { title: '평가', link: '' },
    ];


    // const detailData = {
    //     serviceNo:
    //     serviceName:
    //     serviceContent:
    //     serviceTypeCode:
    //     serviceTypeName:
    //     serviceDetailTypeCode:
    //     serviceDetailTypeName:
    //     serviceJobStatusCode:
    //     serviceJobStatusName:
    //     serviceStartDate:
    //     serviceEndData:
    //     serviceEstTime:
    //     요청일
    //     계약명
    //     평점
    //     serviceHopeDate:
    //     reqUserId:
    //     reqUserName:
    //        assetList:{
    //         자산분류 assetCategoryValue
    //         모델명  assetName
    //         제조사 assetManComp
    //         시리얼넘버  assetSn
    //         상태     assetStatusValue
    //        }
    // }

    const data = [{
        id:uuidv4(),
        assetsort:'노트북#002',
        model:'VivoBook_ASUS',
        manufacturer:'아수스',
        serial:'2A123FL1567',
        status:'normal'
    }];
    const columns: GridColDef[] = [
      {field: 'id', headerName: '', width: 0 },
      {field: 'assetsort', headerName: '자산분류', width: 150},
      {field: 'model', headerName: '모델명', width: 150},
      {field: 'manufacturer', headerName: '제조사', width: 100},
      {field: 'serial', headerName: '시리얼넘버.', width: 100},
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
      }
    ]; 


    return (
             <> 
               <div style={{
                     display: 'flex',
                     width: '1350px',
                     padding: '20px',
                     flexDirection: 'column',
                     alignItems: 'flex-start',
                     gap: '40px',
                     borderRadius: '0px 0px 8px 8px',
                     background: 'var(--Gray-Gray-50, #FAFAFA)'
               }}>

                <Stack direction="row" spacing={0} sx={{ width: 'auto' }} pl={10}>
                    <div
                        style={{
                            width: '1410px',
                            display: 'flex',
                            // padding: '12px 117.5px 12px 118.5px',
                            justifyContent: 'flex-start',
                            alignItems: 'left',
                            alignSelf: 'stretch',
                            position:'relative',
                            left:'-60px'
                        }}
                    >
                        {rqueststep.map((val, index) => (
                            <React.Fragment key={index}>
                                <div
                                    style={{
                                        display: 'flex',
                                        width: '36px',
                                        height: '36px',
                                        padding: '6px',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: '100px',
                                        border: val.link !=='' ?  '1px solid var(--Main-Blue-Blue-500, #067DFD)':'1px solid var(--Gray-Gray-500, #9E9E9E)',
                                        background: 'var(--White, #FFF)'
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: val.link !=='' ?  'var(--Main-Blue-Blue-500, #067DFD)':' var(--Gray-Gray-500, #9E9E9E)',
                                            textAlign: 'center',
                                            fontFamily: 'Pretendard',
                                            fontSize: '16px',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            lineHeight: '24px'
                                        }}
                                    >
                                        {index + 1}
                                    </Typography>
                                </div>
                                <Typography
                                    sx={{
                                        color: val.link ==='' ?  'var(--Gray-Gray-500, #9E9E9E)': 'var(--Main-Blue-Blue-500, #067DFD)',
                                        fontFamily: 'Pretendard',
                                        fontSize: '16px',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        lineHeight: '24px',
                                        paddingTop: '7px',
                                        paddingLeft: '3px',
                                        paddingRight: '3px'
                                    }}
                                >
                                    {val.title}{val.link}
                                </Typography>
                                {index < 4 && (
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            paddingRight: '3px',
                                            paddingLeft: '3px'
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: '80px',
                                                height: '1px',
                                                background: val.link ==='' ?  'var(--Gray-Gray-300, #E0E0E0)' : 'var(--Main-Blue-Blue-500, #067DFD)' 
                                            }}
                                        ></div>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </Stack>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '20px',
                    alignSelf: 'stretch'
                }}
            >
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
               서비스 상세 정보
            </Typography>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
               <Grid item xs={2} sm={4} md={4}>
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
                        요청번호
                    </Typography>
                    <Typography
                        sx={{
                            color: 'var(--Gray-Gray-900, #222)',
                            fontFamily: 'Pretendard',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '24px'
                        }}
                        >
                            #3465
                    </Typography>       
               </Grid>
               <Grid item xs={2} sm={4} md={4}>
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
                        서비스명
                    </Typography>
                    <Typography
                        sx={{
                            color: 'var(--Gray-Gray-900, #222)',
                            fontFamily: 'Pretendard',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '24px'
                        }}
                        >
                            순번대기기 점검
                        </Typography>
               </Grid>
               <Grid item xs={2} sm={4} md={4}>
               
               </Grid>
               <Grid item xs={2} sm={4} md={4}>
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
                            서비스유형
                        </Typography>
                      <div style={{width:'70px'}}>
                        <ServiceStatus iconProp={params} />
                      </div>
               </Grid>
               <Grid item xs={2} sm={4} md={4}>
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
                        상세유형
                    </Typography>
                    <Typography
                        sx={{
                            color: 'var(--Gray-Gray-900, #222)',
                            fontFamily: 'Pretendard',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '24px'
                        }}
                        >
                            -
                        </Typography>
               </Grid>
               <Grid item xs={2} sm={4} md={4}>
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
                            작업상태
                        </Typography>
                      <div style={{width:'70px'}}>
                        <ServiceStatus iconProp={params} />
                      </div>
               </Grid>
            </Grid>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
               <Grid item xs={2} sm={4} md={4}>
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
                        중요도
                    </Typography>
                    <Typography
                        sx={{
                            color: 'var(--Main-Blue-Blue-500, #067DFD)',
                            fontFamily: 'Pretendard',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '24px'
                        }}
                        >
                            상
                        </Typography>
               </Grid>
            </Grid>

            <div style={{ 
                         width: '1200px',
                         alignSelf: 'stretch',
                         height:'1px',
                         background:'var(--Gray-Gray-300, #E0E0E0)'
                         }} />
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={4}>
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
                        서비스시작예정일
                    </Typography>
                    <Typography
                        sx={{
                            color: 'var(--Gray-Gray-900, #222)',
                            fontFamily: 'Pretendard',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '24px'
                        }}
                        >
                            20200202
                        </Typography>
                </Grid>
                <Grid item xs={4}>
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
                        서비스종료예정일
                    </Typography>
                    <Typography
                        sx={{
                            color: 'var(--Gray-Gray-900, #222)',
                            fontFamily: 'Pretendard',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '24px'
                        }}
                        >
                            20200202
                        </Typography>
               </Grid>
               <Grid item xs={4}>
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
                        예상소요시간
                    </Typography>
                    <Typography
                        sx={{
                            color: 'var(--Gray-Gray-900, #222)',
                            fontFamily: 'Pretendard',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '24px'
                        }}
                        >
                            00:00:00
                        </Typography>
               </Grid>
            </Grid>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={4}>
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
                        서비스요청일
                    </Typography>
                    <Typography
                        sx={{
                            color: 'var(--Gray-Gray-900, #222)',
                            fontFamily: 'Pretendard',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '24px'
                        }}
                        >
                            20200202
                        </Typography>
                </Grid>
                <Grid item xs={4}>
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
                        서비스희망일
                    </Typography>
                    <Typography
                        sx={{
                            color: 'var(--Gray-Gray-900, #222)',
                            fontFamily: 'Pretendard',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '24px'
                        }}
                        >
                            20200202
                        </Typography>
               </Grid>
               {/* <Grid item xs={4}>
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
                        요청자
                    </Typography>
                    <Typography
                        sx={{
                            color: 'var(--Gray-Gray-900, #222)',
                            fontFamily: 'Pretendard',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '24px'
                        }}
                        >
                            김길동
                        </Typography>
               </Grid> */}
            </Grid>
            <div style={{ 
                         width: '1200px',
                         alignSelf: 'stretch',
                         height:'1px',
                         background:'var(--Gray-Gray-300, #E0E0E0)'
                         }} />
            
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
               <Grid item xs={6}>
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
                        요청자
                    </Typography>
                    <Typography
                        sx={{
                            color: 'var(--Gray-Gray-900, #222)',
                            fontFamily: 'Pretendard',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '24px'
                        }}
                        >
                            박예준
                        </Typography>
               </Grid>
               <Grid item xs={6}>
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
                        계약명
                    </Typography>
                    <span
                        style={{
                            color: 'var(--Gray-Gray-900, #222)',
                            fontFamily: 'Pretendard',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            lineHeight: '24px'
                        }}
                        >
                            국민은행 연간 유지보수 건 
                        </span>
                        <span
                        style={{
                            color: 'var(--Gray-Gray-900, #222)',
                            fontFamily: 'Pretendard',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '24px',
                        }}
                        >
                            ( #2023-1234-5678)
                        </span>
               </Grid>
               
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
               <Grid item xs={12}>
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
                        평점
                    </Typography>
               </Grid>
               <Grid item xs={12}>
               <Rating 
                sx={{
                    
                }}
                value={rating} readOnly />
               </Grid>
            </Grid>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
               <Grid item xs={12}>
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
                        첨부파일
                    </Typography>
               </Grid>
               <Grid item xs={12}>
               
               </Grid>
            </Grid>

            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                alignSelf: 'stretch'
            }}
            >
                <span
                    style={{
                        color: 'var(--Gray-Gray-900, #222)',
                        fontFamily: 'Pretendard',
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '28px'
                    }}
                >
                    자산 리스트
                </span>
                <TextField
                    fullWidth
                    variant='standard'
                    placeholder='검색어를 입력하세요'
                    InputProps={{disableUnderline:true,
                        startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon />
                            </InputAdornment>
                        )
                    }}
                    style={{
                        marginLeft:'780px',
                        display: 'flex',
                        width: '300px',
                        height: '36px',
                        padding: '4px 12px',
                        alignItems: 'center',
                        gap: '8px',
                        borderRadius: '100px',
                        border: '1px solid var(--Gray-Gray-500, #9E9E9E)',
                        background: 'var(--White, #FFF)'
                    }}
                />
                <Button
                    sx={{
                        display: 'flex',
                        height: '36px',
                        padding: '4px 20px',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '100px',
                        border: '1px solid var(--Main-Blue-Blue-500, #067DFD)',
                        background: 'var(--White, #FFF)',
                        boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.20)',
                        }}
                >
                    <span
                        style={{
                            color: 'var(--Main-Blue-Blue-500, #067DFD)',
                            fontFamily: 'Pretendard',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '20px',
                        }}
                    >
                        검색하기
                    </span>
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
                        //   slots={{ toolbar: GridToolbar }}
                        slots={{ toolbar: CustomToolbar}}
                          checkboxSelection
                        />
            </div>


            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
               <Grid item xs={2} sm={4} md={4}>
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
                        비고
                    </Typography>
                    <div style={{
                        display: 'flex',
                        height: '48px',
                        padding: '16px',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        alignSelf: 'stretch',
                    }}
                    >
                        --
                    </div>
               </Grid>
            </Grid>
            
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    gap: '12px',
                    alignSelf: 'stretch',
                }}
            >
                <Button
                    sx={{
                        display: 'flex',
                        padding: '8px 20px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '4px',
                        borderRadius: '1000px',
                        border: '1px solid var(--Main-Red-Red-500, #EF2B2A)',
                        background: 'var(--White, #FFF)',
                    }}
                >
                    <span
                       style={{
                        color: 'var(--Main-Red-Red-500, #EF2B2A)',
                        textAlign: 'center',
                        fontFamily: 'Pretendard',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '20px',
                       }}
                    >
                        수정하기
                    </span>
                </Button>
                <Button
                   sx={{
                    display: 'flex',
                    padding: '8px 16px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '4px',
                    borderRadius: '4px',
                    boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.25)',
                   }}
                >
                    <span
                        style={{
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
                    </span>
                </Button>

            </div>

            </div>

          </div>
     </>
    );
}

export default ServiceDetail;
