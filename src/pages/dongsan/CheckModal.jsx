import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";

import { checkmodalState } from "../../utils/atoms";

import { ShortButton } from "../../styles/globalStyle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckModal = (props) => {
  // const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const [ckmodalClicked, setckmodalClicked] = useRecoilState(checkmodalState);
  const ckmodal = useRecoilValue(checkmodalState);

  function deleteModal() {
    setckmodalClicked(!ckmodalClicked);
  }

  return (
    <>
      {ckmodal ? (
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
            <ShortButton button="submit" onClick={deleteModal}>
              확인
            </ShortButton>
          </ChModal>
        </ChModalWrapper>
      ) : (
        <></>
      )}
    </>
  );
};

export default CheckModal;

const ChModalWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 7;
  width: 26.875rem;
  height: 58.25rem;
  background: rgba(85, 85, 85, 0.25);
`;

const ChModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 23.875rem;
  height: 17rem;

  border: 0.0625rem solid transparent;
  border-radius: 0.9375rem;

  padding-bottom: 0.625rem;
  background-color: white;

  box-shadow: 0rem 0.25rem 0.25rem rgba(130, 130, 130, 0.25);

  & > p {
    margin-top: 1.115rem;
    ${({ theme }) => theme.fonts.kotrahopeText}
  }
`;

const ChHeader = styled.section`
  width: 20rem;
  height: 3.125rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border-bottom: 0.0625rem solid ${({ theme }) => theme.colors.grey};

  & > h1 {
    font-size: 1.5rem;
    ${({ theme }) => theme.fonts.kotrahopeText}
  }
`;