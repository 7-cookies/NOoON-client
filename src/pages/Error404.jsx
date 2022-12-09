import React from 'react';
import styled from 'styled-components'
import errorImg from '../asset/img/errorSnow.png'
import {ShortButton} from '../styles/globalStyle'


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
    width: 15rem;
    height: 15rem;

    margin-bottom: 5rem;
}

& > p{
    ${({ theme }) => theme.fonts.kotrahopeLandingTitle}
    color: #D27979;
    font-size: 1.375rem;
}


`

const ButtonE = styled(ShortButton)`
    background-color: #D27979;

    
`



export default Error404;