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
import {KakaoShare} from '../../utils/kakaoShare.jsx'

import {modalStateC, modalStateT, messageState} from '../../utils/dressRecoil'

const DressUp = () => {
    const [showModal, setModal] = useRecoilState(modalStateC);
    const [modalType, setModalType] = useRecoilState(modalStateT);
    const [ms, setMs] = useRecoilState(messageState);
    const message = useRecoilValue(messageState);
    
    const moveToMessage = () =>{
        setMs(!ms);
    }


    return (
        <>
        <ContainerE>
            {message? <HeaderForDress title={'메세지 남기기'}/>:<Header title={'눈사람 꾸미기'}></Header>}
            <DressZone>
                <SnowMan imgSize={(message===true)?'15':'19.375'} />

                <KakaoShare />

                {message === false ?
                <>
                    <section>
                        <CateMenu 
                        setModal={setModal} 
                        showModal={showModal} 
                        setModalType={setModalType} 
                        modalType={modalType} />

                        <DressPalette 
                        showModal={showModal} 
                        modalType={modalType}/>
                    </section>

                    <NextButton onClick={moveToMessage}> 저장하기 </NextButton>

                </> :
                <>
                <WRMessage />
                </>
                }

            </DressZone>
        </ContainerE >
        
        
        </>
            
        
    );

};

export default DressUp;


const NextButton = styled(ShortButton)`
width: 23.875rem;
/* box-shadow: 0.3vw 0.3vw 0.6vw rgba(0, 0, 0, 0.3); */
/* position: fixed; */
margin-top: -5rem;
z-index: 1;
`




const ContainerE = styled.section`
  position: absolute;
`;


