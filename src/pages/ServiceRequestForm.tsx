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
    handleFileChange: (e:any) => void;
  }

function ServiceRequestForm({formData, step , handleChange, handleFileChange ,handleNextStep, handlePreveStep } ) {
   

    return (
        <React.Fragment>

            {step===1 && <ServiceRequestStep1 formData={formData} handleChange={handleChange} handleFileChange={handleFileChange} handleNextStep={handleNextStep} handlePreveStep={handlePreveStep} step={step} /> }
            {step===2 && <ServiceRequestStep2 formData={formData} handleChange={handleChange} handleNextStep={handleNextStep} handlePreveStep={handlePreveStep} step={step} /> }
            {step===3 && <ServiceRequestStep3 formData={formData} handleChange={handleChange} handleNextStep={handleNextStep} handlePreveStep={handlePreveStep} step={step} /> }
            {step===4 && <ServiceRequestStep4 formData={formData} handleChange={handleChange} handleNextStep={handleNextStep} handlePreveStep={handlePreveStep} step={step} /> }
            {step===5 && <ServiceRequestStep5 formData={formData} handleChange={handleChange} handleNextStep={handleNextStep} handlePreveStep={handlePreveStep} step={step} /> }
            
        </React.Fragment>
    );
}
export default ServiceRequestForm;
