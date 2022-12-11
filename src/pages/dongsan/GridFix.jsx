import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

import { useRecoilState, useRecoilValue } from "recoil";

import { MiddleButton } from "../../styles/globalStyle";
import SnowManforGrid from "../../components/dongsan/SnowManforGrid";
import data from "../../mocks/test.json";
import StartModal from "./StartModal";
import ShareModal from "../dongsan/ShareModal";
import CheckModal from "../dongsan/CheckModal";
import { modalState, outModalState } from "../../utils/atoms";
import { useCookies } from "react-cookie";
import MessageModal from "../../components/message/MessageModal";
import { ShortButton } from "../../styles/globalStyle";

import { BGImg } from "../../utils/imgData";
import logoutImg from '../../asset/icon/logout.png'
import xButton from "../../asset/icon/Group 130.svg";


const GridFix = () => {
  // const navigate=useNavigate();
  const [snowmanData, setSnowmanData] = useState([]);
  const [id, setId]=useState();
  const [background, setBackground] = useState(1);
  const [title, setTitle] = useState();

  const invitationCode = window.sessionStorage.getItem("invitationCode");
  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);

  const [visible, setVisible] = useState(false);

  const [touch, setTouch] = useState(false);

  const [modalClicked, setmodalClicked] = useRecoilState(modalState);
  const modal = useRecoilValue(modalState);

  function popupModal() {
    setmodalClicked(!modalClicked);
    console.log(modal)
  }

  function openModal(id) {
    setTouch(true);
    setId(id);
  }

  function handleClick(id) {
    setTouch(false);
    console.log(id)
  }

  // console.log(touch);

  // ${invitationCode}
  async function getSnowmanData() {
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
      removeCookie(cookies.accessToken, { path: '/' }); 
      window.location.href = '/';	

    }


  // return (
  //   <StGridWrapper url={process.env.REACT_APP_S3_URL+'background/background'+`${background}`+".png"}>

  const backgroundNum = parseInt(sessionStorage.background) - 1;

  //브라우저 상에서 뒤로가기 X
  window.history.pushState(null, null, window.location.href);
  window.onpopstate = function (event) {
    window.history.go(1);
  };

  return (
    // <StGridWrapper img={BGImg[backgroundNum]}>
// onClick={()=>handleClick(id)}
    
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
          {/* <CheckModal /> */}
          <MessageModal id={id} />
          <StXButton src={xButton} alt="#" onClick={handleXClick} />
        </StModalWrapper>
      )}

      <H1 title={sessionStorage.background}>{sessionStorage.dongsanName}</H1>

      <div>
        <StGrid>
          {snowmanData.map(
            ({ id, head, eye, nose, arm, mouth, accessory, creator }) => (
              <StSnowMan key={id} onClick={()=>openModal(id)}>
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

      {modal && <ShareModal />}
      
      
    </StGridWrapper>
  );
};

export default GridFix;

const StMiddleButton = styled(MiddleButton)`
  /* margin: 845px 0 33px 0px ; */
  margin: 0px 0 33px 0px;
`;

const StGridWrapper = styled.section`
  background-image: url(${(props) => props.url});

  /* background-image: url(image/background1.png); */
  /* background-image: url(${(props) => props.img}); */

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

  /* & > h1 {
    margin: 0;
    padding: 84.5px 0px 0px 242px;

    ${({ theme }) => theme.fonts.kotrahopeTitle}
    color: ${(props) => (props.title === "4" ? "black" : "white")}; 
  } */
`;

const H1 = styled.h1`
  margin: 0;
  padding: 84.5px 0px 0px 242px;

  ${({ theme }) => theme.fonts.kotrahopeTitle}
  color: ${(props) => (props.title === "4" || "2" ? "#877C73" : "white")};
`;

// const SnowManforGrid = styled.img`
//   width: 192px;
// `;

const StGrid = styled.div`
  /* width: 400px; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  transform: rotate(-90deg);
  /* flex-direction: column; */
  /* border: 1px solid black; */
  width: 700px;
  height: 430px;

  margin-left: -110px;

  position: absolute;
  z-index: 2;
  /* overflow: hidden; */
  /* overflow:scroll; */
  /* overflow-y: auto; */
`;
const StSnowMan = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* width: 200px;
    height:  200px; */
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
    left: 2.5rem;

    
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

    & > p {
        margin-top: 1.115rem;
        ${({ theme }) => theme.fonts.kotrahopeText}
    }
`
const StButtonWrapper=styled.footer`
    display:flex;
    justify-content: space-between;
    
    width:18.625rem;
    margin-top: 3.8931rem;
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
