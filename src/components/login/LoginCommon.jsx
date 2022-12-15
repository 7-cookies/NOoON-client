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
                <StLoginInpt placeholder="아이디를 입력해주세요" />
            </div>
                        
            <div>
                <p>PASSWORD</p>
                <StLoginInpt placeholder="숫자 4자리를 입력해주세요" />
            </div>
            </StLogin>
            <ShortButton button="button" className="check">확인</ShortButton>

        </StLoginWrapper>
    );
};

export default LoginCommon;

const StLoginWrapper = styled.section`
    & > .check{
        margin: 13.9375rem 9.0625rem 6.375rem 9.0625rem;
}
`

const StLogin=styled.div`
    & > div> p{
        margin-left: 2.7888rem;
        margin-bottom: 1.0313rem;
        ${({ theme }) => theme.fonts.kotrahopeCommon}
    }
    & > div:nth-child(1){
        margin-top: 12.9981rem;
    }

    & > div:nth-child(2){
        margin-top: 3.0813rem;
    }
`
const StLoginInpt=styled(Input)`
    align-items: flex-start;
    text-align: left;
    margin-left: 1.5rem;
    padding-left: 1.3081rem;
`