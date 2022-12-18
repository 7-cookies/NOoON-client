import VisitorDongsan from "./VisitorDongsan";
import DressUp from "../../pages/dressUp/DressUp";
import MessageModal from "../message/MessageModal";
import { Landing } from "../login";

const VisitorStepRenderer = ({ step, setStep }) => {

    switch (step) {
        case 'VISITOR-DONGSAN':
            return <VisitorDongsan setStep={setStep} />;
        case 'VISITOR-DRESSUP':
            return <DressUp setStep={setStep} />;
        default:
            return <VisitorDongsan setStep={setStep} />;
        }
};

export default VisitorStepRenderer;

