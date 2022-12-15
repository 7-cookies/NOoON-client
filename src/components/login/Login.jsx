import styled from 'styled-components';
import { Input, ShortButton } from '../../styles/globalStyle';
import Header from '../common/Header';
import { useRef } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import block from '../../asset/icon/Group 142.png'
import visible from '../../asset/icon/Vector.png'

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

    const [PWState, setPWState] = useState(false);
    const [PWImg, setPWImg] = useState(block);
    const [PWType, setPWType] = useState('password');

    const passwordCheck = () => {
      setPWState(!PWState);
      (PWState ? setPWImg(block) : setPWImg(visible))
      (PWState ? setPWType('password') : setPWType('text'))

      console.log(PWImg)

    }

    const handleSubmit=()=>{
        setUsername(userNameRef.current.value)
        setPassword(userPasswordRef.current.value)
        sessionStorage.setItem('stepState',true);
        console.log(sessionStorage.getItem('stepState'));

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
              <div className='passwordWrapper'>
                <StLoginInpt type={PWType} placeholder="숫자 4자리를 입력해주세요" ref={userPasswordRef} maxLength='4' />
                <img src={PWImg} alt={'비밀번호표시'} onClick={passwordCheck}/>
              </div>
              <div className='pwAlert'>
                <div className='error errorsection1'><p>{alertMS1}</p></div>
                <div className='error errorsection2'><p>{alertMS2}</p></div>
              </div>
              
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
        /* margin-bottom: -1.125px; */
    }

    & div.errorsection2 {
        margin-top: 20px;
    }

    & div.pwAlert{
        display: flex;
        flex-direction: column;
        margin-left: 2.7888rem;
        margin-bottom: 1.0313rem;
        /* border: solid black; */
      }


    & > div> p{
        margin-left: 2.7888rem;
        margin-bottom: 1.0313rem;
        ${({ theme }) => theme.fonts.kotrahopeCommon}
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
`
const StLoginInpt=styled(Input)`
    align-items: flex-start;
    text-align: left;
    margin-left:1.5rem;
    padding-left: 1.3081rem;
`