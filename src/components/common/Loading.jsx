import React from 'react'
import styled from 'styled-components';

import {Container} from '../../styles/globalStyle.jsx'
import loadingImg from '../../asset/img/최종로딩기프.gif'

const Loading = ({props}) => {
    return (
        <LoadingContainer>
            <LoadingImg>
                <img id="loading" src={loadingImg} alt='로딩중' />
            </LoadingImg>
        </LoadingContainer>
        
    )
}

export default Loading;


const LoadingImg = styled.section`
display: flex;
justify-content: center;
align-items: center;
text-align: center;

#loading{ 
    width: 25rem;
    /* border-radius: 15rem; */
    
}

`


const LoadingContainer=styled(Container)`
display: flex;
justify-content: center;
align-items: center; 



`