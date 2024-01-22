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
import {Service} from 'src/types'
import ServiceRequestStep1 from './ServiceRequestStep1'
import ServiceRequestStep2 from './ServiceRequestStep2'
import ServiceRequestStep3 from './ServiceRequestStep3'
import ServiceRequestStep4 from './ServiceRequestStep4'
import ServiceRequestStep5 from './ServiceRequestStep5'

type RequestFormProps = {
    step: number;
    values: Service;
    formState: Service;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

function ServiceRequestForm({ step ,values, formState, handleChange}: RequestFormProps ) {
   

    return (
        <React.Fragment>

            {step===1 && <ServiceRequestStep1 values={values} handleChange={handleChange} formState={formState} /> }
            {step===2 && <ServiceRequestStep2 values={values} handleChange={handleChange} formState={formState}/> }
            {step===3 && <ServiceRequestStep3 values={values} handleChange={handleChange} formState={formState}/> }
            {step===4 && <ServiceRequestStep4 values={values} handleChange={handleChange} formState={formState}/> }
            {step===5 && <ServiceRequestStep5 values={values} handleChange={handleChange} formState={formState}/> }
            
        </React.Fragment>
    );
}
export default ServiceRequestForm;
