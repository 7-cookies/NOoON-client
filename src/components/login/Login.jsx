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
    const [alertMS1, setAlertMS1] = useState('')
    const [alertMS2, setAlertMS2] = useState('')
    const navigate=useNavigate();

    const [error, setError] = useState(false)

    const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);

    const handleSubmit=()=>{
        setUsername(userNameRef.current.value)
        setPassword(userPasswordRef.current.value)

        axios
          .post(
            `${process.env.REACT_APP_BE_SERVER_DOMAIN}api/v1/user/signin`,
            {
              username: userNameRef.current.value,
              password: userPasswordRef.current.value,
            }
            // ,

            // {
            //   headers: {
            //     "Content-Type": "application/json",
            //     Authorization: `Bearer ${cookies.accessToken}`,
                
            //   },
              // "Content-Type": "application/json",
            // }
          )
          .then((response) => {
            console.log(response.data);
            console.log(response);
            window.sessionStorage.setItem('username', userNameRef.current.value);
            (response.data.data.hasPlace)==="NO_PLACE" ? navigate('/makedongsan') : navigate("/mydongsan", 
            {state:{accessToken:response.data.data.accessToken,invitationCode:response.data.data.hasPlace}},
            window.sessionStorage.setItem('invitationCode', response.data.data.hasPlace));
            
          })
          .catch(error=>{
            setAlertMS1('* 아이디 또는 비밀번호를 잘못 입력했습니다.')
            setAlertMS2('다시 확인해주세요.')
            console.log(error)
          });
    };

    

    return (
        <StLoginWrapper>
            <Header title="로그인" url='/'/>
            <StInputWrapper>
                <div className='username'><p>ID</p></div>
                <StLoginInpt placeholder="아이디를 입력해주세요" ref={userNameRef} />
            </StInputWrapper>
                        
            <StInputWrapper>
              <div className='password'><p>PASSWORD</p></div>
                <StLoginInpt type="password" placeholder="숫자 4자리를 입력해주세요" ref={userPasswordRef} maxLength='4' />
                <div className='error errorsection1'><p>{alertMS1}</p></div>
                <div className='error errorsection2'><p>{alertMS2}</p></div>
            </StInputWrapper>
            <ShortButton button="button" className="check" onClick={handleSubmit}>확인</ShortButton>

        </StLoginWrapper>
    );
};

export default Login;

const StLoginWrapper = styled.section`
    & > .check{
        margin: 10.625rem 9.0625rem 16.37rem 9.0625rem;
    
    & .username {
        margin-top:12.9981rem;
    }

    & .passowrd {
        margin-top:3.0813rem;
    }

}
`

const StInputWrapper=styled.div`
    & > div {
      display: flex;

    }

    & div.username {
        margin-top:12.9981rem;
    }

    & div.password {
        margin-top:3.0813rem;
    }

    & div.error {
        & > p{
          position: absolute;
          z-index: 3;
          ${({ theme }) => theme.fonts.kotrahopeError};
        }
    }

    & div.errorsection1 {
        margin-top: 1.125rem;
        margin-bottom: -1.125px;
    }

    & div.errorsection2 {
      margin-top: 17px;
    }


    & > div> p{
        margin-left: 2.7888rem;
        margin-bottom: 1.0313rem;
        ${({ theme }) => theme.fonts.kotrahopeCommon}
    }
`
const StLoginInpt=styled(Input)`
    align-items: flex-start;
    text-align: left;
    margin-left:1.5rem;
    padding-left: 1.3081rem;
`