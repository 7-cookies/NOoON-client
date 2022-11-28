import React,{useState} from "react";
import styled from "styled-components";

import { MiddleButton } from "../../styles/globalStyle";
import SnowManforGrid from '../../components/dongsan/SnowManforGrid'
import data from '../../mocks/test.json';

import rightArrow from '../../asset/icon/rightArrow.svg';
import leftArrow from '../../asset/icon/leftArrow.svg';

const GridFix = () => {
  const [clickNum, setclickNum] = useState(0);

    const handleRightClick=()=>{
      setclickNum(prev=>prev+1)
      console.log(clickNum)
    }

    const handleLeftClick=()=>{
      setclickNum(prev=>prev-1)
    }
    return (
      <>
      <StGridWrapper>  
        <StArrowWrapper>
          <img src={leftArrow} alt="왼쪽 화살표" onClick={handleRightClick}/>
          <img src={rightArrow} alt="오른쪽 화살표" onClick={handleLeftClick}/>
        </StArrowWrapper>        
        <StGrid clickNum={clickNum}>
            {data.snowman.map(({id, head, eye, nose, arm, mouse, accessary, creator})=>(
          <StSnowMan key={id}>
            <SnowManforGrid imgSize={12} head={head} eye={eye} nose={nose} arm={arm} mouth={mouse} item={accessary} />
            <div><p>by {creator}</p></div>
          </StSnowMan>
          ))}
        </StGrid>
        <StMiddleButton>내 동산 공유하기</StMiddleButton>

      </StGridWrapper>
</>
    );
  }


export default GridFix;

const StArrowWrapper=styled.section`
  display: flex;
  justify-content: space-between;

  position: absolute;
  z-index: 3;

  width: 430px;
  padding:0 1rem;
`
const StMiddleButton=styled(MiddleButton)`
  margin: 845px 0 33px 0px ;
`

const StGridWrapper = styled.section`
  background-image: url("image/background1.png");
  background-size: 430px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StGrid=styled.div`
  width: 400px;
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  transform: rotate(-90deg);

  width: 650px;
  height: 430px;

  position: absolute;
  z-index: 2;
  overflow: hidden;

  /* transform : translate3d(${(props) => -(830 * props.clickNum)}px, 0, 0); */
`;

const StSnowMan=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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