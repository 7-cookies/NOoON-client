import styled from 'styled-components';
import { ShortButton } from '../../styles/globalStyle';
import Header from '../common/Header';
import {useRecoilState} from "recoil";
import {dongsanstep} from '../../utils/atoms';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const DongSanSelect = () => {
    const navigate=useNavigate();
    const [dongsanBeginData, setDongsanBeginData]=useRecoilState(dongsanstep)
    const [isHover, setIsHover] = useState({first:'', second:'', third:'', fourth:''})

    const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);

    const handleChooseClick =(...data)=>{
        setDongsanBeginData((prev)=>({...prev, background:`${data[0]}`}))
        
        if (data[1]==='first') {setIsHover((prev)=>({...prev, first:'hover', second:'', third:'', fourth:''}))}
        else if (data[1]==='second') {setIsHover((prev)=>({...prev, first:'', second:'hover', third:'', fourth:''}))}
        else if (data[1]==='third') {setIsHover((prev)=>({...prev, first:'', second:'', third:'hover', fourth:''}))}
        else if (data[1]==='fourth') {setIsHover((prev)=>({...prev, first:'', second:'', third:'', fourth:'hover'}))}

    }
    console.log(cookies.accessToken)
    console.log(dongsanBeginData)
    

    const handleSubmit =()=>{
        axios
          .post(
            `${process.env.REACT_APP_BE_SERVER_DOMAIN}api/v1/place`,
            {
              name: dongsanBeginData.name,
              background: parseInt(dongsanBeginData.background),
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${cookies.accessToken}`,
                
              },
            }
          )
          .then((response) => {
            console.log(response)
            sessionStorage.setItem("invitationCode", response.data.data.invitationCode);
            //가져올 때에는 window.sessionStorage.getItem으로 가져옴.
            navigate("/mydongsan");
          });

    }
    


    return (
        <StDongSanSelectWrapper>
            <Header title="동산 배경 정하기" url='' />
            <StDongSanWrapper>
                <img className={isHover.first} src="image/background1.png" alt="동산배경1" onClick={()=>handleChooseClick(1,'first')}/>
                <img className={isHover.second} src="image/background2.png" alt="동산배경2" onClick={()=>handleChooseClick(2, 'second')}/>
                <img className={isHover.third} src="image/background3.png" alt="동산배경3"  onClick={()=>handleChooseClick(3, 'third')}/>
                <img  className={isHover.fourth} src="image/background4.png" alt="동산배경4" onClick={()=>handleChooseClick(4, 'fourth')}/>
                <StShortButton button="submit" onClick={handleSubmit}>확인</StShortButton>
            </StDongSanWrapper>
        </StDongSanSelectWrapper>
    );
};

export default DongSanSelect;

const StDongSanSelectWrapper=styled.section`
`

const StDongSanWrapper = styled.div`
    margin-left:2.4688rem;
    display: flex;
    flex-wrap: wrap;

    & img {
        width: 9.375rem;
        height: 20.375rem;

        margin:1.7188rem 0.7813rem 0rem 0.7813rem;

        border-radius: 0.0625rem;
        border:0.125rem solid #E7E7E7;

    }

    & img:hover, img.hover{
        box-shadow :0rem 0rem 0rem 0.3125rem ${({ theme }) => theme.colors.blue};
    } 
`

const StShortButton = styled(ShortButton)`
    margin: 1.75rem 6.5938rem;
`