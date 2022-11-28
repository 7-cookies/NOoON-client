import React,{useState} from "react";
import styled from "styled-components";

import { MiddleButton } from "../../styles/globalStyle";

import rightArrow from '../../asset/icon/rightArrow.svg';
import leftArrow from '../../asset/icon/leftArrow.svg';
import SnowManMap from "../../components/dongsan/SnowManMap";

const Grid2 = () => {
  const [clickNum, setclickNum] = useState(0);
    
    const handleRightClick=()=>{
      setclickNum(clickNum+1)
      console.log(clickNum);
      console.log("adsfsadf")
    }

    const handleLeftClick=()=>{
      setclickNum(clickNum-1)
    }


    return (
      <>        
        <StArrowWrapper>
            <img src={leftArrow} alt="왼쪽 화살표" onClick={handleLeftClick} id="left-button" />
            <img src={rightArrow} alt="오른쪽 화살표" onClick={handleRightClick} id="right-button" />
        </StArrowWrapper>        

        <StGridWrapper>  
          <StGrid clickNum={clickNum} className="card-container">
            <SnowManMap />
          </StGrid>
        <StMiddleButton>내 동산 공유하기</StMiddleButton>

        </StGridWrapper>
      </>
    );
  }
export default Grid2;

const StArrowWrapper=styled.section`
    position: absolute;
    z-index: 2;

    width: 430px;
    height: 932px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 1rem;

`
const StMiddleButton=styled(MiddleButton)`
`

const StGridWrapper = styled.section`
  background-image: url("image/background1.png");
  background-size: 430px;

  /* width:430px; */
  /* max-height:932px; */
  /* text-align: center;
  position:relative; */

  /* overflow: scroll; */

`;

const StGrid=styled.div`
    ${({ theme }) => theme.fonts.kotrahopeCreator}
  & > div{
    display: inline-block;
    width: 192px;
    height: 192px;
    border: 1px solid;
    }

    /* display: flex;
    flex-wrap: wrap;
    white-space: nowrap;
    overflow-y: auto; */

`;

// const StSnowMan=styled.div`
//     width:13rem;
//     height:13rem;

//     display:flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
// `

