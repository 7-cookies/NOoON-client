import axios from "axios";
import React, { useEffect,useState } from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";

import { MiddleButton } from "../../styles/globalStyle";
import SnowManforGrid from "../../components/dongsan/SnowManforGrid";
import data from "../../mocks/test.json";
import StartModal from "./StartModal";
import ShareModal from "../dongsan/ShareModal";
import CheckModal from "../dongsan/CheckModal";
import { modalState } from "../../utils/atoms";
import { useCookies } from 'react-cookie';

const GridFix = () => {

  const [snowmanData, setSnowmanData] = useState([]);
  const [background, setBackground] = useState(1);
  const [title, setTitle] = useState();

  const invitationCode=window.sessionStorage.getItem("invitationCode");
  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);

  const [visible, setVisible] = useState(false);
  const [touch, setTouch] = useState(false);

  const [modalClicked, setmodalClicked] = useRecoilState(modalState);
  const modal = useRecoilValue(modalState);

  function popupModal() {
    // console.log("clicked");
    // setVisible(true);
    setmodalClicked(!modalClicked);
  }

  function openModal() {
    console.log("clicked");
    setTouch(true);
  }

  function handleClick() {
    setTouch(false);
    console.log(touch);
  }
  console.log(touch);
  
  async function getSnowmanData() {
    const response = await axios.get(
        `${process.env.REACT_APP_BE_SERVER_DOMAIN}api/v1/place/${invitationCode}/user`,
          {
            headers:{
              Authorization: `Bearer ${cookies.accessToken}`,
            }
          }
        )
        console.log(response.data.data)
        setSnowmanData(response.data.data.snowmans);
        setBackground(response.data.data.background);
        setTitle(response.data.data.name);
  }

  useEffect(() => {
      getSnowmanData();
  }, []);




  return (
    <StGridWrapper url={process.env.REACT_APP_S3_URL+'background/background'+`${background}`+".png"}>
      <StartModal />
      {touch && (
        <StModalWrapper onClick={handleClick}>
          <CheckModal />
        </StModalWrapper>
      )}
      <h1>{title}</h1>
      <div>
        <StGrid>
          {snowmanData.map(
            ({ id, head, eye, nose, arm, mouth, accessory, creator }) => (
              <StSnowMan key={id} onClick={openModal}>
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
  background-image: url(${(props)=>props.url});
  
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

  & > h1 {
    margin: 0;
    padding: 84.5px 0px 0px 242px;

    ${({ theme }) => theme.fonts.kotrahopeTitle}
  }
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
      ${({ theme }) => theme.fonts.kotrahopeCreator}
    }
  }
`;

const StModalWrapper = styled.section`
  position: absolute;

  display: flex;
  justify-contents: center;
  align-items: center;
`;
