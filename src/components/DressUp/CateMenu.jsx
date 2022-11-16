import React from 'react'
import styled from 'styled-components'

import menu from '../../asset/img/삭제예정.png'

const CateMenu = () => {
    return (
    <Menu src={menu}/>
    )
}

export default CateMenu;

const Menu = styled.section`
background-color: #E9F3FF;
width: 4.125rem;
height: 4.125rem;
border-radius: 0.9375rem 0.9375rem 0 0;

/* background-image: url(menu); */
`
