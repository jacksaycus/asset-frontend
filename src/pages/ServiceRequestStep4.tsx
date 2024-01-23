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
    MenuItem
} from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
// import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {Service} from 'src/types'

const asset = [
    {
        value: '',
        label: '',
      },
    {
      value: 'asset1',
      label: '자산1',
    },
    {
      value: 'asset2',
      label: '자산2',
      },
      {
        value: 'asset3',
        label: '자산3',
      }
];

type RequestFormProps = {
    values: any;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    formState: Service;
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

function ServiceRequestStep2({ values, handleChange, formState }: RequestFormProps) {
    
    // const [assetName, setAssetName] = React.useState<string[]>([]);
    //const handleChange1 = (event: SelectChangeEvent<typeof assetName>) => {
        // const {
        //   target: { value },
        // } = event;
        // setAssetName(
        //   typeof value === 'string' ? value.split(',') : value,
        // );
      //};

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
                <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap"
                   sx={{
                    marginTop:'32px'
                   }}
                >
                <Typography
                    sx={{
                        color: 'var(--Gray-Gray-900, #222)',
                        fontFamily: 'Pretendard',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '24px',
                        width:'33px'
                    }}
                >
                    자산
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
                    <Typography
                        sx={{
                            color: 'var(--Gray-Gray-900, #222)',
                            fontFamily: 'Pretendard',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '24px',
                            width:'100px'
                        }}
                    >
                        (다중선택가능)
                    </Typography>
                </Stack>

                <Select
                fullWidth
                    name="asset"
                    id="asset"
                    value={values.asset}
                    variant="standard"
                    sx={{
                        '.MuiInputBase-input': {
                            display: 'flex',
                            height:'28px',
                            width:'760px',
                            padding: '16px 20px',
                            justifyContent: 'space-between',
                            alignitems: 'center',
                            flex: '1 0 0',
                            paddingLeft: '20px'

                            ,background : formState.asset === "required" ?'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : 'var(--Gray-Gray-100, #F5F5F5)', 
                            marginBottom: formState.asset === "required" ?'20px' : '',    
                            borderWidth: formState.asset === "required" ? '1px 1px 1px 10px': '' ,
                            borderStyle: formState.asset === "required" ? 'solid' : '',
                            borderColor: formState.asset === "required" ? 'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',
                            borderImage: formState.asset === "required" ? 'initial' : '',
                        }
                    }}
                    multiple
                    onChange={handleChange}
                    // input={<OutlinedInput label="자산" />}
                    MenuProps={MenuProps}
                    >
                    {asset.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                    ))}
                </Select>

                {/* <TextField
                    fullWidth
                    name="asset"
                    value={values.asset}
                    variant="standard"
                    select
                    multiple
                    InputProps={{disableUnderline:true}}
                    sx={{
                        '.MuiInputBase-input': {
                            display: 'flex',
                            height:'28px',
                            width:'760px',
                            padding: '16px 20px',
                            justifyContent: 'space-between',
                            alignitems: 'center',
                            flex: '1 0 0',
                            paddingLeft: '20px'

                            ,background : formState.asset === "required" ?'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : 'var(--Gray-Gray-100, #F5F5F5)', 
                            marginBottom: formState.asset === "required" ?'20px' : '',    
                            borderWidth: formState.asset === "required" ? '1px 1px 1px 10px': '' ,
                            borderStyle: formState.asset === "required" ? 'solid' : '',
                            borderColor: formState.asset === "required" ? 'rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144)' : '',
                            borderImage: formState.asset === "required" ? 'initial' : '',
                        }
                    }}
                    onChange={handleChange}
                > */}
                    {/* {asset.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField> */}
            </div>
        </React.Fragment>
    );
}
export default ServiceRequestStep2;
