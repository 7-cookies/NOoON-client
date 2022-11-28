import styled from "styled-components";

import close from "../../asset/icon/close.svg";
import kakao from "../../asset/icon/kakao.svg";
import share from "../../asset/icon/share.svg";

const ShareModal = () => {
  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("복사 성공!");
    } catch (error) {
      alert("복사 실패!");
    }
  };

  return (
    <>
      <SrModalWrapper>
        <SrModal>
          <SrHeader>
            <h1>공유하기</h1>
            <Icon src={close} alt="#" />
          </SrHeader>
          <SrMiddle>
            <p>카카오톡 공유</p>
            <Icon src={kakao} alt="#" />
            <p>링크 복사</p>
          </SrMiddle>
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
    </>
  );
};

export default ShareModal;

const Icon = styled.img`
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
  width: 20.625rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};

  & > h1 {
    font-size: 1.375rem;
    ${({ theme }) => theme.fonts.kotrahopeText}
  }
`;

const SrMiddle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;

  & > p {
    padding-bottom: 10px;
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
