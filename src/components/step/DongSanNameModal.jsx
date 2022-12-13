import styled from "styled-components";
import { Input, ShortButton } from "../../styles/globalStyle";
import DongsanName from "./DongsanName";
import {useRecoilValue, } from 'recoil';
import {dongsanstep} from '../../utils/atoms';

const DongSanNameModal = ({ setStep }) => {
    const dongsan=useRecoilValue(dongsanstep);

    const handleNextClick=()=>{
        setStep('DONSAN-SELECTING');
        // navigate(-1);
    }

    const handlePrevClick=()=>{
        setStep('DONSAN-NAMING');
    }

    return (
        <>
        <StModalBackgroundWrapper>
            <StModalWrapper>
                <StModal>
                    <StInput defaultValue={dongsan.name} />
                    <p>(으)로 동산을 만드시겠습니까?</p>
                    <StButtonWrapper>
                        <ShortButton button="submit" onClick={handleNextClick}>확인</ShortButton>
                        <ShortButton button="submit" onClick={handlePrevClick}>취소</ShortButton>   
                    </StButtonWrapper>
                </StModal>
            </StModalWrapper>
        </StModalBackgroundWrapper>

        <DongsanName />
        </>
    );
};

export default DongSanNameModal;

const StInput = styled(Input)`
    width: 341px;
`
const StModalBackgroundWrapper = styled.section`
    position: absolute;
    z-index: 2;
`
const StModalWrapper=styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 26.875rem;
    height: 58.25rem;
    background: rgba(85, 85, 85, 0.25);
`
const StModal=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 382px;
    height: 293px;

    border: 1px solid transparent;
    border-radius: 15px;

    background-color: white;
    box-shadow: 0px 4px 4px rgba(130, 130, 130, 0.25);

    & > p {
        margin-top: 17.84px;
        ${({ theme }) => theme.fonts.kotrahopeText}
    }
`
const StButtonWrapper=styled.footer`
    display:flex;
    justify-content: space-between;
    
    width:298px;
    margin-top: 62.29px;
`