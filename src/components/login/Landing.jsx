import styled from "styled-components"
import {LongButton} from "../../styles/globalStyle"

const Landing = () => {
    const URL= process.env.REACT_APP_S3_URL
    
    console.log(process.env.REACT_APP_BACKGROUND);
    window.Buffer = window.Buffer || require("buffer").Buffer;

    const config = {
        bucketName:process.env.REACT_APP_BUCKET_NAME,
        region:process.env.REACT_APP_REGION,
        accessKeyId:process.env.REACT_APP_ACCESS,
        secretAccessKey:process.env.REACT_APP_SECRET,
    }

    return (
        <StMainWrapper>
            <h1>{URL}</h1>
            <p>크리스마스에 완성되는 나만의 눈동산</p>
            <h1>내가 만든 눈동산</h1>
            <LongButton button="button" className="button1">내 동산 보러가기</LongButton>
            <LongButton button="button" className="button2">내 동산 만들기</LongButton>
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
        ${({ theme }) => theme.fonts.kotrahopeCommon}
    }
    & > .button2 {
        margin-bottom: 4.625rem;
    }

`