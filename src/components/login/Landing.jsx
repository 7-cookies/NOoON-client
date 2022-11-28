import styled, {keyframes} from "styled-components"
import {LongButton} from "../../styles/globalStyle"
import { useNavigate } from 'react-router-dom';
import MessageModal from "../message/MessageModal";

import {tossing1, tossing2, floating} from '../../styles/animation.jsx'

const Landing = () => {
    const navigate=useNavigate();
    return (
        <StMainWrapper>
            <MessageModal/>
            <p>크리스마스에 완성되는 나만의 눈동산</p>
            <h1>내가 만든 눈동산</h1>
            <LongButton button="button" className="button1" onClick={()=>navigate('/login')}>로그인</LongButton>
            <LongButton button="button" className="button2" onClick={()=>navigate('/signup')}>회원가입</LongButton>

            <p className='floating'>크리스마스에 완성되는 나만의 눈동산</p>
            <h1 className='floating'>내가 만든 눈동산</h1>
            <LongButton button="button" className="button1" id='buttonAni' onClick={()=>navigate('/login')}>로그인</LongButton>
            <LongButton button="button" className="button2" id='buttonAni' onClick={()=>navigate('/signup')}>회원가입</LongButton>

        </StMainWrapper>
    );
};

export default Landing;

const StMainWrapper = styled.section`
    background-image: url("image/landingImg.png");
    background-size: 430px;
    display: flex;
    justify-content:center;
    flex-direction: column;
    align-items: center;

    padding-top: 11.63rem;

    & > p{
        ${({ theme }) => theme.fonts.kotrahopeCommon}
        color: ${({ theme }) => theme.colors.grey};
    }
    & > h1{
        margin: 1rem 0 20rem 0;
        ${({ theme }) => theme.fonts.kotrahopeLandingTitle}
    }
    & > .button1 {
        margin-top: 6.4375rem;
        margin-bottom: 1.375rem;
        display: flex;
        background-color:${({ theme }) => theme.colors.blue};
        color:white;
        ${({ theme }) => theme.fonts.kotrahopeCommon};

        animation-name: ${tossing1};
        -webkit-animation-name: ${tossing1};

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

    #buttonAni{	
        animation-duration: 2.5s;	
        -webkit-animation-duration: 2.5s;
        animation-iteration-count: infinite;
        -webkit-animation-iteration-count: infinite;
    }



`