import styled, {keyframes} from "styled-components"
import {LongButton} from "../../styles/globalStyle"
import { useNavigate } from 'react-router-dom';

import {tossing1, tossing2, floating} from '../../styles/animation.jsx'

const Landing = () => {
    const navigate=useNavigate();
    return (    
        <ContainerE>
            <StMainWrapper>
            <p className='floating'>크리스마스에 완성되는 나만의 눈동산</p>
            <h1 className='floating'>내가 만든 눈동산</h1>
            <img src={`${process.env.REACT_APP_S3_URL}kakaoTitle.png`} alt='랜딩이미지' />
            <LongButtonE button="button" className="button1" id='buttonAni' onClick={()=>navigate('/login')}>로그인</LongButtonE>
            <LongButtonE button="button" className="button2" id='buttonAni' onClick={()=>navigate('/signup')}>회원가입</LongButtonE>
            </StMainWrapper>  
        </ContainerE>    
        
    );
};

export default Landing;

const StMainWrapper = styled.section`
    /* background-image: url("image/landingImg.png");
    background-size: 25rem; */
    display: flex;
    justify-content:center;
    flex-direction: column;
    align-items: center;
    padding-top: 10rem;
    position: relative;
    width: 100%;
    /* border: pink solid; */


    & > p{
        ${({ theme }) => theme.fonts.kotrahopeCommon}
        color: ${({ theme }) => theme.colors.grey};
    }
    & > h1{
        margin: 1rem 0rem 0rem 0rem;
        ${({ theme }) => theme.fonts.kotrahopeLandingTitle}
    }
    & > img{
        /* width: 26.875rem; */
        width: 100%;

    }
    & > .button1 {
        /* margin-top: 6.4375rem; */
        margin-bottom: 1.375rem;
        display: flex;
        background-color:${({ theme }) => theme.colors.blue};
        color:white;
        ${({ theme }) => theme.fonts.kotrahopeCommon};


    }
    & > .button2 {
        /* margin-bottom: 4rem; */
        animation-name: ${tossing2};
        -webkit-animation-name: ${tossing2};
    }

    .floating{
        animation-name: ${floating};
        -webkit-animation-name: ${floating};

        animation-duration: 1.5s;	
        -webkit-animation-duration: 1.5s;

        animation-iteration-count: infinite;
        -webkit-animation-iteration-count: infinite;
    }
`
const ContainerE = styled.section`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

/* width: 26.875rem; */
/* height: 58.25rem; */
width: 100%;
/* height: 55rem; */
height: 100vh;

margin: 0 auto;
/* border: solid black; */   
`

const LongButtonE = styled(LongButton)`
`