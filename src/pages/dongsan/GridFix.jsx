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
import { modalState, newAccesstoken } from "../../utils/atoms";
import { checkmodalState } from "../../utils/atoms";
import { useCookies } from "react-cookie";
import MessageModal from "../../components/message/MessageModal";
import { ShortButton } from "../../styles/globalStyle";
import Loading from '../../components/common/Loading.jsx'

import { BGImg } from "../../utils/imgData";
import logoutImg from '../../asset/icon/logout.png'
import xButton from "../../asset/icon/Group 130.svg";

const GridFix = () => {
  
  // const navigate=useNavigate();
  const {state}=useLocation();
  const [snowmanData, setSnowmanData] = useState([]);
  const [id, setId] = useState();
  const [creator, setCreator] = useState();
  const [background, setBackground] = useState(null);
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

  const [loading, setLoading] = useState(true);
  // console.log(cookies.accessToken)
  // const [newnewAccessToken, setNewnewAccesToken]=useRecoilState(newAccesstoken);

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
  }

  // ${invitationCode}
  async function getSnowmanData() {
    setLoading(false)
    try{
      const response = await axios.get(
        
        `${process.env.REACT_APP_BE_SERVER_DOMAIN}api/v1/place/${invitationCode}/user`,
        {
          headers: {
            Authorization: `Bearer ${cookies.accessToken}`,
          },
        }
      );
      setSnowmanData(response.data.data.snowmans);
      setBackground(response.data.data.background);
      setTitle(response.data.data.name);  
      setIC(response.data.data.invitationCode);
      setLoading(false) 
    }catch(error){
      if(error.response && error.response.status === 400){
        if(!state){nagivate('/')}
        const response = await axios.get(
          `${process.env.REACT_APP_BE_SERVER_DOMAIN}api/v1/place/${state.invitationCode}/user`,
          {
            headers: {
              Authorization: `Bearer ${state.accessToken}`,
            },
          }
        );  
        setSnowmanData(response.data.data.snowmans);
        setBackground(response.data.data.background);
        setTitle(response.data.data.name);  
        setIC(response.data.data.invitationCode) 
        // setNewnewAccesToken(state.accessToken)
      }
    }
  }

  // console.log(newnewAccessToken)

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
      window.sessionStorage.setItem('stepState', '');
      window.location.href = '/';	

    }

  //브라우저 상에서 뒤로가기 X
  window.history.pushState(null, null, window.location.href);
  window.onpopstate = function (event) {
    window.history.go(1);
  };

  if (loading) {return (<Loading />)}
  else {
  return (
    <StGridWrapper
      url={
        process.env.REACT_APP_S3_URL +
        "background/background" +
        `${background}` +
        ".png"
      }
    >
      {/* <StartModal /> */}

      {touch && (
        <StModalWrapper>
          {/* {ckmodal && <CheckModal title={creator} />} */}
          <StXButton src={xButton} alt="#" onClick={handleXClick} />
          <MessageModal id={id}/>
          {/* {state.accessToken?<MessageModal id={id} accessToken={state.accessToken}/>:<MessageModal id={id} accessToken={cookies.accessToken}/>} */}
        </StModalWrapper>
      )}

      <a id='insta' href="https://instagram.com/noon_dongsan?igshid=YmMyMTA2M2Y=">@noon_dongsan</a>
      <H1 background={background}>
        {title}
      </H1>

      <div>
        <StGrid>
          {snowmanData.slice(0).reverse().map(
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
                  owner='true'
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
  );}
};

export default GridFix;

const StMiddleButton = styled(MiddleButton)`
  margin: 0rem 0 2.0625rem 0rem;
  width: 14rem;
  box-shadow: 0.3vw 0.3vw 0.6vw rgba(0, 0, 0, 0.3);
`;

const StGridWrapper = styled.section`
  background-image: url(${(props) => props.url});
  background-size: 26.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > div {
    display: inline-block;
    width: 26.875rem;
    height: 45.5em;
    margin-top: 2.6875rem;
    /* padding-top: 7.5rem; */
    position: relative;
    overflow: scroll;
    padding: 0 0.7rem;

    scrollbar-width: none;
    -ms-overflow-style: none;

  }
  & > div::-webkit-scrollbar {
  display: none;
}

  & > #insta{
    ${({ theme }) => theme.fonts.kotrahopeText}
    color: #A6C7EF;
    font-size:0.9375rem;
    cursor: pointer;
    position: relative;
    top: 1.25rem;
    left: 8.8rem;
    text-decoration-line: none;
    
}
`;

const H1 = styled.h1`
  margin: 0;
  padding: 3.75rem 2.2rem 0rem 0rem;
  width: 27rem;
  text-align: right;


  ${({ theme }) => theme.fonts.kotrahopeTitle}
  color: ${(props) => ((props.background === 2 || props.background === 4)  ? "#877C73" : "white")};
`;

const StGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* transform: rotate(-90deg);
  width: 43.75rem;
  height: 26.875rem;
  margin-left: -6.875rem; */
  position: absolute;
  z-index: 2;

  height: 43.75rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  
`;

const StSnowMan = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* transform: rotate(90deg); */

  margin-right: 1.6rem;
  margin-bottom: 1rem;

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
  z-index: 11;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StXButton = styled.img`
  position: absolute;
  z-index: 15;
  /* margin: 0rem 0rem 23.75rem 19.6875rem; */
  margin: 0rem 0rem 27rem 19.6875rem;
`;

const ButtonWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 22.6875rem;
  position: fixed;
  z-index: 10;
  height: 3rem;
  bottom: 1rem;
  

  & > img{
    width: 2.875rem;
    height: 3.1875rem;
    position: relative;
    top : 0.2rem;
    left: 1.6rem;

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
    box-shadow: 0rem 0.25rem 0.25rem rgba(130, 130, 130, 0.25);

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
