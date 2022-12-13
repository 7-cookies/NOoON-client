import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from 'react-router-dom';

import { useRecoilState, useRecoilValue } from "recoil";

import { MiddleButton } from "../../styles/globalStyle";
import SnowManforGrid from "../../components/dongsan/SnowManforGrid";
import StartModal from "./StartModal";
import ShareModal from "../dongsan/ShareModal";
import CheckModal from "../dongsan/CheckModal";
import { modalState } from "../../utils/atoms";
import { checkmodalState } from "../../utils/atoms";
import { useCookies } from "react-cookie";
import MessageModal from "../../components/message/MessageModal";
import { ShortButton } from "../../styles/globalStyle";

import { BGImg } from "../../utils/imgData";
import logoutImg from '../../asset/icon/logout.png'
import xButton from "../../asset/icon/Group 130.svg";

const GridFix = () => {
  
  // const navigate=useNavigate();
  const {state}=useLocation();
  const [snowmanData, setSnowmanData] = useState([]);
  const [id, setId] = useState();
  const [creator, setCreator] = useState();
  const [background, setBackground] = useState(1);
  const [title, setTitle] = useState();

  const invitationCode = window.sessionStorage.getItem("invitationCode");
  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);

  const [visible, setVisible] = useState(false);

  const [touch, setTouch] = useState(false);

  const [modalClicked, setmodalClicked] = useRecoilState(modalState);
  const modal = useRecoilValue(modalState);

  const [ckmodalClicked, setckmodalClicked] = useRecoilState(checkmodalState);
  const ckmodal = useRecoilValue(checkmodalState);

  const [IC, setIC] = useState('')

  function popupModal() {
    setmodalClicked(!modalClicked);
    console.log(modal)
  }

  function openModal(id, creator) {
    setTouch(true);
    setId(id);
    setCreator(creator);
    setckmodalClicked(!ckmodalClicked);
  }

  function handleClick(id) {
    setTouch(false);
    console.log(id);
  }

  // ${invitationCode}
  async function getSnowmanData() {
    try{
      const response = await axios.get(
        `${process.env.REACT_APP_BE_SERVER_DOMAIN}api/v1/place/${invitationCode}/user`,
        {
          headers: {
            Authorization: `Bearer ${cookies.accessToken}`,
          },
        }
      );
      console.log(response.data.data);
      setSnowmanData(response.data.data.snowmans);
      setBackground(response.data.data.background);
      setTitle(response.data.data.name);  
      setIC(response.data.data.invitationCode);
    }catch(error){
      if(error.response && error.response.status === 400){
        const response = await axios.get(
          `${process.env.REACT_APP_BE_SERVER_DOMAIN}api/v1/place/${state.invitationCode}/user`,
          {
            headers: {
              Authorization: `Bearer ${state.accessToken}`,
            },
          }
        );  
        console.log(response.data.data);
        setSnowmanData(response.data.data.snowmans);
        setBackground(response.data.data.background);
        setTitle(response.data.data.name);  
        setIC(response.data.data.invitationCode)  
      }
    }
  }

  useEffect(() => {
    getSnowmanData();
  }, []);

  const nagivate = useNavigate();
  const handleXClick = () => {
    setTouch(false);
  };

    //로그아웃 모달
    const [logout, setLogOut] = useState(false);
    const isModalClicked = (res) => {
      setLogOut(res);
    }

    const rmCookie = () => {
      // removeCookie(cookies.accessToken, { path: '/' }); 
      removeCookie(cookies, { path: '/' }); 
      window.sessionStorage.setItem('invitationCode', '');
      window.sessionStorage.setItem('username', '');
      window.location.href = '/';	

    }
    // console.log(cookies);

  //브라우저 상에서 뒤로가기 X
  window.history.pushState(null, null, window.location.href);
  window.onpopstate = function (event) {
    window.history.go(1);
  };

  return (
    <StGridWrapper
      url={
        process.env.REACT_APP_S3_URL +
        "background/background" +
        `${background}` +
        ".png"
      }
    >
      <StartModal />

      {touch && (
        <StModalWrapper>
          {ckmodal && <CheckModal title={creator} />}
        </StModalWrapper>
      )}

      <H1 background={background}>
        {title}
      </H1>

      <div>
        <StGrid>
          {snowmanData.map(
            ({ id, head, eye, nose, arm, mouth, accessory, creator }) => (
              <StSnowMan key={id} onClick={() => openModal(id, creator)}>
                <SnowManforGrid
                  imgSize={12}
                  head={head}
                  eye={eye}
                  nose={nose}
                  arm={arm}
                  mouth={mouth}
                  item={accessory}
                />

                <div>
                  <p>by {creator}</p>
                </div>
              </StSnowMan>
            )
          )}
        </StGrid>
      </div>
      <ButtonWrapper>
        <StMiddleButton onClick={popupModal}>내 동산 공유하기</StMiddleButton>
        <img src={logoutImg} alt={'로그아웃이미지'} 
        onClick={()=>isModalClicked(true)}
        />
      </ButtonWrapper>

      {logout && 
      <>
      <SrModalWrapper>
        <StModalWrapper>
            <StModal>
                <p> 로그아웃하시겠습니까? </p>
                <StButtonWrapper>
                    <ShortButton button="submit" onClick={()=>rmCookie()}>확인</ShortButton>
                    <ShortButton button="submit" onClick={()=>isModalClicked(false)}>취소</ShortButton>   
                </StButtonWrapper>
            </StModal>
        </StModalWrapper>
    </SrModalWrapper>
    </>
    }

      {modal && <ShareModal invitation={IC}/>}
      
      
    </StGridWrapper>
  );
};

