import React,{useState} from "react";
import styled from "styled-components";

import { MiddleButton } from "../../styles/globalStyle";
import SnowManforGrid from '../../components/dongsan/SnowManforGrid'
import data from '../../mocks/test.json';

import rightArrow from '../../asset/icon/rightArrow.svg';
import leftArrow from '../../asset/icon/leftArrow.svg';

const GridFix = () => {
  const [clickNum, setclickNum] = useState(0);
  // const [noonNum, setNoonNum] = useState(0);

  // setNoonNum(2);
  
  // const [pageY, setPageY] = useState(0);
  // const documentRef = useRe(document);

  // useEffect(() => {
  //   documentRef.current.addEventListener('scroll', handleScroll);
  //   return () => documentRef.current.removeEventListener('scroll', handleScroll);
  // }, [pageY]);

  // const handleScroll = () => {
  //   const { pageYOffset } = window;
  //   setPageY(pageYOffset);
  //   setIsSpread(pageYOffset <= 450);
  // };

    // const handleRightClick=()=>{
    //   setclickNum(clickNum+1)
    //   console.log(clickNum);
    //   console.log("adsfsadf")
    // }

    // const handleLeftClick=()=>{
    //   setclickNum(clickNum-1)
    // }


    return (
      <>    
    
        <StArrowWrapper>
            {/* <img src={leftArrow} alt="왼쪽 화살표" onClick={handleLeftClick} id="left-button" />
            <img src={rightArrow} alt="오른쪽 화살표" onClick={handleRightClick} id="right-button" /> */}
        </StArrowWrapper>        

        <StGridWrapper>  
        <StMiddleButton>내 동산 공유하기</StMiddleButton>

          <div>
          <StGrid noonNum={2} className="card-container">
              {data.snowman.map(({id, head, eye, nose, arm, mouse, accessary, creator})=>(
                <StSnowMan>
                  <SnowManforGrid imgSize={12} head={head} eye={eye} nose={nose} arm={arm} mouth={mouse} item={accessary} />
                  <div><p>by {creator}</p></div>
                </StSnowMan>
              ))}
          </StGrid>
          </div>

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
  margin-top:456px;

  & > img{
    cursor: pointer;
  }
`
const StMiddleButton=styled(MiddleButton)`
  position: absolute;
  z-index: 4;

  margin: 845px 135px 33px 135px;
`

const StGridWrapper = styled.section`
  background-image: url("image/background1.png");
  background-size: 430px;

  display: flex;
  /* justify-content: center;
  align-items: center;
 */

  & >div {
    display:inline-block;
    width:430px;
    height: 932px;
    border: 1px solid;

    position: relative;

    /* overflow: scroll; */
  }

`;

const StGrid=styled.div`
  display: grid;

  grid-template-columns: repeat(3, 210px);
  transform: rotate(-90deg);

  width: 450px;
  height: 950px;

  position: absolute;
  z-index: 2;

  /* margin-left:-210px; */
  margin-left:250px;

  margin-top:90px


  /* padding-top:${(props)=>(props.noonNum)<6?0:150}px; */

  /* margin-left:-830px; */
  /* border:1px solid black; */

  /* margin-left:-${(props)=>-(830 * props.clickNum)}px; */
  /* transform : translate3d(${(props) => -(830 * props.clickNum)}px, 0, 0); */
`;

const StSnowMan=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: rotate(90deg);
  margin: 0rem 0rem 0rem 1rem;


  & > div{
   display: flex;
   justify-content: center;
   align-items: center;


    & > p{
      ${({ theme }) => theme.fonts.kotrahopeCreator}
    }
  }
`