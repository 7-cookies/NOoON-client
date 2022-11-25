import { DongsanName, DongSanNameModal, DongSanSelect} from './';

const StepRenderer = ({ step, setStep }) => {
    switch (step) {
        case 'DONSAN-NAMING':
            return <DongsanName setStep={setStep} />;
        case 'DONSAN-NAMING-MODAL':
            return <DongSanNameModal setStep={setStep} />;
        case 'DONGSAN-SELECTING':
            return <DongSanSelect setStep={setStep} />;
        default:
            return <DongsanName setStep={setStep} />;
        }
};

export default StepRenderer;

