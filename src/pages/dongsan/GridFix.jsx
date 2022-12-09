import React from "react";
import styled from "styled-components";

import { MiddleButton } from "../../styles/globalStyle";
import SnowManforGrid from '../../components/dongsan/SnowManforGrid'
import data from '../../mocks/test.json';


const GridFix = () => {

    return (
      <StGridWrapper>
        <h1>눈 펑펑 오는 눈동산</h1>
        <div>
        <StGrid>
            {data.snowman.map(({id, head, eye, nose, arm, mouse, accessary, creator})=>(
          <StSnowMan key={id}>
            <SnowManforGrid imgSize={12} head={head} eye={eye} nose={nose} arm={arm} mouth={mouse} item={accessary} />
            <div><p>by {creator}</p></div>
          </StSnowMan>
          ))}
        </StGrid>
        </div>
          <StMiddleButton>내 동산 공유하기</StMiddleButton>

      </StGridWrapper>
    );
  }


export default GridFix;

const StMiddleButton=styled(MiddleButton)`
  /* margin: 845px 0 33px 0px ; */
  margin: 0px 0 33px 0px ;

`


const StGridWrapper = styled.section`
  background-image: url("image/background1.png");
  background-size: 430px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & >div {
    display: inline-block;
    width: 430px;
    height: 700px;
    margin-top: 43px;
    padding-top: 120px;
    position: relative;
    overflow: scroll;
  }

  & >h1 {
    margin:0;
    padding:84.5px 0px 0px 242px;

    ${({ theme }) => theme.fonts.kotrahopeTitle}

  }
`;

// const SnowManforGrid = styled.img`
//   width: 192px;
// `;

const StGrid=styled.div`
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
`
const StSnowMan=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
    /* width: 200px;
    height:  200px; */
    transform: rotate(90deg);
  & > div{
   display: flex;
   justify-content: center;
   align-items: center;
   
    & > p{
      ${({ theme }) => theme.fonts.kotrahopeCreator}
    }
  }
`