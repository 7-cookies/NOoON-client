import React from 'react';
import styled from 'styled-components'

import {Container} from '../../styles/globalStyle';

import moveToLeft from '../../asset/icon/Group 88.png'
import moveToRight from '../../asset/icon/Group 89.png'
import base from '../../asset/img/base.png'

const DressUp = () => {
    return (
        
        <Container>
            {/* 상단 여백도 줘야함 */}
            <Header>
                <Arrow src={moveToRight}/>
                눈사람 꾸미기
                <Arrow src={moveToLeft}/>
            </Header>

            <DressZone>
                <BaseContainer>
                    <Base src={base}/>
                </BaseContainer>


                <CategoryContainer>
                    <CateMenuCon>카테고리메뉴</CateMenuCon>
                    <CateItemsCon>카테고리항목</CateItemsCon>
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

    background-color: aliceblue;
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
`

const BaseContainer = styled.section`
display: flex;
justify-content: center;

margin: 0.6389rem 1.6667rem 0;
/* background-color: pink; */

`
const Base = styled.img`
width: 9rem;
height: 9rem;
border: solid black

`

const CategoryContainer = styled.section`
`

const CateMenuCon = styled.section`
`
const CateItemsCon = styled.section`
`