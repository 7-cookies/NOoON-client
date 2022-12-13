import styled from "styled-components";
import messageCard from "../../asset/img/messageCard.png";
import xButton from "../../asset/icon/Group 130.svg";
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";
import {useState, useEffect} from "react";
import test from "../../mocks/test.json";
import { useCookies } from "react-cookie";


const MessageModal = ({ id } ) => {
  const [creator, setCreator]=useState();
  const [letter, setLetter]=useState();

  const nagivate = useNavigate();
  // const handleXClick = () => {
  //   nagivate(-1);
  // };

  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);
  const invitationCode = window.sessionStorage.getItem("invitationCode");

  async function getMessageData() {
    const response = await axios.get(
        `${process.env.REACT_APP_BE_SERVER_DOMAIN}api/v1/place/${invitationCode}/snowman/${id}`,{
          headers:{
            Authorization: `Bearer ${cookies.accessToken}`,
          }
        })
        console.log(response.data)
        setCreator(response.data.data.creator);
        setLetter(response.data.data.letter);
  }

  useEffect(() => {
    getMessageData();
  }, []);


  return (
    <>
      <StModalBackgroundWrapper>
        <StModalWrapper>
          <StModal>
            <StCard src={messageCard} alt="#" />
            <StContentWrapper>
              <StTitle>
                <div>
                  <p>From. {creator}</p>
                  {/* <StXButton src={xButton} alt="#" onClick={handleXClick} /> */}
                </div>
              </StTitle>
              <div>{letter}</div>
            </StContentWrapper>
          </StModal>
        </StModalWrapper>
      </StModalBackgroundWrapper>
    </>
  );
};

export default MessageModal;

const StCard = styled.img`
  width: 382px;
`;

const StContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  z-index: 3;

  & > div:nth-child(2) {
    width: 320px;
    height: 375px;

    ${({ theme }) => theme.fonts.kotrahopeMessage}
    color: white;
  }
`;
const StTitle = styled.div`
  display: flex;
  justify-content: center;

  & > div {
    width: 320px;
    height: 74px;

    border-bottom: 1px solid white;
    ${({ theme }) => theme.fonts.kotrahopeMessage}
    color: white;

    & > p {
      width: 150px;
      margin: 36px 0px 15px -30px;
    }
  }
`;
const StModalBackgroundWrapper = styled.section`
  position: absolute;
  z-index: 10;
`;
const StModalWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 26.875rem;
  height: 58.25rem;
  background: rgba(85, 85, 85, 0.25);
`;
const StModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 382px;
  height: 293px;

  border: 1px solid transparent;
  border-radius: 15px;

  background-color: white;

  & > p {
    margin-top: 17.84px;
    ${({ theme }) => theme.fonts.kotrahopeText}
  }
`;
const StButtonWrapper = styled.footer`
  display: flex;
  justify-content: space-between;

  width: 298px;
  margin-top: 62.29px;
`;
