import styled from 'styled-components';
import { Input, ShortButton } from '../../styles/globalStyle';
import Header from '../common/Header';
import { useRef, useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useCookies, withCookies } from 'react-cookie'; 
import { dupCheckAPI } from './dupCheckAPI';

const SignUp = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const userNameRef=useRef(null)
    const userPasswordRef=useRef(null)

    const navigate=useNavigate();

    const [usernameError, setUsernameError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)


    const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);

    //아이디 중복확인 hook
    const [usableId, setUsableId] = useState(false);
    const [alertIdMS, setAlertIdMS] = useState('* 아이디를 입력해주세요')
    const [alertPwMS, setAlertPwMS] = useState('')


    const handleSubmit=()=>{
      setUsername(userNameRef.current.value)
      setPassword(userPasswordRef.current.value)
      // console.log(username)
      // console.log(password)

        axios
          .post(
            `${process.env.REACT_APP_BE_SERVER_DOMAIN}api/v1/user/signup`,
            {
              username: username,
              password: password,
            },
          )
          .then((response) => {
            // access토큰 저장
            setCookie(response.data.accessToken);
            console.log(response)
            navigate("/makedongsan");
          })
          .catch((error)=>{
            if (error.response.data.message==='존재하는 회원입니다.'){setAlertIdMS('* 사용 중인 아이디입니다')}
              console.log(error.response.data.message)
            
          });
    };


    return (
        <StLoginWrapper>
        <Header title="회원가입"/>
            <StInputWrapper>
                <div className='username'><p>ID</p> <p className='error'>{alertIdMS}</p></div>
                <StLoginInpt placeholder="아이디를 입력해주세요" ref={userNameRef} />
            </StInputWrapper>
                        
            <StInputWrapper>
                <div className='password'><p>PASSWORD</p><p className='error'>* 숫자 4자리를 입력해주세요</p></div>
                <StLoginInpt type="password" placeholder="숫자 4자리를 입력해주세요" ref={userPasswordRef} maxLength='4' />
            </StInputWrapper>

            <ShortButton button="button" className="check" onClick={handleSubmit}>확인</ShortButton>
            
            

    </StLoginWrapper>

    );
};

export default SignUp;

const StLoginWrapper = styled.section`
    & > .check{
        margin: 13.9375rem 9.0625rem 6.375rem 9.0625rem;
    }
`
const StInputWrapper=styled.div`
    & > div {
      display: flex;

    }

    & div.username {
        margin-top: 12.9981rem;
    }

    & div.password {
        margin-top: 3.0813rem;
    }


    & > div> p{
        margin-left: 2.7888rem;
        margin-bottom: 1.0313rem;
        ${({ theme }) => theme.fonts.kotrahopeCommon}
    }

    & > div> p.error{
      margin-left: 1.2888rem;
      ${({ theme }) => theme.fonts.kotrahopeError};
    } 
`

const ButtonWrapper = styled.section`
  display: flex;
  margin: 13.9375rem 4.5rem 6.375rem;

`

const StLoginInpt=styled(Input)`
    align-items: flex-start;
    text-align: left;
    margin-left:1.5rem;
    padding-left: 1.3081rem;
`