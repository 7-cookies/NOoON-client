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

width: 19.375rem;
height: 19.375rem;

/* border: solid green; */
position: relative;
`

export const BaseContainer = styled.section`
display: flex;
justify-content: center;
align-items: center;

position: absolute;
/* margin: 0.6389rem 1.6667rem 2.375rem; */
`

export const Base = styled.img`
width: 19.375rem;
height: 19.375rem;

z-index: 0;
`

export const Head = styled.img`
z-index: 2;

position: absolute;

width: 19.375rem;
height: 19.375rem;
`

export const Eye = styled.img`
/* border: solid yellow; */
z-index: 1;

width: 19.375rem;
height: 19.375rem;
`

export const Nose = styled.img`
/* border: solid pink; */
position: absolute;

width: 19.375rem;
height: 19.375rem;
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
/* border: solid purple; */
`

export const CateMenuCon = styled.section`
display: flex;
justify-content: center;

width:26.875rem; 
height: 4.125rem;
`
