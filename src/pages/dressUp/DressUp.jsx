import React from 'react';
import styled from 'styled-components'
import {useRecoilState} from 'recoil'

import {Container} from '../../styles/globalStyle';
import {CateMenu} from '../../components/dressUp/CateMenu.jsx'
import {DressPalette} from '../../components/dressUp/DressPalette';
import {dressImg} from "../../asset/imgData"
import {baseEyes, baseArms, baseHead, baseNose, baseItem, baseMouth} from '../../asset/dressRecoil'

import moveToLeft from '../../asset/icon/Group 88.png'
import moveToRight from '../../asset/icon/Group 89.png'
import base from '../../asset/img/base.png'

const DressUp = () => {
    //recoilState 선언
    const [eye, setEyes] = useRecoilState(baseEyes);
    const [nose, setNose] = useRecoilState(baseNose);
    const [arm, setArms] = useRecoilState(baseArms);
    const [item, setItem] = useRecoilState(baseItem);
    const [mouth, setMouth] = useRecoilState(baseMouth);
    const [head, setHead] = useRecoilState(baseHead);

    return (
        
        <Container>
            <Header>
                <Arrow src={moveToRight}/>
                눈사람 꾸미기
                <Arrow src={moveToLeft}/>
            </Header>

            <DressZone>
                <ImgContainer>
                    <BaseContainer>
                        <Base src={base}/>
                    </BaseContainer>

                    <Eye src={eye[0].Eyes} alt='눈'></Eye>
                    <Nose src={nose[0].Nose} alt='코'></Nose>
                    <Head src={head[0].Head} alt='머리'></Head>
                    <Arm src={arm[0].Arms} alt='팔'></Arm>
                    <Mouth src={mouth[0].Mouth} alt='입'></Mouth>
                    <Item src={item[0].Item} alt='소품'></Item>

                </ImgContainer>


                <CategoryContainer>
                    <CateMenuCon>
                        <CateMenu />
                    </CateMenuCon>

                    <DressPalette/>
                </CategoryContainer>
            </DressZone>
            

        </Container>
            
        
    );
};

export default DressUp;

// 헤더
const Header = styled.section `
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 0.6111rem;

    border-bottom: solid 0.0278rem #CACACA;
    padding: 0.4444rem 0.3889rem;
`

const Arrow = styled.img`
    width: 1rem;
    height: 1rem;
`

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

const Head = styled(Nose)`
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