export default GridFix;

const StMiddleButton = styled(MiddleButton)`
  margin: 0px 0 2.0625rem 0px;
  width: 14rem;
`;

const StGridWrapper = styled.section`
  background-image: url(${(props) => props.url});
  background-size: 430px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > div {
    display: inline-block;
    width: 430px;
    height: 700px;
    margin-top: 43px;
    padding-top: 120px;
    position: relative;
    overflow: scroll;
  }
`;

const H1 = styled.h1`
  margin: 0;
  padding: 84px 24px 0px 0px;
  width: 432px;
  text-align: right;


  ${({ theme }) => theme.fonts.kotrahopeTitle}
  color: ${(props) => (props.background === (4 || 2) ? "#877C73" : "white")};
`;

const StGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  transform: rotate(-90deg);
  width: 700px;
  height: 430px;

  margin-left: -110px;

  position: absolute;
  z-index: 2;
`;
const StSnowMan = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: rotate(90deg);

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;

    & > p {
      margin-right: 2.5rem;
      ${({ theme }) => theme.fonts.kotrahopeCreator}
    }
  }
`;

const StModalWrapper = styled.section`
  position: absolute;
  z-index: 11;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StXButton = styled.img`
  position: absolute;
  z-index: 15;
  margin: 0px 0px 380px 315px;
`;

const ButtonWrapper = styled.section`
  display: flex;
  position: relative;
  left: 2rem;
  

  & > img{
    width: 2.875rem;
    height: 3.1875rem;
    position: relative;
    left: 1.7rem;

  }
`


const StModal=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 23.875rem;
    height: 13.1875rem;

    border: 0.0625rem solid transparent;
    border-radius: 0.9375rem;

    background-color: white;
    box-shadow: 0px 4px 4px rgba(130, 130, 130, 0.25);

    & > p {
        margin-top: 1.115rem;
        ${({ theme }) => theme.fonts.kotrahopeText}
    }
`
const StButtonWrapper=styled.footer`
    display:flex;
    justify-content: space-between;
    
    width:18.625rem;
    margin-top: 2.5rem;
`

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
