import React, {useState} from 'react'
import styled from 'styled-components'

import eyeI from '../../asset/icon/menuIcon/eyeIcon.png'
import headI from '../../asset/icon/menuIcon/headIcon.png'
import armI from '../../asset/icon/menuIcon/armIcon.png'
import mouthI from '../../asset/icon/menuIcon/mouthIcon.png'
import noseI from '../../asset/icon/menuIcon/noseIcon.png'
import accI from '../../asset/icon/menuIcon/accIcon.png'


// https://goddaehee.tistory.com/303
const menuData = [
    {categoryName : 'head', url : headI},
    {categoryName : 'eye', url : eyeI },
    {categoryName : 'nose', url : noseI},
    {categoryName : 'mouth', url : mouthI},
    {categoryName : 'arm', url : armI},
    {categoryName : 'accessary', url : accI}
]


const CateMenu = () => {
    const [cateNum, setCateNum] = useState(0);

    return (

        menuData.map(index=>(
            <Menu 
                key={index + 'category'} 
                onClick={()=>{setCateNum(index);}} 
                check={index} 
                num={cateNum}>
                    <MenuImg  url={index.url} />
            </Menu>
        ))

    )
}

export default CateMenu;


const Menu = styled.section`
display: flex;
justify-content: center;
align-items: center;

background-color: ${(props)=>(props.check === props.num ? '#D6E2F0' : '#E9F3FF')};
width: 4.125rem;
height: 4.125rem;
top: ${(props)=>(props.check === props.num ? 0 : 0.625)}rem;
position: relative;

border-radius: 0.9375rem 0.9375rem 0 0;
margin: 0 0.15rem;
padding: 0;
`

const MenuImg = styled.section`
width: 3.1875rem;
height: 3.1875rem;

background-image: url(${(props)=>props.url});
background-position: center;
background-repeat: no-repeat;
background-size: cover;



`
