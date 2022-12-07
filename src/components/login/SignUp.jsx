import styled from 'styled-components';
import { Input, ShortButton } from '../../styles/globalStyle';
import Header from '../common/Header';
import { useRef, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie'; 
import { dupCheckAPI } from './dupCheckAPI';

const SignUp = () => {
    const userNameRef=useRef(null)
    const userPasswordRef=useRef(null)
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const navigate=useNavigate();

    const [usernameError, setUsernameError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)


    const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);

    //아이디 중복확인 hook
    const [usableId, setUsableId] = useState(false);
    const [alertIdMS, setAlertIdMS] = useState('* 사용 중인 아이디입니다')
    const duplicationIdCheck = () =>{
      dupCheckAPI(username)
      .then((response)=>{
        console.log(response)
        if(response === false){ 
          setAlertIdMS('사용 가능한 아이디입니다.');
          setUsableId(response);
        }
        else{
          setAlertIdMS('** 사용 중인 아이디입니다');
          setUsableId(response);
        }
        console.log('중복 체크 완료')
      })
    }

    const handleSubmit=()=>{
        setUsername(userNameRef.current.value)
        setPassword(userNameRef.current.value)

        axios
          .post(
            "https://www.noonsaram-server.shop/api/v1/user/login",
            {
              username: username,
              password: password,
            }
          )
          .then((response) => {
            // access토큰 저장
            setCookie(response.data.access_token);
            
            navigate("/makedongsan");
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
                <StLoginInpt type="password" placeholder="숫자 4자리를 입력해주세요" ref={userPasswordRef} />
            </StInputWrapper>
            <ShortButton button="button" className="check" onClick={handleSubmit}>확인</ShortButton>
            <ShortButton button="button" className="check" onClick={duplicationIdCheck}>중복확인</ShortButton>

    </StLoginWrapper>

    );
};

export default SignUp;

const StLoginWrapper = styled.section`
    & > .check{
        margin: 223px 145px 102px 145px;
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


    & > div> p{
        margin-left: 44.62px;
        margin-bottom:16.5px;
        ${({ theme }) => theme.fonts.kotrahopeCommon}
    }

    & > div> p.error{
      margin-left: 20.62px;
      ${({ theme }) => theme.fonts.kotrahopeError};
    } 
`

const StLoginInpt=styled(Input)`
    align-items: flex-start;
    text-align: left;
    margin-left:24px;
    padding-left: 20.93px;
`