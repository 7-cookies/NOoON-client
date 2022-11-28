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

    const [error, setError] = useState(false)

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
            <StInputWrapper>
                <div className='username'><p>ID</p></div>
                <StLoginInpt placeholder="아이디를 입력해주세요" ref={userNameRef} />
            </StInputWrapper>
                        
            <StInputWrapper>
              <div className='password'><p>PASSWORD</p></div>
                <StLoginInpt type="password" placeholder="숫자 4자리를 입력해주세요" ref={userPasswordRef} />
                <div className='error errorsection'><p>*아이디 또는 비밀번호를 잘못 입력했습니다.</p></div>
                <div className='error'><p>다시 확인해주세요.</p></div>
            </StInputWrapper>
            <ShortButton button="button" className="check" onClick={handleSubmit}>확인</ShortButton>

        </StLoginWrapper>
    );
};

export default Login;

const StLoginWrapper = styled.section`
    & > .check{
        margin: 223px 145px 102px 145px;
    
    & .username {
        margin-top:207.97px;
    }

    & .passowrd {
        margin-top:49.3px;
    }

}
`

const StInputWrapper=styled.div`
    & > div {
      display: flex;

    }

    & div.username {
        margin-top:207.97px;
    }

    & div.password {
        margin-top:49.3px;
    }

    & div.error {
        & > p{
          ${({ theme }) => theme.fonts.kotrahopeError};
        }
    }

    & div.errorsection {
        margin-top: 18px;
        margin-bottom: -18px;
    }


    & > div> p{
        margin-left: 44.62px;
        margin-bottom:16.5px;
        ${({ theme }) => theme.fonts.kotrahopeCommon}
    }
`
const StLoginInpt=styled(Input)`
    align-items: flex-start;
    text-align: left;
    margin-left:24px;
    padding-left: 20.93px;
`