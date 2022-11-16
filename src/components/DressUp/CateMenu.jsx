import React from 'react'
import styled from 'styled-components'

import menu from '../../asset/img/삭제예정.png'

const CateMenu = () => {
    return (
    <Menu>
        <MenuImg url={menu}/>
    </Menu>
    )
}

export default CateMenu;

const Menu = styled.section`
display: flex;
justify-content: center;
align-items: center;

background-color: #E9F3FF;
width: 4.125rem;
height: 4.125rem;

border-radius: 0.9375rem 0.9375rem 0 0;
margin: 0;
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
