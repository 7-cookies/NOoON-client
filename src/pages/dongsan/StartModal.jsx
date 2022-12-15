import React from "react";
import styled from "styled-components";
import { useState } from "react";

import { ShortButton } from "../../styles/globalStyle";

const StartModal = () => {
  const [visible, setVisible] = useState(true);

  function deleteModal() {
    // console.log("clicked");
    setVisible(false);
  }
  return (
    <>
      {visible ? (
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
              <ShortButton button="submit" onClick={deleteModal}>
                시작하기
              </ShortButton>
            </StButtonWrapper>
          </StModal>
        </StModalWrapper>
      ) : (
        <></>
      )}
    </>
  );
};

export default StartModal;

const StModalWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  z-index: 3;

  width: 26.875rem;
  height: 58.25rem;
  background: rgba(85, 85, 85, 0.25);
`;
const StModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 23.875rem;
  height: 17rem;

  border: 0.0625rem solid transparent;
  border-radius: 0.9375rem;

  background-color: white;

  box-shadow: 0rem 0.25rem 0.25rem rgba(130, 130, 130, 0.25);

  & > p {
    margin-top: 1.115rem;
    ${({ theme }) => theme.fonts.kotrahopeText}
  }
`;
const StButtonWrapper = styled.footer`
  display: flex;
  justify-content: center;

  width: 18.625rem;
  margin-top: 3.8931rem;
`;
