import styled from "styled-components"
import {LongButton} from "../styles/globalStyle"

const Main = () => {
    return (
        <StMainWrapper>
            <p>크리스마스에 완성되는 나만의 눈동산</p>
            <h1>내가 만든 눈동산</h1>
            <img src="#" alt="#"/>
            <LongButton className="button1">내 동산 보러가기</LongButton>
            <LongButton className="button2">내 동산 만들기</LongButton>
        </StMainWrapper>

    );
};

export default Main;

const StMainWrapper = styled.section`
    background: url("image/landingImg.png");
    display: flex;
    justify-content:center;
    flex-direction: column;
    align-items: center;

    padding-top: 11.63rem;

    & > p{
        font-size:1rem;

    }
    & > h1{
        font-size:3rem;
    }
    & > .button1 {
        margin-top: 6.4375rem;
        margin-bottom: 1.375rem;
    }
    & > .button2 {
        margin-bottom: 4.625rem;
    }

`