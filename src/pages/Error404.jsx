import React from 'react';
import styled from 'styled-components'
import errorImg from '../asset/img/errorSnow.png'
import {ShortButton} from '../styles/globalStyle'


const Error404 = () => {

    return (
        <>
        <ContainerE>
            <img src={errorImg} alt='error'/>
            <p className>error!</p>
            <ButtonE onClick={()=>{window.history.back(-1)}}> 뒤로가기 </ButtonE>
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
    width: 18rem;
    height: 18rem;
}

& > p{
    ${({ theme }) => theme.fonts.kotrahopeLandingTitle}
    color: #E20000;
    font-size: 1.375rem;
    margin-bottom: 5rem;
}


`

const ButtonE = styled(ShortButton)`
    background-color: #A6C7EF;
    width: 10rem;

    
`



export default Error404;