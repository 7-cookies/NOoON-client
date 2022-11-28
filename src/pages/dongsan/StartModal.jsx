import React from "react";
import styled from "styled-components";
import { ShortButton } from "../../styles/globalStyle";

const StartModal = () => {
  return (
    <StModalWrapper>
      <StModal>
        <p>
          친구들에게 공유해 내 동산을 꾸며보세요!
          <br />
          친구들이 남긴 메시지는
          <br />
          12월 25일 확인 가능합니다.
        </p>
        <StButtonWrapper>
          <ShortButton button="submit">시작하기</ShortButton>
        </StButtonWrapper>
      </StModal>
    </StModalWrapper>
  );
};

export default StartModal;

const StModalWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  z-index: 2;

  width: 26.875rem;
  height: 58.25rem;
  background: rgba(85, 85, 85, 0.25);
`;
const StModal = styled.div`
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
const StButtonWrapper = styled.footer`
  display: flex;
  justify-content: center;

  width: 298px;
  margin-top: 62.29px;
`;