import { useState } from 'react';
import VisitorStepRenderer from '../components/visitor/VisitorStepRenderer';

const VisitorStep = ({match}) => {
  // type step= 'VISITOR-DONGSAN' | 'VISITOR-DRESSUP'
  const [step, setStep] = useState('VISITOR-DONGSAN');
  
    return (
      <>
        <VisitorStepRenderer step={step} setStep={setStep} match={match}/>
      </>

    );
};

export default VisitorStep;


