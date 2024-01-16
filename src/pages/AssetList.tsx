import { Container, Stack, Typography, Grid, Button , TextField, MenuItem } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Page from 'src/components/Page';
import activeicon from 'src/assets/images/icons/notifications_active.png';
import add from 'src/assets/images/icons/add.png';

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
                
                {/* <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '20px',
                      alignSelf: 'stretch'
                }}
                 > */}
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
                            height:'24px',
                            display: flex;
                            padding: 8px 12px;
                            align-items: center;
                            gap: 10px;
                            flex: 1 0 0;
                                                        border-radius: 4px;
                            border: 1px solid var(--Gray-Gray-300, #E0E0E0);
                            background: var(--White, #FFF);
                        }
                    }}
                ></TextField>
              </Stack>
             {/* </div> */}

            </div>
            </>   
        );
}

export default AssetList;
