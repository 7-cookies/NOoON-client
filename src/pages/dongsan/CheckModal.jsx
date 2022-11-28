import styled from "styled-components";
import { ShortButton } from "../../styles/globalStyle";

const CheckModal = (props) => {
  return (
    <>
      <ChModalWrapper>
        <ChModal>
          <ChHeader>
            <h1>From. {props.title}</h1>
          </ChHeader>
          <p>
            친구가 남긴 메시지는
            <br />
            12월 25일에 확인 가능합니다.
          </p>
          <ShortButton>확인</ShortButton>
        </ChModal>
      </ChModalWrapper>
    </>
  );
};

export default CheckModal;

const ChModalWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  z-index: 2;

  width: 26.875rem;
  height: 58.25rem;
  background: rgba(85, 85, 85, 0.25);
`;

const ChModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 382px;
  height: 272px;

  border: 1px solid transparent;
  border-radius: 15px;

  background-color: white;

  & > p {
    margin-top: 17.84px;
    ${({ theme }) => theme.fonts.kotrahopeText}
  }
`;

const ChHeader = styled.section`
  width: 320px;
  height: 66px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};

  & > h1 {
    font-size: 1.5rem;
    ${({ theme }) => theme.fonts.kotrahopeText}
  }
`;