import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { checkmodalState } from "../../utils/atoms";

import messageCard from "../../asset/img/letter.png";
import xButton from "../../asset/icon/Group 130.svg";
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";
import {useState, useEffect} from "react";
import { useCookies } from "react-cookie";
import Loading from '../../components/common/Loading.jsx'

import { newInfo } from "../../utils/atoms";

const MessageModal = ({ accessToken, id } ) => {
  const [creator, setCreator]=useState();
  const [letter, setLetter]=useState();

  const newOne=useRecoilValue(newInfo)
  const nagivate = useNavigate();
  // const handleXClick = () => {
  //   nagivate(-1);
  // };


  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);
  const invitationCode = window.sessionStorage.getItem("invitationCode");
  const newAccessToken = window.sessionStorage.getItem("accessToken");

  const [loading, setLoading] = useState(true)
  console.log(newOne)

  async function getMessageData() {
    const response = await axios.get(
        `${process.env.REACT_APP_BE_SERVER_DOMAIN}api/v1/place/${invitationCode}/snowman/${id}`,{
          headers:{
            Authorization: `Bearer ${newAccessToken}`,
          }
        })
        setCreator(response.data.data.creator);
        setLetter(response.data.data.letter);
        setLoading(false)
        console.log(response.data.data.id);
  }

  useEffect(() => {
    getMessageData();
  }, []);

  const [ckmodalClicked, setckmodalClicked] = useRecoilState(checkmodalState);
  const ckmodal = useRecoilValue(checkmodalState);

  function deleteModal() {
    setckmodalClicked(!ckmodalClicked);
  }



  // if (loading) {return(<Loading/>)}
  // else {
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
                  {/* <StXButton src={xButton} alt="#" onClick={deleteModal} /> */}
                </div>
              </StTitle>
              <div>{letter}</div>
            </StContentWrapper>
          </StModal>
        </StModalWrapper>
      </StModalBackgroundWrapper>
    </>
  );
// }
};

export default MessageModal;

const StCard = styled.img`
  width: 23.875rem;
  border-radius: 1.2rem;
`;

const StContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  z-index: 3;

  & > div:nth-child(2) {
    width: 20rem;
    height: 23.4375rem;

    ${({ theme }) => theme.fonts.kotrahopeMessage}
    color: white;
  }
`;
const StTitle = styled.div`
  display: flex;
  justify-content: center;

  & > div {
    width: 20rem;
    height: 4.625rem;

    border-bottom: 0.0625rem solid white;
    ${({ theme }) => theme.fonts.kotrahopeMessage}
    color: white;

    & > p {
      width: 9.375rem;
      margin: 2.25rem 0rem 0.9375rem -1.875rem;
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

  width: 23.875rem;
  height: 18.3125rem;

  border: 0.0625rem solid transparent;
  border-radius: 0.9375rem;

  background-color: white;

  & > p {
    margin-top: 1.115rem;
    ${({ theme }) => theme.fonts.kotrahopeText}
  }
`;
const StButtonWrapper = styled.footer`
  display: flex;
  justify-content: space-between;

  width :18.625rem;
  margin-top: 3.8931rem;
`;


