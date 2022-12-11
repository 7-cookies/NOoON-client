import styled from 'styled-components';
import { Input, ShortButton } from '../../styles/globalStyle';
import Header from '../common/Header';
import { useRef, useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useCookies, withCookies } from 'react-cookie'; 
import { dupCheckAPI } from './dupCheckAPI';
import block from '../../asset/icon/Group 142.png'
import visible from '../../asset/icon/Vector.png'

const SignUp = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const userNameRef=useRef(null)
    const userPasswordRef=useRef(null)

    const navigate=useNavigate();

    const [usernameError, setUsernameError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);
    const [usableId, setUsableId] = useState(false);
    const [alertIdMS, setAlertIdMS] = useState('* 영문, 숫자, 특수기호를 사용하여 입력해주세요')
    const [alertPwMS, setAlertPwMS] = useState('')
    const [PWState, setPWState] = useState(true);
    const [PWImg, setPWImg] = useState(block);
    const [PWType, setPWType] = useState('password');

    const onChangePW = (e) =>{
      console.log(e.target.value.length)
      const passwordLen = e.target.value.length;
      if(passwordLen<4){setAlertPwMS('* 숫자 4자리를 입력해주세요')}
      else {setAlertPwMS('')}
    }

    const passwordCheck = () => {
      setPWState(!PWState);
      (PWState ? setPWImg(block) : setPWImg(visible))
      (PWState ? setPWType('password') : setPWType('text'))

      console.log(PWImg)

    }

  
    const handleSubmit=()=>{
      setUsername(userNameRef.current.value)
      setPassword(userPasswordRef.current.value)

        axios
          .post(
            `${process.env.REACT_APP_BE_SERVER_DOMAIN}api/v1/user/signup`,
            {
              username: userNameRef.current.value,
              password: userPasswordRef.current.value,
            },
          )
          .then((response) => {
            // access토큰, username 저장
            console.log(response);
            setCookie("accessToken", response.data.data.accessToken);
            sessionStorage.setItem("username", response.data.data.username);
            navigate("/makedongsan");
          })
          .catch((error)=>{
            if (error.response.data.message==='존재하는 회원입니다.'){setAlertIdMS('* 사용 중인 아이디입니다')}
            console.log(error.response.data.message)
            
          });
    };

    return (
        <StLoginWrapper>
        <Header title="회원가입" url="/"/>
            <StInputWrapper>
                <div className='username'><p>ID</p> <p className='error'>{alertIdMS}</p></div>
                <StLoginInpt placeholder="아이디를 입력해주세요" ref={userNameRef} />
            </StInputWrapper>
                        
            <StInputWrapper>
                <div className='password'><p>PASSWORD</p><p className='error' >{alertPwMS}</p></div>
                <div className='passwordWrapper'>
                  <StLoginInpt type={PWType} placeholder="숫자 4자리를 입력해주세요" ref={userPasswordRef} maxLength='4' onChange={onChangePW} />
                  <img src={PWImg} alt={'비밀번호표시'} onClick={passwordCheck}/>
                </div>
                
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

    & > div.passwordWrapper{
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      & > img {
        width: 1.125em;
        height: 0.75rem;
        position: relative;

        left: -3rem;
      }
      
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