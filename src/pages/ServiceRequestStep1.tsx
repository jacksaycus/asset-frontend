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
import {Service} from 'src/types'
import './page.css'
import { FileUploader } from "react-drag-drop-files";
import * as _ from "lodash";

type RequestFormProps = {
    values: Service;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    formState: Service;
    handleFileChange: (e:any) => void;
}
const temp = []
function ServiceRequestStep1({ values, handleChange, formState, handleFileChange }: RequestFormProps) {
      
    const [file, setFile] = React.useState<Array<File> | null>([]);
    const [tempList, setTempList] = React.useState([]);
    const [noop, setNoop] = React.useState(null);

    const handleChange1 =  (file1:File) => {
        for(let i=0;i<file1.length;i++){
            console.log(file1[i]);
            temp.push(file1[i])
        }
        console.log(temp)
        setNoop(listItems(temp))
        setTempList(temp)
        handleFileChange(temp)
        console.log('changes',tempList);
    }

    const listItems = (list) => {
        let tmp=[];
        let i=0;
          _.forEach(list, function(value) {
        tmp.push(<li key={i} style={{fontSize:'80%'}}>{value.name}</li>)
        ++i;
      })
      console.log(tmp);
      return tmp;
    }



    return (
        <React.Fragment>
            <form  autoComplete="off" noValidate >
            <div
                style={{
                    display: 'flex',
                    width: 'fit-content',
                    height: '48px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20px',
                    alignSelf: 'stretch',
                    padding: '28px'
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
                <TextField
                    fullWidth
                    variant='standard'
                    InputProps={{disableUnderline:true}}
                    style={{
                        display: 'flex',
                        width: '890px',
                        height: '48px',
                        // padding: '16px 20px',
                        marginLeft: '29px',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flex: '1 0 0',
                        // borderRadius: '4px',
                        // background: 'var(--Gray-Gray-100, #F5F5F5)',
                        background : formState.servicename === "required" ?'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : 'var(--Gray-Gray-100, #F5F5F5)',    
                        marginBottom: formState.servicename === "required" ?'20px' : '',    
                        borderWidth: formState.servicename === "required" ? '1px 1px 1px 10px': '' ,
                        borderStyle: formState.servicename ===  "required" ? 'solid' : '',
                        borderColor: formState.servicename ===  "required" ? 'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',
                        borderImage: formState.servicename ===  "required" ? 'initial' : '',
                    }}
                    onChange={handleChange}
                    type="text"
                    name="servicename"
                    id="servicename"
                    value={values.servicename}
                />
            </div>
            {/* {formState.errors.servicename?.type === "required" && <span>서비스명을 입력하세요</span>} */}
            <div
                style={{
                    display: 'flex',
                    width: 'fit-content',
                    height: '48px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20px',
                    alignSelf: 'stretch',
                    padding: '28px'
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
                <TextField
                    fullWidth
                    variant="standard"
                    InputProps={{disableUnderline:true}}
                       style={{
                        display: 'flex',
                        marginLeft: '14px',
                        width: '890px',
                        height: '48px',
                        // padding: '16px 20px',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flex: '1 0 0',
                        borderRadius: '4px',
                        // background: 'var(--Gray-Gray-100, #F5F5F5)',

                        background : formState.servicecontent ===  "required" ?'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : 'var(--Gray-Gray-100, #F5F5F5)',    
                        marginBottom: formState.servicecontent === "required" ?'20px' : '',    
                        borderWidth: formState.servicecontent ===  "required" ? '1px 1px 1px 10px': '' ,
                        borderStyle: formState.servicecontent ===  "required" ? 'solid' : '',
                        borderColor: formState.servicecontent ===  "required" ? 'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',
                        borderImage: formState.servicecontent ===  "required" ? 'initial' : '',
                    }}
                    onChange={handleChange}
                    type="text"
                    name="servicecontent"
                    id="servicecontent"
                    value={values.servicecontent}
                />
            </div>
            {/* {formState.errors.servicecontent?.type === "required" && <span>서비스내용을 입력하세요</span>}         */}
            <div
                style={{
                    display: 'flex',
                    width: 'fit-content',
                    height: '48px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20px',
                    alignSelf: 'stretch',
                    padding: '28px'
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
                <TextField
                    fullWidth
                    variant="standard"
                    InputProps={{disableUnderline:true}}
                    
                    style={{
                        display: 'flex',
                        width: '890px',
                        marginLeft: '10px',
                        height: '48px',
                        // padding: '16px 20px',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flex: '1 0 0',
                        borderRadius: '4px',
                        // background: 'var(--Gray-Gray-100, #F5F5F5)'

                        background : formState.servicetype ===  "required" ?'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : 'var(--Gray-Gray-100, #F5F5F5)',    
                        marginBottom: formState.servicetype ===  "required" ?'20px' : '',    
                        borderWidth: formState.servicetype ===  "required" ? '1px 1px 1px 10px': '' ,
                        borderStyle: formState.servicetype ===  "required" ? 'solid' : '',
                        borderColor: formState.servicetype ===  "required" ? 'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',
                        borderImage: formState.servicetype ===  "required" ? 'initial' : '',
                    }}
                    onChange={handleChange}
                    type="text"
                    name="servicetype"
                    id="servicetype"
                    value={values.servicetype}
                />
            </div>
            {/* {formState.errors.servicetype?.type === "required" && <span>서비스유형을 입력하세요</span>}        */}
            <div
                style={{
                    display: 'flex',
                    width: 'fit-content',
                    height: '48px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20px',
                    alignSelf: 'stretch',
                    padding: '28px'
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
                <TextField
                    fullWidth
                    variant="standard"
                    InputProps={{disableUnderline:true}}
                    
                    style={{
                        display: 'flex',
                        width: '340px',
                        height: '48px',
                        // padding: '16px 20px',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flex: '1 0 0',
                        borderRadius: '4px',
                        // background: 'var(--Gray-Gray-100, #F5F5F5)'

                        background : formState.pridicttime ===  "required" ?'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : 'var(--Gray-Gray-100, #F5F5F5)',    
                        marginBottom: formState.pridicttime ===  "required" ?'20px' : '',    
                        borderWidth: formState.pridicttime ===  "required" ? '1px 1px 1px 10px': '' ,
                        borderStyle: formState.pridicttime ===  "required" ? 'solid' : '',
                        borderColor: formState.pridicttime ===  "required" ? 'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',
                        borderImage: formState.pridicttime ===  "required" ? 'initial' : '',

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
                        // display: 'flex',
                        // height: '48px',
                        // alignItems: 'center',
                        // gap: '20px',
                        // flex: '1 0 0'
                    }}
                >
                    
                    <RadioGroup
                        row
                        
                        name="priority"
                        value={values.priority}
                        onChange={handleChange}
                        sx={{
                        background : formState.priority ===  "required" ?'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : 'var(--Gray-Gray-100, #F5F5F5)',    
                        marginBottom: formState.priority ===  "required" ?'20px' : '',    
                        borderWidth: formState.priority ===  "required" ? '1px 1px 1px 10px': '' ,
                        borderStyle: formState.priority ===  "required" ? 'solid' : '',
                        borderColor: formState.priority ===  "required" ? 'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',
                        borderImage: formState.priority ===  "required" ? 'initial' : '',
                        }}
                    >
                        <FormControlLabel value="toprange" control={<Radio />} label="상" />
                        <FormControlLabel value="midrange" control={<Radio />} label="중" />
                        <FormControlLabel value="rowrange" control={<Radio />} label="하" />
                    </RadioGroup>
                    
                </div>
            </div>
            {/* {formState.errors.pridicttime?.type === "required" && <span>예상소요시간을 입력하세요</span>}
            {formState.errors.priority?.type === "required" && <span>중요도를 입력하세요</span>} */}
            <div
                style={{
                    display: 'flex',
                    width: '750px',
                    height: '48px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20px',
                    padding: '28px'
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
                <TextField
                variant="standard"
                fullWidth
                InputProps={{disableUnderline:true}}
                
                    style={{
                        display: 'flex',
                        width: '340px',
                        height: '48px',
                        padding: '16px 20px',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flex: '1 0 0',
                        borderRadius: '4px',
                        // background: 'var(--Gray-Gray-100, #F5F5F5)'

                        background : formState.servicehopedate ===  "required" ?'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : 'var(--Gray-Gray-100, #F5F5F5)',    
                        marginBottom: formState.servicehopedate ===  "required" ?'20px' : '',    
                        borderWidth: formState.servicehopedate ===  "required" ? '1px 1px 1px 10px': '' ,
                        borderStyle: formState.servicehopedate ===  "required" ? 'solid' : '',
                        borderColor: formState.servicehopedate ===  "required" ? 'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',
                        borderImage: formState.servicehopedate ===  "required" ? 'initial' : '',
                    }}
                    onChange={handleChange}
                    type="text"
                    name="servicehopedate"
                    id="servicehopedate"
                    
                />
            </div>
            {/* {formState.errors.servicehopedate?.type === "required" && <span>서비스희망일을 입력하세요</span>}         */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20px',
                    alignSelf: 'stretch',
                    padding: '28px'
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
                variant="standard"
                fullWidth
                InputProps={{disableUnderline:true}}
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
                    alignSelf: 'stretch',
                    padding: '28px'
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
                    alignSelf: 'stretch',
                    padding: '28px'
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
                <FileUploader
                    handleChange={handleChange1}
                    name="file"
                    multiple={true}
                    // types={fileTypes}
                > 
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
                    {/* <input id="files" name="files" type="file" onChange={handleFileChange} multiple hidden /> */}
                    <label htmlFor='files' style={{cursor: 'pointer'}}>
                    <img src={group} width="40px" height="40px" />
                    </label>
                    {/* {file && file.name} */}
                    {listItems(tempList)}
                </div>
                </ FileUploader>  
            </div>
            </form>
        </React.Fragment>
    );
}
export default ServiceRequestStep1;
