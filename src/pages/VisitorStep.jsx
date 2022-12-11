import { useState } from 'react';
import VisitorStepRenderer from '../components/visitor/VisitorStepRenderer';

const VisitorStep = () => {
  // type step= 'VISITOR-DONGSAN' | 'VISITOR-DRESSUP'
  const [step, setStep] = useState('VISITOR-DONGSAN');
  
    return (
      <>
        <VisitorStepRenderer step={step} setStep={setStep}/>
      </>

    );
};

export default VisitorStep;


