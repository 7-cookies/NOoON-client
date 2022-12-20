import React, {useEffect,useState} from "react";
import styled from "styled-components";
import axios from "axios";

import { ShortButton } from "../../styles/globalStyle";
import SnowManforGrid from "../../components/dongsan/SnowManforGrid";
import Loading from '../../components/common/Loading.jsx'

import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import {backgroundImg} from "../../utils/imgData";

const VisitorDongsan = ({ setStep }) => {
    const [snowmandata, setSnowmanData] = useState([]);
    const [background, setBackground] = useState(1);
    const [title, setTitle] = useState();

    const navigate=useNavigate();
    let { invitationCode } = useParams();

    const handleNoonMakeClick=()=>{
        setStep('VISITOR-DRESSUP');
    }

    const handleMyDongsanClick=()=>{
        navigate('/');
    }

    // const invitationCode=sessionStorage.getItem("invitationCode");


    const[loading, setLoading] = useState(true);

    //match.params.invitationCode
    async function getSnowmanData() {
        const response = await axios.get(
            `${process.env.REACT_APP_BE_SERVER_DOMAIN}api/v1/place/${invitationCode}`)
            setSnowmanData(response.data.data.snowmans);
            setBackground(response.data.data.background);
            setTitle(response.data.data.name);
            setLoading(false)
    }

    useEffect(() => {
        getSnowmanData();
    }, []);

    


  if (loading){return(<Loading/>)}
  else {

  return (
    <StGridWrapper url={process.env.REACT_APP_S3_URL+'background/background'+`${background}`+".png"}>
      <a id='insta' href="https://instagram.com/noon_dongsan?igshid=YmMyMTA2M2Y=">@noon_dongsan</a>
      {background===2||background===4?(
          <h1 style={{color:"#877C73"}}>
            {title}
          </h1>
      ):(
          <h1 style={{color:"white"}}>
            {title}
          </h1>
      )}
      <div>
        <StGrid>
          {snowmandata.slice(0).reverse().map(
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
        <StShortButton type="button" onClick={()=>handleNoonMakeClick()}>눈사람 만들기</StShortButton>
        <StShortButton type="button" onClick={()=>handleMyDongsanClick()}>내 동산 가기</StShortButton>
      </StButtonWrapper>
    </StGridWrapper>
  );}
};

export default VisitorDongsan;

const StGridWrapper = styled.section`
  /* background-image: url("image/background1.png"); */
  background-image: url(${(props)=>props.url});

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

  & > h1 {
    margin: 0;
    padding: 3.75rem 2.2rem 0rem 0rem;
    width: 27rem;
    text-align: right;
    ${({ theme }) => theme.fonts.kotrahopeTitle}
  }
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

const StButtonWrapper = styled.section`
    display: flex;
    justify-content: space-between;

    width: 22.6875rem;
    /* margin-bottom:2.0625rem; */

    position: fixed;
    z-index: 10;
    
    height: 3rem;
    bottom: 1rem;
`

const StShortButton=styled(ShortButton)`
    width: 10.625rem;

    box-shadow: 0.3vw 0.3vw 0.6vw rgba(0, 0, 0, 0.3);
`