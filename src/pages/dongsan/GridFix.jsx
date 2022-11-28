import React from "react";
import styled from "styled-components";

// import base from "../../asset/img/base.png";
import { MiddleButton } from "../../styles/globalStyle";
// import ShareModal from "./ShareModal";
//import StartModal from "./StartModal";
// import CheckModal from "./CheckModal";
import base from '../../asset/img/base.png';
import SnowManforGrid from '../../components/dongsan/SnowManforGrid'
import data from '../../mocks/test.json';
import DressUp from '../dressUp/DressUp';

const gridList = [
  { id: 0, x: 0, y: 2, w: 1, h: 3 },
  { id: 1, x: 3, y: 3, w: 1, h: 3 },
  { id: 2, x: 0, y: 5, w: 1, h: 3},
  { id: 3, x: 7, y: 7, w: 1, h: 3},
  { id: 4, x: 0, y: 8, w: 1, h: 3},
];

const GridFix = () => {

    return (
      <StGridWrapper>
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
    display:inline-block;
    width: 430px;
    height: 700px;
    border: 1px solid;

    margin-top: 120px;

    padding-top: 120px;

    position: relative;

    overflow: scroll;
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