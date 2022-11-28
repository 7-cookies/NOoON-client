import styled from "styled-components";
import messageCard from '../../asset/img/messageCard.png';
import xButton from '../../asset/icon/Group 130.svg';
import { useNavigate } from 'react-router-dom';

const MessageModal = ({ setStep }) => {
    const nagivate=useNavigate()
    const handleXClick=()=>{
        nagivate(-1);
    }

    return (
        <>
        <StModalBackgroundWrapper>
            <StModalWrapper>
                <StModal>
                    <StCard src={messageCard} alt="#" />
                    <StContentWrapper>
                        <StTitle>
                           <div><p>From. 멋쟁이 사자</p>
                            <StXButton src={xButton} alt="#" onClick={handleXClick} /> 
                            </div>
                        </StTitle>
                        
                        <div>안녕! 나는 멋쟁이 사자야~ 아기사자에서 우유 먹고 쑥쑥 자라서 어른사자가 되었지! 너도 어른사자가 될 준비가 되었니?우리 함께 헤쳐나가보자!😎나는 우리팀이 잘할거라 믿어!</div>
                    </StContentWrapper>
                </StModal>
            </StModalWrapper>
        </StModalBackgroundWrapper>
        </>
    );
};

export default MessageModal;

const StCard = styled.img`
    width: 382px;
`

const StContentWrapper=styled.div`
    display: flex;
    flex-direction: column;

    position: absolute;
    z-index: 3;

    & > div:nth-child(2){
        width: 320px;
        height: 375px;

        ${({ theme }) => theme.fonts.kotrahopeMessage}
        color: white;
    }
`
const StXButton = styled.img`
    margin: 0 0 0 10px;
`
const StTitle = styled.div`
    display: flex;
    justify-content: center;

    & > div {
        width: 320px;
        height: 74px;

        border-bottom: 1px solid white;
        ${({ theme }) => theme.fonts.kotrahopeMessage}
        color: white;

        & > p{
            width: 150px;
            margin: 36px 120px 15px 12px;
        }
    }
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