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
    Divider
} from '@mui/material';
import group from 'src/assets/images/icons/group.png';

type RequestFormProps = {
    values: any;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
function ServiceRequestStep1({ values, handleChange }: RequestFormProps) {

    return (
        <React.Fragment>
            <div
                style={{
                    display: 'flex',
                    width: 'fit-content',
                    height: '48px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20px',
                    alignSelf: 'stretch'
                }}
            >
                <Typography
                    sx={{
                        color: 'var(--Gray-Gray-900, #222)',
                        fontFamily: 'Pretendard',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineJeight: '24px'
                    }}
                >
                    서비스명
                </Typography>
                <Typography
                    sx={{
                        color: 'var(--Main-Red-Red-500, #EF2B2A)',
                        fontFamily: 'Pretendard',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '24px'
                    }}
                >
                    *
                </Typography>
                <input
                    style={{
                        display: 'flex',
                        width: '890px',
                        height: '48px',
                        padding: '16px 20px',
                        marginLeft: '29px',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flex: '1 0 0',
                        borderRadius: '4px',
                        background: 'var(--Gray-Gray-100, #F5F5F5)'
                    }}
                    onChange={handleChange}
                    type="text"
                    name="servicename"
                    id="servicename"
                    value={values.servicename}
                />
            </div>

            <div
                style={{
                    display: 'flex',
                    width: 'fit-content',
                    height: '48px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20px',
                    alignSelf: 'stretch'
                }}
            >
                <Typography
                    sx={{
                        color: 'var(--Gray-Gray-900, #222)',
                        fontFamily: 'Pretendard',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineJeight: '24px'
                    }}
                >
                    서비스내용
                </Typography>
                <Typography
                    sx={{
                        color: 'var(--Main-Red-Red-500, #EF2B2A)',
                        fontFamily: 'Pretendard',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '24px'
                    }}
                >
                    *
                </Typography>
                <input
                    style={{
                        display: 'flex',
                        marginLeft: '14px',
                        width: '890px',
                        height: '48px',
                        padding: '16px 20px',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flex: '1 0 0',
                        borderRadius: '4px',
                        background: 'var(--Gray-Gray-100, #F5F5F5)'
                    }}
                    onChange={handleChange}
                    type="text"
                    name="servicecontent"
                    id="servicecontent"
                    value={values.servicecontent}
                />
            </div>

            <div
                style={{
                    display: 'flex',
                    width: 'fit-content',
                    height: '48px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20px',
                    alignSelf: 'stretch'
                }}
            >
                <Typography
                    sx={{
                        color: 'var(--Gray-Gray-900, #222)',
                        fontFamily: 'Pretendard',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineJeight: '24px'
                    }}
                >
                    서비스 유형
                </Typography>
                <Typography
                    sx={{
                        color: 'var(--Main-Red-Red-500, #EF2B2A)',
                        fontFamily: 'Pretendard',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '24px'
                    }}
                >
                    *
                </Typography>
                <input
                    style={{
                        display: 'flex',
                        width: '890px',
                        marginLeft: '10px',
                        height: '48px',
                        padding: '16px 20px',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flex: '1 0 0',
                        borderRadius: '4px',
                        background: 'var(--Gray-Gray-100, #F5F5F5)'
                    }}
                    onChange={handleChange}
                    type="text"
                    name="servicetype"
                    id="servicetype"
                    value={values.servicetype}
                />
            </div>

            <div
                style={{
                    display: 'flex',
                    width: 'fit-content',
                    height: '48px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20px',
                    alignSelf: 'stretch'
                }}
            >
                <Typography
                    sx={{
                        color: 'var(--Gray-Gray-900, #222)',
                        fontFamily: 'Pretendard',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineJeight: '24px'
                    }}
                >
                    예상소요시간
                </Typography>
                <Typography
                    sx={{
                        color: 'var(--Main-Red-Red-500, #EF2B2A)',
                        fontFamily: 'Pretendard',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '24px'
                    }}
                >
                    *
                </Typography>
                <input
                    style={{
                        display: 'flex',
                        width: '340px',
                        height: '48px',
                        padding: '16px 20px',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flex: '1 0 0',
                        borderRadius: '4px',
                        background: 'var(--Gray-Gray-100, #F5F5F5)'
                    }}
                    onChange={handleChange}
                    type="text"
                    name="pridicttime"
                    id="pridicttime"
                    value={values.pridicttime}
                />

                <Typography
                    sx={{
                        color: 'var(--Gray-Gray-900, #222)',
                        fontFamily: 'Pretendard',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineJeight: '24px'
                    }}
                >
                    중요도
                </Typography>
                <Typography
                    sx={{
                        color: 'var(--Main-Red-Red-500, #EF2B2A)',
                        fontFamily: 'Pretendard',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '24px'
                    }}
                >
                    *
                </Typography>
                <div
                    style={{
                        display: 'flex',
                        height: '48px',
                        alignItems: 'center',
                        gap: '20px',
                        flex: '1 0 0'
                    }}
                >
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="priority"
                    >
                        <FormControlLabel value="toprange" control={<Radio />} label="상" />
                        <FormControlLabel value="midrange" control={<Radio />} label="중" />
                        <FormControlLabel value="rowrange" control={<Radio />} label="하" />
                    </RadioGroup>
                </div>
            </div>

            <div
                style={{
                    display: 'flex',
                    width: '750px',
                    height: '48px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20px'
                }}
            >
                <Typography
                    sx={{
                        color: 'var(--Gray-Gray-900, #222)',
                        fontFamily: 'Pretendard',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineJeight: '24px'
                    }}
                >
                    서비스희망일
                </Typography>
                <Typography
                    sx={{
                        color: 'var(--Main-Red-Red-500, #EF2B2A)',
                        fontFamily: 'Pretendard',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '24px'
                    }}
                >
                    *
                </Typography>
                <input
                    style={{
                        display: 'flex',
                        width: '340px',
                        height: '48px',
                        padding: '16px 20px',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flex: '1 0 0',
                        borderRadius: '4px',
                        background: 'var(--Gray-Gray-100, #F5F5F5)'
                    }}
                    onChange={handleChange}
                    type="text"
                    name="servicehopedate"
                    id="servicehopedate"
                />
            </div>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20px',
                    alignSelf: 'stretch'
                }}
            >
                <Typography
                    sx={{
                        color: 'var(--Gray-Gray-900, #222)',
                        fontFamily: 'Pretendard',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineJeight: '24px'
                    }}
                >
                    비고
                </Typography>

                <TextField
                    sx={{
                        display: 'flex',
                        marginLeft: '90px',
                        padding: '0px',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '4px',
                        flex: '1 0 0'
                    }}
                    inputProps={{
                        style: {
                            width: '870PX',
                            height: '209px',
                            borderRadius: '4px',
                            background: 'var(--Gray-Gray-100, #F5F5F5)'
                        }
                    }}
                    multiline
                    id="bigo"
                    name="bigo"
                    // label="비고"
                    value={values.bigo}
                    onChange={handleChange}
                />
            </div>

            <div
                style={{
                    display: 'flex',
                    height: '1px',
                    justifyContent: 'left',
                    alignItems: 'left',
                    alignSelf: 'stretch'
                }}
            >
                <Divider
                    sx={{
                        width: '1160px',
                        backgroundColor: 'background: var(--Gray-Gray-300, #E0E0E0)',
                        height: '2px',
                        marginLeft: '0px'
                    }}
                >
                    {' '}
                </Divider>
            </div>

            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    alignSelf: 'stretch'
                }}
            >
                <Typography
                    sx={{
                        color: 'var(--Gray-Gray-900, #222)',
                        fontFamily: 'Pretendard',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '24px'
                    }}
                >
                    첨부파일
                </Typography>

                <div
                    style={{
                        marginLeft: '50px',
                        display: 'flex',
                        width: '228px',
                        height: '160px',
                        padding: '20px',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '8px',
                        borderRadius: '4px',
                        border: '1.5px dashed var(--Gray-Gray-300, #E0E0E0)',
                        background: 'var(--Gray-Gray-50, #FAFAFA)'
                    }}
                >
                    <img src={group} width="40px" height="40px" />
                </div>
            </div>
        </React.Fragment>
    );
}
export default ServiceRequestStep1;
