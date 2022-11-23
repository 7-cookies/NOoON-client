import React from 'react';
import styled from 'styled-components'
import {useRecoilState} from 'recoil'

import {Container} from '../../styles/globalStyle';
import {DressZone, ImgContainer, BaseContainer, Base, Head, Eye, Nose, Item, Arm, Mouth, CategoryContainer, CateMenuCon} from '../../styles/dressUp/DressUp.jsx'
import {CateMenu} from '../../components/DressUp/CateMenu.jsx'
import {DressPalette} from '../../components/DressUp/DressPalette';
import {SnowMan} from '../../components/DressUp/SnowMan.jsx'
import {baseEyes, baseArms, baseHead, baseNose, baseItem, baseMouth, modalStateC, modalStateT} from '../../asset/dressRecoil'


const DressUp = () => {
    //recoilState 선언
    const [eye, setEyes] = useRecoilState(baseEyes);
    const [nose, setNose] = useRecoilState(baseNose);
    const [arm, setArms] = useRecoilState(baseArms);
    const [item, setItem] = useRecoilState(baseItem);
    const [mouth, setMouth] = useRecoilState(baseMouth);
    const [head, setHead] = useRecoilState(baseHead);

    const [showModal, setModal] = useRecoilState(modalStateC);
    const [modalType, setModalType] = useRecoilState(modalStateT);


    // console.log(headImg[0].putOn)
    // console.log(eye[0].Eye)

    return (
        <Container>
            <DressZone>
                <ImgContainer>
                    <SnowMan />
                </ImgContainer>

                <CategoryContainer>
                    <CateMenuCon>
                        <CateMenu setModal={setModal} showModal={showModal} setModalType={setModalType} modalType={modalType} />
                    </CateMenuCon>

                    <DressPalette showModal={showModal} modalType={modalType}/>
                </CategoryContainer>
            </DressZone>
            

        </Container>
            
        
    );
};

export default DressUp;

