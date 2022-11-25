import { useState } from 'react';
import StepRenderer from '../components/login/StepRenderer';

const DongSanStart = () => {
  // type step= 'DONSAN-NAMING' | 'DONSAN-NAMING-MODAL' | 'SDONGSAN-SELECTING'
  const [step, setStep] = useState('DONSAN-NAMING');
  
    return (
      <>
        <StepRenderer step={step} setStep={setStep} />
      </>

    );
};

export default DongSanStart;


