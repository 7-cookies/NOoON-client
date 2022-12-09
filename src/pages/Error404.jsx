import React from 'react';
import styled from 'styled-components'
import errorImg from '../asset/img/errorSnow.png'
import {floating} from '../styles/animation.jsx'
import {LongButton} from '../styles/globalStyle'


const Error404 = () => {
    return (
        <>
        <ContainerE>
            <p className='floating'>!ErROr!</p>
            <img src={errorImg} alt='error'/>
            <ButtonE > 뒤로가기 </ButtonE>
        </ContainerE>
        </>
    );
};

const ContainerE = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


width: 26.875rem;
height: 58.25rem;
margin: 0 auto;

& > img{
    width: 26.875rem;
    height: 26.875rem;

    margin-bottom: 5rem;
}

& > p{
    ${({ theme }) => theme.fonts.kotrahopeLandingTitle}
    color: #D27979;
    font-size: 5rem;
}


/* .floating{
        animation-name: ${floating};
        -webkit-animation-name: ${floating};

        animation-duration: 1.5s;	
        -webkit-animation-duration: 1.5s;

        animation-iteration-count: infinite;
        -webkit-animation-iteration-count: infinite;
    } */

`

const ButtonE = styled(LongButton)`
    background-color: #D27979;
    
`



export default Error404;