import React, {useEffect,useState} from "react";
import styled from "styled-components";
import axios from "axios";

import { ShortButton } from "../../styles/globalStyle";
import SnowManforGrid from "../../components/dongsan/SnowManforGrid";
import data from "../../mocks/test.json";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import {backgroundImg} from "../../utils/imgData";

const VisitorDongsan = ({ setStep}) => {
    const [snowmandata, setSnowmanData] = useState([]);
    const [background, setBackground] = useState(1);
    const [title, setTitle] = useState();

    const navigate=useNavigate();
    let { invitationCode } = useParams();

    const handleMakeNoonClick=()=>{
        setStep('VISITOR-DRESSUP');
    }

    const handleMyDongsanClick=()=>{
        navigate('/');
    }

    // const invitationCode=sessionStorage.getItem("invitationCode");

    //hnvvc6
    //match.params.invitationCode
    async function getSnowmanData() {
        const response = await axios.get(
            `${process.env.REACT_APP_BE_SERVER_DOMAIN}api/v1/place/${invitationCode}`)
            console.log(response.data)
            setSnowmanData(response.data.data.snowmans);
            setBackground(response.data.data.background);
            setTitle(response.data.data.name);
    }

    useEffect(() => {
        getSnowmanData();
    }, []);

    console.log(snowmandata);
    console.log(background)
    console.log(title)
    

//id, head, eye, nose, arm, mouse, accessary, creator
console.log(process.env.REACT_APP_S3_URL+'background/background'+`${background}`+".png")

  return (
    <StGridWrapper url={process.env.REACT_APP_S3_URL+'background/background'+`${background}`+".png"}>
      <H1>{title}</H1>
      <div>
        <StGrid>
          {snowmandata.map(
            ({id, head, eye, nose, arm, mouth, accessory, creator}) => (
              <StSnowMan key={id}>
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
      <StButtonWrapper>
        <StShortButton type="button" onClick={handleMakeNoonClick}>눈사람 만들기</StShortButton>
        <StShortButton type="button" onClick={handleMyDongsanClick}>내 동산 가기</StShortButton>
      </StButtonWrapper>
    </StGridWrapper>
  );
};

export default VisitorDongsan;

const StGridWrapper = styled.section`
  /* background-image: url("image/background1.png"); */
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

const H1=styled.h1`
  ${({ theme }) => theme.fonts.kotrahopeTitle}
  color: ${(props) => (props.title === "4" || "2" ? "#877C73" : "white")};
`