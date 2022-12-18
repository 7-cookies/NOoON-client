import { DongsanName, DongSanNameModal, DongSanSelect} from '../step';

const StepRenderer = ({ step, setStep }) => {

    switch (step) {
        case 'DONSAN-NAMING':
            return <DongsanName setStep={setStep} />;
        case 'DONSAN-NAMING-MODAL':
            return <DongSanNameModal setStep={setStep} />;
        case 'DONGSAN-SELECTING':
            return <DongSanSelect />;
        default:
            return <DongSanSelect setStep={setStep} />;
        }
};

export default StepRenderer;

