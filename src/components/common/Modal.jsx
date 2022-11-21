import styled from "styled-components";

const Modal = () => {
    return (
        <StModalWrapper>
            <StModal>
                
            </StModal>
        </StModalWrapper>
    );
};

export default Modal;

const StModalWrapper=styled.section`
    background: rgba(85, 85, 85, 0.25);
`
const StModal=styled.div`
    width: 23.875rem;
    padding: 3.25rem;
`