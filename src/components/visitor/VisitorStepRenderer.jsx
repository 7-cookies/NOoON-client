import VisitorDongsan from "./VisitorDongsan";
import DressUp from "../../pages/dressUp/DressUp";
import MessageModal from "../message/MessageModal";


const StepRenderer = ({ step, setStep }) => {
    console.log(step);

    switch (step) {
        case 'VISITOR-DONGSAN':
            return <VisitorDongsan setStep={setStep} />;
        case 'VISITOR-DRESSUP':
            return <DressUp setStep={setStep} />;
        case 'VISITOR-MESSAGE':
            return <MessageModal />;
        default:
            return <MessageModal setStep={setStep} />;
        }
};

export default StepRenderer;

