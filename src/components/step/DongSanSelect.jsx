import styled from 'styled-components';
import { ShortButton } from '../../styles/globalStyle';
import Header from '../common/Header';
import {useRecoilState} from "recoil";
import {dongsanstep} from '../../utils/atoms';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const DongSanSelect = () => {
    const navigate=useNavigate();
    const [dongsanBeginData, setDongsanBeginData]=useRecoilState(dongsanstep)
    const [isNumClicked, setIsNumClicked] = useState(1)


    const handleChooseClick =(data)=>{
        setDongsanBeginData((prev)=>({...prev, background:data}))
        setIsNumClicked(data)
        console.log("dddd");
        console.log(dongsanBeginData)
    }

    return (
        <StDongSanSelectWrapper>
            <Header title="동산 배경 정하기" />
            <StDongSanWrapper>
                <img src="image/background1.png" alt="동산배경1" num={1} check={isNumClicked} onClick={()=>handleChooseClick(1)}/>
                <img src="image/background2.png" alt="동산배경2" num={2} check={isNumClicked} onClick={()=>handleChooseClick(2)}/>
                <img src="image/background3.png" alt="동산배경3" num={3} check={isNumClicked}  onClick={()=>handleChooseClick(3)}/>
                <img src="image/background4.png" alt="동산배경4" num={4} check={isNumClicked}  onClick={()=>handleChooseClick(4)}/>
                <StShortButton button="submit" onClick={()=>navigate('/grid')}>확인</StShortButton>
            </StDongSanWrapper>
        </StDongSanSelectWrapper>
    );
};

export default DongSanSelect;

const StDongSanSelectWrapper=styled.section`
`

const StDongSanWrapper = styled.div`
    margin-left:39.5px;

    & img {
        width: 150px;
        height: 326px;

        margin:27.5px 12.5px 0 12.5px;

        border-radius: 1px;
        border:2px solid #E7E7E7;

        box-shadow : ${(props)=>props.check===props.num &&(`0px 0px 0px 5px ${({ theme }) => theme.colors.blue}`)};
    }

    & img:hover {
        box-shadow :0px 0px 0px 5px ${({ theme }) => theme.colors.blue};
    }
`

const StShortButton = styled(ShortButton)`
    margin: 28px 105.5px;
`