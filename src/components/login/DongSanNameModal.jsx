import styled from "styled-components";
import { Input, ShortButton } from "../../styles/globalStyle";

const DongSanNameModal = () => {
    return (
        <StModalWrapper>
            <StModal>
                <StInput defaultValue="눈 펑펑 오는 눈동산" />
                <p>(으)로 동산을 만드시겠습니까?</p>
                <StButtonWrapper>
                    <ShortButton button="submit">확인</ShortButton>
                    <ShortButton button="submit">취소</ShortButton>   
                </StButtonWrapper>
            </StModal>
        </StModalWrapper>
    );
};

export default DongSanNameModal;

const StInput = styled(Input)`
    width: 341px;
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