import styled from "styled-components";

const Header = (title) => {
    return (
        <>
        <Icon src="../../asset/icon/arrow.svg" alt="#" />

        <StHeaderWrapper>
            <StHeader>
                <h1>{title}</h1>
            </StHeader>
        </StHeaderWrapper>
        </>

    );
};

export default Header;

const Icon=styled.img`
    position: absolute;
    z-index: 2;

    margin: 4.3125 0 0 0.875rem;
`

const StHeaderWrapper=styled.header`
    display: flex;
    justify-content: center;
`

const StHeader=styled.section`
    width: 23.875rem;
    height: 0.9375rem;

    border-bottom: 1px solid;

    & > h1{
        margin-top: 4.895rem;
    }
`