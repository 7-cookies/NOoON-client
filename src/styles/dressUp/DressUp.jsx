import styled from 'styled-components'

// 옷입히기 구역
export const DressZone = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

//옷입히기 구역- 선택 아이템이 장착되는 구역
export const ImgContainer=styled.div`
display: flex;
justify-content: center;
align-items: center;
width: ${(props)=>props.imgSize}rem;
height: ${(props)=>props.imgSize}rem;

/* border: solid black; */

position: relative;
`

export const BaseContainer = styled.section`
display: flex;
justify-content: center;
align-items: center;

position: absolute;
`

export const Base = styled.img`
width: ${(props)=>props.imgSize}rem;
height: ${(props)=>props.imgSize}rem;

z-index: 0;
`

export const Head = styled.img`
z-index: 2;

position: absolute;

width: ${(props)=>props.imgSize}rem;
height: ${(props)=>props.imgSize}rem;
`

export const Eye = styled.img`
z-index: 1;
width: ${(props)=>props.imgSize}rem;
height: ${(props)=>props.imgSize}rem;
`

export const Nose = styled.img`
position: absolute;
width: ${(props)=>props.imgSize}rem;
height: ${(props)=>props.imgSize}rem;
`
export const Item = styled(Nose)`
`
export const Arm = styled(Nose)`
`
export const Mouth = styled(Nose)`
`

//아이템을 선택하는 구역
export const CategoryContainer = styled.section`
width: 26.875rem; 
display: flex;
flex-direction: column;
`

export const CateMenuCon = styled.section`
display: flex;
justify-content: center;

width:26.875rem; 
height: 4.125rem;
`
