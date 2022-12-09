import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { KakaoShare } from "../../utils/kakaoShare";

import close from "../../asset/icon/close.svg";
import kakao from "../../asset/icon/kakao.svg";
import share from "../../asset/icon/share.svg";
import { modalState } from "../../utils/atoms";

const ShareModal = (props) => {
  const navigate = useNavigate();
  // const [visible, setVisible] = useState(true);

  const [modalClicked, setmodalClicked] = useRecoilState(modalState);
  const modal = useRecoilValue(modalState);

  function deleteModal() {
    // console.log("clicked");
    // setVisible(false);
    setmodalClicked(!modalClicked);
  }

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("링크가 복사되었습니다");
    } catch (error) {
      alert("링크 복사에 실패했습니다");
    }
  };

  return (
    <>
      {modal ? (
        <SrModalWrapper>
          <SrModal>
            <SrHeader>
              <h1>공유하기</h1>
              <HeaderIcon src={close} alt="#" onClick={deleteModal} />
            </SrHeader>

            <p>카카오톡 공유</p>
            {/* <KakaoShare src={kakao} alt="#" /> */}
            <KakaoShare />
            <p>링크 복사</p>

            <SrButtonWrapper>
              <Icon src={share} alt="#" />
              <input type="text" value={"https://noonsaram.kr"} />
              <button
                type="submit"
                onClick={() => handleCopyClipBoard("https://noonsaram.kr")}
              >
                copy
              </button>
            </SrButtonWrapper>
          </SrModal>
        </SrModalWrapper>
      ) : (
        <></>
      )}
    </>
  );
};

export default ShareModal;

const HeaderIcon = styled.img`
  position: absolute;
  padding: 0 0 0 20rem;
`;

const Icon = styled.img`
  // padding-bottom: 17px;
`;

const SrModalWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  z-index: 3;

  width: 26.875rem;
  height: 58.25rem;
  background: rgba(85, 85, 85, 0.25);
`;

const SrModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 382px;
  height: 323px;

  border: 1px solid transparent;
  border-radius: 15px;

  padding-bottom: 10px;
  background-color: white;

  box-shadow: 0.3vw 0.3vw 0.6vw rgba(0, 0, 0, 0.3);

  & > p {
    ${({ theme }) => theme.fonts.kotrahopeText}
  }
`;

const SrHeader = styled.section`
  width: 320px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};

  & > h1 {
    font-size: 1.5rem;
    ${({ theme }) => theme.fonts.kotrahopeText}
  }
`;

const SrButtonWrapper = styled.footer`
  display: flex;
  align-item: center;
  justify-content: space-evenly;
  width: 21.25rem;
  height: 3.125rem;
  border-radius: 15px;
  background-color: #e9f3ff;

  & > input {
    font-size: 1.25rem;
    text-decoration: none;
    border: none;
    background-color: transparent;
    ${({ theme }) => theme.colors.grey}
    ${({ theme }) => theme.fonts.kotrahopeText}
  }

  & > button {
    width: 4.688rem;
    height: 2.375rem;
    justify-content: center;
    align-item: center;
    border: 1px solid transparent;
    border-radius: 1.25rem;
    margin-top: 0.38rem;
    background-color: ${({ theme }) => theme.colors.blue};
    ${({ theme }) => theme.fonts.kotrahopeText}
    color: white;
  }
`;
