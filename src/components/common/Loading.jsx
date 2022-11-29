import React from 'react'
import styled from 'styled-components';

import {Container} from '../../styles/globalStyle.jsx'
import loadingImg from '../../asset/img/최종로딩기프.gif'

const Loading = ({props}) => {
    return (
            <LoadingContainer>
            <LoadingImg>
                <img src={loadingImg} alt='로딩' />
                <h3> 로딩중 </h3>
            </LoadingImg>
        </LoadingContainer>
        
    )
}

export default Loading;


const LoadingImg = styled.section`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

`

const LoadingContainer=styled(Container)`
position: relative;
    
`