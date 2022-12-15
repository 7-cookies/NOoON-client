import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import {axios} from 'axios'
import { useCookies } from "react-cookie";
import { KakaoShare } from "../../utils/kakaoShare";

import close from "../../asset/icon/close.svg";
import share from "../../asset/icon/share.svg";
import { modalState } from "../../utils/atoms";

import { Input } from "../../styles/globalStyle";

const ShareModal = (props) => {
  const [shareButton, setShareButton] = useState(false);
  const navigate = useNavigate();

  const [modalClicked, setmodalClicked] = useRecoilState(modalState);
  const modal = useRecoilValue(modalState);

  function deleteModal() {
    setmodalClicked(!modalClicked);
  }

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      sessionStorage.removeItem("invitationCode")
      alert("링크가 복사되었습니다");
    } catch (error) {
      alert("링크 복사에 실패했습니다");
    }
  };

  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);
  const invitationCode = props.invitation;
  

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
            <KakaoShare url={invitationCode} />
            <p>링크 복사</p>

            <SrButtonWrapper>
              {/* <div id="buttonWrapper"> */}
                <Icon src={share} alt="#" />
                <Input id='linkText' type="text" value={`https://www.noonsaram.site/${invitationCode}`}/>
                <button
                  type="submit"
                  onClick={() =>
                    handleCopyClipBoard(
                      `https://www.noonsaram.site/${invitationCode}`
                    )}>
                  copy
                </button>
              {/* </div> */}
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
  margin-right: 3px;
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

  box-shadow: 0px 4px 4px rgba(130, 130, 130, 0.25);

  & > p {
    ${({ theme }) => theme.fonts.kotrahopeText}
  }

  & > p:nth-child(1){
    margin-top: -5px;
    margin-bottom: -15px;
  }

  & > p:nth-child(2){
    margin-top: 10px;
    margin-bottom: -20px;
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
  align-items: center;
  /* justify-content: space-evenly; */
  justify-content: center;

  width: 21.25rem;
  height: 3.125rem;
  border-radius: 15px;
  background-color: #e9f3ff;
  padding: 0rem 0.5rem;
  margin: 0rem 0.5rem;

  & > input {
    font-size: 1.25rem;
    text-decoration: none;
    border: none;
    background-color: transparent;
    ${({ theme }) => theme.colors.grey}
    ${({ theme }) => theme.fonts.kotrahopeText}
  }

  & > button {
    width: 75px;
    height: 2.375rem;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
    border-radius: 0.75rem;
    background-color: ${({ theme }) => theme.colors.blue};
    ${({ theme }) => theme.fonts.kotrahopeText}
    color: white;

    cursor: pointer;
  }

  #linkText{
    color: #616161;
    width: 13rem;
    /* border: pink solid; */

  }
`;
