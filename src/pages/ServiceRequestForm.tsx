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
import ServiceRequestStep1 from './ServiceRequestStep1'
import ServiceRequestStep2 from './ServiceRequestStep2'
import ServiceRequestStep3 from './ServiceRequestStep3'
import ServiceRequestStep4 from './ServiceRequestStep4'
import ServiceRequestStep5 from './ServiceRequestStep5'

type RequestFormProps = {
    step: number;
  }

function ServiceRequestForm({ step }: RequestFormProps) {
    const [values, setValues] = React.useState({
        servicename: '',
        servicecontent: '',
        servicetype: '',
        pridicttime: '',
        priority: '',
        servicehopedate: '',
        bigo: '',
        branch:'',
        contract:'',
        asset:'',
        requester:'',
    });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setValues({ ...values, [event.target.name]: event.target.value });
            // setValues((event.target as HTMLInputElement).value);
        // console.log(values[event.target.name]);
    };

    return (
        <React.Fragment>

            {step===1 && <ServiceRequestStep1 values={values} handleChange={handleChange} /> }
            {step===2 && <ServiceRequestStep2 values={values} handleChange={handleChange} /> }
            {step===3 && <ServiceRequestStep3 values={values} handleChange={handleChange} /> }
            {step===4 && <ServiceRequestStep4 values={values} handleChange={handleChange} /> }
            {step===5 && <ServiceRequestStep5 values={values} handleChange={handleChange} /> }
            
        </React.Fragment>
    );
}
export default ServiceRequestForm;
