import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useRecoilState, useRecoilValue } from "recoil";

import { MiddleButton } from "../../styles/globalStyle";
import SnowManforGrid from "../../components/dongsan/SnowManforGrid";
import data from "../../mocks/test.json";
import StartModal from "./StartModal";
import ShareModal from "../dongsan/ShareModal";
import CheckModal from "../dongsan/CheckModal";
import { modalState } from "../../utils/atoms";
import { checkmodalState } from "../../utils/atoms";
import { useCookies } from "react-cookie";
import MessageModal from "../../components/message/MessageModal";

import { BGImg } from "../../utils/imgData";
import xButton from "../../asset/icon/Group 130.svg";
import { useNavigate } from "react-router-dom";

const GridFix = () => {
  // const navigate=useNavigate();
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

  function popupModal() {
    setmodalClicked(!modalClicked);
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
          {ckmodal && <CheckModal title={creator} />}
          {/* <MessageModal id={id} /> */}
          {/* <StXButton src={xButton} alt="#" onClick={handleXClick} /> */}
        </StModalWrapper>
      )}

      <H1 background={sessionStorage.background}>
        {sessionStorage.dongsanName}
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
      <StMiddleButton onClick={popupModal}>내 동산 공유하기</StMiddleButton>
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
  color: ${(props) => (props.background === "4" || "2" ? "#877C73" : "white")};
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
