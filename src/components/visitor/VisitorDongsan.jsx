import React, {useEffect,useState} from "react";
import styled from "styled-components";
import axios from "axios";

import { ShortButton } from "../../styles/globalStyle";
import SnowManforGrid from "../../components/dongsan/SnowManforGrid";
import data from "../../mocks/test.json";
import { useNavigate } from 'react-router-dom';

const VisitorDongsan = ({ setStep }) => {
    const [snowmanData, setSnowmanData] = useState();
    const navigate=useNavigate();

    const handleMakeNoonClick=()=>{
        setStep('VISITOR-DRESSUP');
    }

    const handleMyDongsanClick=()=>{
        navigate('/');
    }

    const invitationCode=sessionStorage.getItem("invitationCode");

    async function getSnowmanData() {
        const response = await axios.get(
            `${process.env.REACT_APP_BE_SERVER_DOMAIN}api/v1/place/`+invitationCode)
        setSnowmanData(response.data);
    }

    useEffect(() => {
        getSnowmanData();
    }, []);
    console.log(snowmanData);

  return (
    <StGridWrapper>
      <h1>눈 펑펑 오는 눈동산</h1>
      <div>
        <StGrid>
          {data.snowman.map(
            ({ id, head, eye, nose, arm, mouse, accessary, creator }) => (
              <StSnowMan key={id}>
                <SnowManforGrid
                  imgSize={12}
                  head={head}
                  eye={eye}
                  nose={nose}
                  arm={arm}
                  mouth={mouse}
                  item={accessary}
                />
                <div>
                  <p>by {creator}</p>
                </div>
              </StSnowMan>
            )
          )}
        </StGrid>
      </div>
      <StButtonWrapper>
        <StShortButton type="button" onClick={handleMakeNoonClick}>눈사람 만들기</StShortButton>
        <StShortButton type="button" onClick={handleMyDongsanClick}>내 동산 가기</StShortButton>
      </StButtonWrapper>
    </StGridWrapper>
  );
};

export default VisitorDongsan;

const StGridWrapper = styled.section`
  background-image: url("image/background1.png");
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
      ${({ theme }) => theme.fonts.kotrahopeCreator}
    }
  }
`;

const StButtonWrapper = styled.section`
    display: flex;
    justify-content: space-between;

    width: 363px;
    margin-bottom:33px;
`

const StShortButton=styled(ShortButton)`
    width: 170px;

    box-shadow: 0.3vw 0.3vw 0.6vw rgba(0, 0, 0, 0.3);
`