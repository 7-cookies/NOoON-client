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
            <LongButton button="button" className="button1" id='buttonAni' onClick={()=>navigate('/login')}>로그인</LongButton>
            <LongButton button="button" className="button2" id='buttonAni' onClick={()=>navigate('/signup')}>회원가입</LongButton>
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

    & > p{
        ${({ theme }) => theme.fonts.kotrahopeCommon}
        color: ${({ theme }) => theme.colors.grey};
    }
    & > h1{
        /* margin: 1rem 0 20rem 0; */
        margin: 1rem 0 0rem 0;
        ${({ theme }) => theme.fonts.kotrahopeLandingTitle}
    }
    & > img{
        width: 26.875rem;
        height: 26.875rem;
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
        margin-bottom: 4.625rem;
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

width: 26.875rem;
/* height: 58.25rem; */
margin: 0 auto;
        
    `