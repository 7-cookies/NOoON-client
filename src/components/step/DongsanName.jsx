import styled from "styled-components";
import Header from '../common/Header'
import { Input, ShortButton } from "../../styles/globalStyle";
import { useRef, useEffect, useState } from "react";
import {useRecoilState} from "recoil";
import {dongsanstep} from '../../utils/atoms';

const DongsanName = ({ setStep }) => {
    const nameRef=useRef(null);
    const [dongsanBeginData, setDongsanBeginData]=useRecoilState(dongsanstep)

    const handleNextClick=()=>{
        setDongsanBeginData((prev)=>({...prev, name:nameRef.current.value}))
        setStep('DONSAN-NAMING-MODAL');
    }

    return (
        <>
        <StDongsanNameWrapper>
            <Header title="동산이름 정하기" url={(sessionStorage.getItem('stepState')==='true') ? '/login':'/signup'}/>
            <StDongsanName>
                <div>
                    <p>동산 이름을 지어주세요 ☃️</p>
                    <StNameInput placeholder="ex) 눈 펑펑 오는 눈동산 (최대 20자)" ref={nameRef} maxLength='20'/>
                </div> 
                <StButtonWrapper>
                    <ShortButton button="button" className="check" onClick={handleNextClick}>확인</ShortButton>
                </StButtonWrapper>
            </StDongsanName>
        </StDongsanNameWrapper>
        </>

    );
};

export default DongsanName;

const StDongsanNameWrapper = styled.section`
    position: relative;
`
const StDongsanName = styled.div`
    & > div> p{
        margin-left: 2.7888rem;
        margin-bottom: 1.0313rem;
        ${({ theme }) => theme.fonts.kotrahopeCommon}
    }
    & > div{
        margin-top: 16.565rem;
    }
`

const StNameInput = styled(Input)`
    align-items: flex-start;
    text-align: left;

    margin-left: 1.5rem;
    padding-left: 1.2813rem;
`

const StButtonWrapper = styled.div`
    display: flex;
    justify-content: center;

    margin-top: 18.6875rem;
`
