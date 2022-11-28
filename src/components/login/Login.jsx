import styled from 'styled-components';
import { Input, ShortButton } from '../../styles/globalStyle';
import Header from '../common/Header';
import { useRef } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Login = () => {
    const userNameRef=useRef(null)
    const userPasswordRef=useRef(null)
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const navigate=useNavigate();

    const [usernameError, setUsernameError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);

    const handleSubmit=()=>{
        setUsername(userNameRef.current.value)
        setPassword(userNameRef.current.value)

        axios
          .post(
            "api/v1/user/login",
            {
              username: username,
              password: password,
            },
            {
              headers: {
                Authorization: `Bearer ${cookies}`,
              },
              "Content-Type": "application/json",
            }
          )
          .then((response) => {
            console.log(response.data);
            navigate("/");
          });
    };
    

    return (
        <StLoginWrapper>
        <Header title="로그인"/>
        <StLogin>

        <div>
            <p>ID</p> <p className='error'>* 사용 중인 아이디입니다</p>
            <StLoginInpt placeholder="아이디를 입력해주세요" ref={userNameRef} />
        </div>
                    
        <div>
            <p>PASSWORD</p><p className='error'>* 숫자 4자리를 입력해주세요</p>
            <StLoginInpt type="password" placeholder="숫자 4자리를 입력해주세요" ref={userPasswordRef} />
        </div>
        </StLogin>
        <ShortButton button="button" className="check" onClick={handleSubmit}>확인</ShortButton>

    </StLoginWrapper>
    );
};

export default Login;

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

    & > div > p.error{
      ${({ theme }) => theme.fonts.kotrahopeError};
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