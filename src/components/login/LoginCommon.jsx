import styled from "styled-components";
import { Input, ShortButton } from "../../styles/globalStyle";

import Header from "../common/Header";


const LoginCommon = (props) => {
    return (
        <StLoginWrapper>
            <Header title={props.title}/>
            <StLogin>

            <div>
                <p>ID</p>
                <LoginInpt placeholder="아이디를 입력해주세요" />
            </div>
                        
            <div>
                <p>PASSWORD</p>
                <LoginInpt placeholder="숫자 4자리를 입력해주세요" />
            </div>
            </StLogin>
            <ShortButton className="check">확인</ShortButton>

        </StLoginWrapper>
    );
};

export default LoginCommon;

const StLoginWrapper = styled.section`
    & > .check{
        margin: 223px 145px 102px 145px;
}
`

const StLogin=styled.div`
    & > div> p{
        margin-left: 44.62px;
        margin-bottom:16.5px;
        ${({ theme }) => theme.fonts.kotrahopeCommon}
    }
    & > div:nth-child(1){
        margin-top:207.97px;
    }

    & > div:nth-child(2){
        margin-top:49.3px;
    }
`
const LoginInpt=styled(Input)`
    align-items: flex-start;
    text-align: left;
    margin-left:24px;
    padding-left: 20.93px;
`