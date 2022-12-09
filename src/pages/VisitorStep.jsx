import { useState } from 'react';
import StepRenderer from '../components/step/StepRenderer';

const DongSanStep = () => {
  // type step= 'VISITOR-DONGSAN' | 'VISITOR-DRESSUP' | 'VISITOR-MESSAGE'
  const [step, setStep] = useState('DONSAN-NAMING');
  
    return (
      <>
        <StepRenderer step={step} setStep={setStep} />
      </>

    );
};

export default DongSanStep;


