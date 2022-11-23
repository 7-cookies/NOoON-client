import React from 'react'
import styled from 'styled-components'

import {Container} from '../../styles/globalStyle';
import {SnowMan} from '../../components/DressUp/SnowMan.jsx'

export const Message = () => {

    return (
    <>
    <Container>
        <ImgZone>
            <SnowMan />
        </ImgZone>

        <TextZone></TextZone>
    </Container>

    </>
    )
}

const ImgZone = styled.section`
    
`
const TextZone = styled.section`
    
`
