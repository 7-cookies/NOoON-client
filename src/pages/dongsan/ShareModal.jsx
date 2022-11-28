import styled from "styled-components";
import { ShortButton } from "../../styles/globalStyle";

import close from "../../asset/icon/close.svg";
import kakao from "../../asset/icon/kakao.svg";

const ShareModal = () => {
  return (
    <>
      <SrModalWrapper>
        <SrModal>
          <SrHeader>
            <Icon src={close} alt="#" />
            <h1>카카오톡 공유하기</h1>
          </SrHeader>

          <p>카카오톡 공유</p>
          <Icon src={kakao} alt="#" />
          <p>링크 복사</p>
          <StButtonWrapper>
            <ShortButton button="submit">시작하기</ShortButton>
          </StButtonWrapper>
        </SrModal>
      </SrModalWrapper>
    </>
  );
};

export default ShareModal;

const Icon = styled.img`
  position: absolute;
  z-index: 2;
`;

const SrModalWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  z-index: 2;

  width: 26.875rem;
  height: 58.25rem;
  background: rgba(85, 85, 85, 0.25);
`;

const SrModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 382px;
  height: 323px;

  border: 1px solid transparent;
  border-radius: 15px;

  background-color: white;

  & > p {
    margin-top: 17.84px;
    ${({ theme }) => theme.fonts.kotrahopeText}
  }
`;

const SrHeader = styled.section`
  width: 23.875rem;
  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};

  & > h1 {
    font-size: 1.5rem;
    ${({ theme }) => theme.fonts.kotrahopeText}
  }
`;

const StButtonWrapper = styled.footer`
  display: flex;
  justify-content: center;

  width: 298px;
  margin-top: 62.29px;
`;
