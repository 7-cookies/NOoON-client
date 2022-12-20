import React, {useState} from 'react';
import styled from 'styled-components'
import {useRecoilState, useRecoilValue} from 'recoil'

import {Container, ShortButton} from '../../styles/globalStyle';
import {DressZone} from '../../styles/dressUp/DressUp.jsx'

import CateMenu from '../../components/DressUp/CateMenu.jsx'
import DressPalette from '../../components/DressUp/DressPalette';
import SnowMan from '../../components/DressUp/SnowMan.jsx'
import WRMessage from '../../components/DressUp/WRMessage.jsx'
import HeaderForDress from '../../components/common/HeaderForDress.jsx'
import Header from '../../components/common/Header.jsx'
import backArrow from "../../asset/icon/arrow.svg";

import {modalStateC, modalStateT, messageState} from '../../utils/dressRecoil'
import { useParams } from 'react-router-dom';
import VisitorDongsan from '../../components/visitor/VisitorDongsan';

const DressUp = () => {
    const [showModal, setModal] = useRecoilState(modalStateC);
    const [modalType, setModalType] = useRecoilState(modalStateT);
    const [ms, setMs] = useRecoilState(messageState);
    const message = useRecoilValue(messageState);
    
    const moveToMessage = () =>{
        setMs(!ms);
    }

    // let {invitationCode}=useParams();
    // let {invitationCode}=window.location.pathname;
    const invitationCode = window.location.pathname;
    

    const [step, setStep] = useState(false);

    const moveToDongsan = () =>{
        setStep(true);
    }
    

    if (step){return(<VisitorDongsan setStep='VISITOR-DONGSAN'/>)}
    else{
    return (
        <>
        {/* <ContainerE> */}
            {message ? 
            <HeaderForDress title={'메시지 남기기'} />
            :
            <>
            <StHeaderWrapper>
            <Icon src={backArrow} alt="#" onClick={moveToDongsan} />
                <StHeader>
                    <h1>눈사람 꾸미기</h1>
                </StHeader>
            </StHeaderWrapper>
            </>
            }
            <DressZone>
                <SnowMan imgSize={(message===true)?'15':'19.375'} />


                {message === false ?
                <>
                    <section className='menuCenter'>
                        <CateMenu 
                        setModal={setModal} 
                        showModal={showModal} 
                        setModalType={setModalType} 
                        modalType={modalType} />

                        <DressPalette 
                        showModal={showModal} 
                        modalType={modalType}/>
                    </section>

                    <StButtonWrapper>
                        <NextButton onClick={moveToMessage}> 저장하기 </NextButton>
                    </StButtonWrapper>

                </> :
                <>
                <WRMessage />
                </>
                }

            </DressZone>
        {/* </ContainerE > */}
        
        
        </>
            
        
    );}

};

export default DressUp;


const NextButton = styled(ShortButton)`
    width: 23.875rem;
    /* margin-top: -5rem; */
    z-index: 1;
`
const StButtonWrapper=styled.section`
    display: flex;
    justify-content: space-between;

    position: fixed;
    z-index: 10;
    
    /* height: 3rem; */
    bottom: 1rem;

`
const ContainerE = styled.section`
    position: absolute;
    display: flex;
    flex-direction: column;
`;

const Icon = styled.img`
    position: relative;
    z-index: 2;
    width: 1.75rem;
    margin: 4.7rem 0 0 0;
    left: 1.5rem;
`;


const StHeaderWrapper = styled.header`
    display: flex;
    justify-content: center;

    width: 26.875rem;
    height: 7.2188rem;

    ${({ theme }) => theme.fonts.kotrahopeCommon}
    margin-left: -1rem;
`;

const StHeader = styled.section`
    width: 23.875rem;
    height: 7.1875rem;
    display: flex;
    justify-content: center;

    border-bottom: 0.0625rem solid ${({ theme }) => theme.colors.grey};

    & > h1 {
    padding-top: 4.895rem;
    font-size: 1.5rem;
    }
`;




