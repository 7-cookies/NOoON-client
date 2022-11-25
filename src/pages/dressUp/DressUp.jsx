import React, {useState} from 'react';
import styled from 'styled-components'
import {useRecoilState} from 'recoil'

import {Container, ShortButton} from '../../styles/globalStyle';
import {DressZone, CategoryContainer} from '../../styles/dressUp/DressUp.jsx'

import CateMenu from '../../components/DressUp/CateMenu.jsx'
import DressPalette from '../../components/DressUp/DressPalette';
import SnowMan from '../../components/DressUp/SnowMan.jsx'
import WRMessage from '../../components/DressUp/WRMessage.jsx'
import Header from '../../components/common/Header.jsx'

import {modalStateC, modalStateT} from '../../asset/dressRecoil'


const DressUp = () => {
    const [showModal, setModal] = useRecoilState(modalStateC);
    const [modalType, setModalType] = useRecoilState(modalStateT);
    const [message, setMessage] = useState(false);


    const moveToMessage = () =>{
        setMessage(!message);
    }

    
    return (
        <Container>
            <Header title={(message===true)?'눈사람 꾸미기':'메세지 남기기'}/>
            <DressZone>
                <SnowMan imgSize={(message===true)?'15':'19.375'} />

                {message === false ?
                <>
                <CategoryContainer>
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

                    <NextButton onClick={moveToMessage}> 다음 </NextButton>

                </CategoryContainer>

                </> :

                <WRMessage />
                }

            </DressZone>
        </Container>
            
        
    );
};

export default DressUp;

const NextButton = styled(ShortButton)`
margin: auto;
position: fixed;
z-index: 5;


`

