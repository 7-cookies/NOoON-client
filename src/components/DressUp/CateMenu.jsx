import React, {useState} from 'react'
import styled from 'styled-components'

import menu from '../../asset/img/삭제예정.png'

// https://goddaehee.tistory.com/303
const menuData = [
    {categoryName : 'head', url : menu},
    {categoryName : 'eye', url : menu },
    {categoryName : 'nose', url : menu},
    {categoryName : 'mouth', url : menu},
    {categoryName : 'arm', url : menu},
    {categoryName : 'accessary', url : menu}
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
/* height: ${(props)=>(props.check === props.num ? 4.125 : 4.75)}rem; */
top: ${(props)=>(props.check === props.num ? 0 : 0.625)}rem;
/* top: 0.625rem;*/
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
