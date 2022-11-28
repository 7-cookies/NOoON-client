import styled from "styled-components";
import DongsanName from "./DongsanName";
import messageCard from '../../asset/img/messageCard.png';
import xButton from '../../asset/icon/Group 130.svg';

const MessageModal = ({ setStep }) => {


    return (
        <>
        <StModalBackgroundWrapper>
            <StModalWrapper>
                <StModal>
                    <img src={messageCard} alt="#" />
                    <img src={xButton} alt="#" />
                </StModal>
            </StModalWrapper>
        </StModalBackgroundWrapper>

        <DongsanName />
        </>
    );
};

export default MessageModal;

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