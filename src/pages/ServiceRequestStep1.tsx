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
import { useForm } from "react-hook-form"
import ServiceStepButton from './ServiceStepButton';

type RequestFormProps = {
    values: Service;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    formState: Service;
    handleFileChange: (e:any) => void;
}

function ServiceRequestStep1({formData, handleChange, handleFileChange,handleNextStep, handlePreveStep,step }) {
    const { register, handleSubmit,trigger, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        trigger().then((res) => {
            if (res) {
                handleNextStep()
            }})
    }

    const temp = []      
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
             <div
                    style={{
                        display: 'flex',
                        width: '1346px',
                        padding: '28px',
                        marginTop: '20px',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '32px',
                        borderRadius: '12px',
                        border: '1px solid var(--Gray-Gray-300, #E0E0E0)',
                        background: 'var(--White, #FFF)',
                        position:'relative',
                        left:'-60px'
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            width: '1316px',
                            marginTop: '20px',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            padding: '32px',
                            // borderRadius: '12px',
                            // border: '1px solid var(--Gray-Gray-300, #E0E0E0)',
                            background: 'var(--White, #FFF)'
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
                            서비스 요청
                        </Typography>

                        <div style={{marginBottom:'32px'}}></div>

            <form  autoComplete="off"
                            method="post"
                            noValidate
                            onSubmit={handleSubmit(onSubmit)}
                            encType="multipart/form"
            >
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
                 {...register('servicename', { required: true} )}
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
                        background : errors.servicename?.type === "required" ?'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : 'var(--Gray-Gray-100, #F5F5F5)',    
                        marginBottom: errors.servicename?.type === "required" ?'20px' : '',    
                        borderWidth: errors.servicename?.type === "required" ? '1px 1px 1px 10px': '' ,
                        borderStyle: errors.servicename?.type ===  "required" ? 'solid' : '',
                        borderColor: errors.servicename?.type ===  "required" ? 'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',
                        borderImage: errors.servicename?.type ===  "required" ? 'initial' : '',
                    }}
                    onChange={handleChange}
                    type="text"
                    name="servicename"
                    id="servicename"
                    value={formData.servicename}
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
                {...register('servicecontent', { required: true} )}
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

                        background : errors.servicecontent?.type ===  "required" ?'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : 'var(--Gray-Gray-100, #F5F5F5)',    
                        marginBottom: errors.servicecontent?.type === "required" ?'20px' : '',    
                        borderWidth: errors.servicecontent?.type ===  "required" ? '1px 1px 1px 10px': '' ,
                        borderStyle: errors.servicecontent?.type ===  "required" ? 'solid' : '',
                        borderColor: errors.servicecontent?.type ===  "required" ? 'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',
                        borderImage: errors.servicecontent?.type ===  "required" ? 'initial' : '',
                    }}
                    onChange={handleChange}
                    type="text"
                    name="servicecontent"
                    id="servicecontent"
                    value={formData.servicecontent}
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
                {...register('servicetype', { required: true} )}
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

                        background : errors.servicetype?.type ===  "required" ?'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : 'var(--Gray-Gray-100, #F5F5F5)',    
                        marginBottom: errors.servicetype?.type ===  "required" ?'20px' : '',    
                        borderWidth: errors.servicetype?.type ===  "required" ? '1px 1px 1px 10px': '' ,
                        borderStyle: errors.servicetype?.type ===  "required" ? 'solid' : '',
                        borderColor: errors.servicetype?.type ===  "required" ? 'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',
                        borderImage: errors.servicetype?.type ===  "required" ? 'initial' : '',
                    }}
                    onChange={handleChange}
                    type="text"
                    name="servicetype"
                    id="servicetype"
                    value={formData.servicetype}
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
                {...register('pridicttime', { required: true} )}
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
                        background : errors.pridicttime?.type ===  "required" ?'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : 'var(--Gray-Gray-100, #F5F5F5)',    
                        marginBottom: errors.pridicttime?.type ===  "required" ?'20px' : '',    
                        borderWidth: errors.pridicttime?.type ===  "required" ? '1px 1px 1px 10px': '' ,
                        borderStyle: errors.pridicttime?.type ===  "required" ? 'solid' : '',
                        borderColor: errors.pridicttime?.type ===  "required" ? 'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',
                        borderImage: errors.pridicttime?.type ===  "required" ? 'initial' : '',

                    }}
                    onChange={handleChange}
                    type="text"
                    name="pridicttime"
                    id="pridicttime"
                    value={formData.pridicttime}
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
                        {...register('priority', { required: true} )}
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                        sx={{
                        background : errors.priority?.type ===  "required" ?'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : 'var(--Gray-Gray-100, #F5F5F5)',    
                        marginBottom: errors.priority?.type ===  "required" ?'20px' : '',    
                        borderWidth: errors.priority?.type ===  "required" ? '1px 1px 1px 10px': '' ,
                        borderStyle: errors.priority?.type ===  "required" ? 'solid' : '',
                        borderColor: errors.priority?.type ===  "required" ? 'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',
                        borderImage: errors.priority?.type ===  "required" ? 'initial' : '',
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
                 {...register('servicehopedate', { required: true} )}
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

                        background : errors.servicehopedate?.type ===  "required" ?'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : 'var(--Gray-Gray-100, #F5F5F5)',    
                        marginBottom: errors.servicehopedate?.type ===  "required" ?'20px' : '',    
                        borderWidth: errors.servicehopedate?.type ===  "required" ? '1px 1px 1px 10px': '' ,
                        borderStyle: errors.servicehopedate?.type ===  "required" ? 'solid' : '',
                        borderColor: errors.servicehopedate?.type ===  "required" ? 'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',
                        borderImage: errors.servicehopedate?.type ===  "required" ? 'initial' : '',
                    }}
                    onChange={handleChange}
                    value={formData.servicehopedate}
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
                    value={formData.bigo}
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

            </div>
                </div>

                <ServiceStepButton onSubmit={onSubmit} handleCancelStep={handlePreveStep} step={step} />

        </React.Fragment>
    );
}
export default ServiceRequestStep1;
