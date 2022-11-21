import React from 'react';
import styled from 'styled-components'
import {useRecoilState} from 'recoil'

import {Container} from '../../styles/globalStyle';
import {CateMenu} from '../../components/dressUp/CateMenu.jsx'
import {DressPalette} from '../../components/dressUp/DressPalette';
import {baseEyes, baseArms, baseHead, baseNose, baseItem, baseMouth, modalStateC, modalStateT} from '../../asset/dressRecoil'

import base from '../../asset/img/base.png'
import {headImg, eyeImg, noseImg, armImg, mouthImg, accImg} from '../../asset/imgData.jsx'

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


    console.log(headImg[0].putOn)
    console.log(eye[0].Eye)

    return (
        
        <Container>

            <DressZone>
                <ImgContainer>
                    <BaseContainer>
                        <Base src={base}/>
                    </BaseContainer>

                    <Head src={headImg[head[0].Head].putOn} alt='머리'></Head>
                    <Eye src={eyeImg[eye[0].Eye].putOn} alt='눈'></Eye>
                    <Nose src={noseImg[nose[0].Nose].putOn} alt='코'></Nose>
                    <Arm src={armImg[arm[0].Arm].putOn} alt='팔'></Arm>
                    <Mouth src={mouthImg[mouth[0].Mouth].putOn} alt='입'></Mouth>
                    <Item src={accImg[item[0].Item].putOn} alt='소품'></Item>

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

// 옷입히기 구역
const DressZone = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

//옷입히기 구역- 선택 아이템이 장착되는 구역
const ImgContainer=styled.div`
display: flex;
justify-content: center;
align-items: center;

width: 19.375rem;
height: 19.375rem;

/* border: solid green; */
position: relative;
`

const BaseContainer = styled.section`
display: flex;
justify-content: center;
align-items: center;

position: absolute;
/* margin: 0.6389rem 1.6667rem 2.375rem; */
`

const Base = styled.img`
width: 19.375rem;
height: 19.375rem;

z-index: 0;
`

const Head = styled.img`
z-index: 2;

position: absolute;

width: 19.375rem;
height: 19.375rem;
`

const Eye = styled.img`
/* border: solid yellow; */
z-index: 1;

width: 19.375rem;
height: 19.375rem;
`

const Nose = styled.img`
/* border: solid pink; */
position: absolute;

width: 19.375rem;
height: 19.375rem;
`
const Item = styled(Nose)`
`
const Arm = styled(Nose)`
`
const Mouth = styled(Nose)`
`



//아이템을 선택하는 구역
const CategoryContainer = styled.section`
width: 26.875rem; 
/* border: solid purple; */
`

const CateMenuCon = styled.section`
display: flex;
justify-content: center;

width:26.875rem; 
height: 4.125rem;
`
