import React, {useState} from 'react';
import styled from 'styled-components'
import {useRecoilState} from 'recoil'

import {Container} from '../../styles/globalStyle';
import {DressZone, CategoryContainer} from '../../styles/dressUp/DressUp.jsx'

import CateMenu from '../../components/DressUp/CateMenu.jsx'
import DressPalette from '../../components/DressUp/DressPalette';
import SnowMan from '../../components/DressUp/SnowMan.jsx'
import WRMessage from '../../components/DressUp/WRMessage.jsx'

import {modalStateC, modalStateT} from '../../asset/dressRecoil'


const DressUp = () => {
    const [showModal, setModal] = useRecoilState(modalStateC);
    const [modalType, setModalType] = useRecoilState(modalStateT);

    const [message, setMessage] = useState(false);
    const [imgSize, setImgSize] = useState(19.375);

    const moveToMessage = () =>{
        setMessage(!message);
    }

    
    
    return (
        <Container>
            <DressZone>
                <SnowMan imgSize={(message===true)?'15':'19.375'} />

                {message === false ?
                <>
                <CategoryContainer>
                    <CateMenu 
                    setModal={setModal} 
                    showModal={showModal} 
                    setModalType={setModalType} 
                    modalType={modalType} />

                    <DressPalette 
                    showModal={showModal} 
                    modalType={modalType}/>

                </CategoryContainer>

                </> :

                <WRMessage />
                }

            <button onClick={moveToMessage} header='메시지 남기기'> 메시지 작성 </button>
            </DressZone>
        </Container>
            
        
    );
};

export default DressUp;

