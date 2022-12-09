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
    width: 21.3125rem;
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

    width: 23.875rem;
    height: 18.3125rem;

    border: 0.0625rem solid transparent;
    border-radius: 0.9375rem;

    background-color: white;

    & > p {
        margin-top: 1.115rem;
        ${({ theme }) => theme.fonts.kotrahopeText}
    }
`
const StButtonWrapper=styled.footer`
    display:flex;
    justify-content: space-between;
    
    width:18.625rem;
    margin-top: 3.8931rem;
`