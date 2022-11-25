import styled from 'styled-components';
import { Input, ShortButton } from '../../styles/globalStyle';
import Header from '../common/Header';
import { useRef, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const userNameRef=useRef(null)
    const userPasswordRef=useRef(null)
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const navigate=useNavigate();


    const handleSubmit=()=>{
        console.log("ddd");
        setUsername(userNameRef.current.value)
        setPassword(userNameRef.current.value)

        axios
          .post(
            "api/v1/user/signup",
            {
              username: username,
              password: password,
            }
          )
          .then((response) => {
            console.log(response.data);
            // access토큰 저장
            window.sessionStorage.setItem("access_token", response.data.access_token);
            alert("추가완료!");
            navigate("/makedongsan");
          });
    };
    

    return (
        <StLoginWrapper>
        <Header title="회원가입"/>
        <StLogin>

        <div>
            <p>ID</p>
            <StLoginInpt placeholder="아이디를 입력해주세요" ref={userNameRef}/>
        </div>
                    
        <div>
            <p>PASSWORD</p>
            <StLoginInpt placeholder="숫자 4자리를 입력해주세요" ref={userPasswordRef}/>
        </div>
        </StLogin>
        <ShortButton button="submit" className="check" onClick={handleSubmit}>확인</ShortButton>

    </StLoginWrapper>

    );
};

export default SignUp;

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
const StLoginInpt=styled(Input)`
    align-items: flex-start;
    text-align: left;
    margin-left:24px;
    padding-left: 20.93px;
`