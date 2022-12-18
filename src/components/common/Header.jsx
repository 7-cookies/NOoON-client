import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import backArrow from "../../asset/icon/arrow.svg";
import {useState} from 'react'

const Header = (props) => {
    const navigate=useNavigate();

    const handleBackClick=()=>{
        navigate(`${props.url}`);

        if (props.url===''){alert('동산 이름을 한번 정하면 수정할 수 없어요🥲')}
    }

    return (
        <>       


        <StHeaderWrapper>
        <Icon src={backArrow} alt="#" onClick={handleBackClick} />

            <StHeader>
                <h1>{props.title}</h1>
            </StHeader>
        </StHeaderWrapper>
        </>

    );
};

export default Header;

const Icon = styled.img`
  position: relative;
  z-index: 2;
  width: 1.75rem;
  margin: 4.7rem 0 0 0;
  left: 1.5rem;
`;


const StHeaderWrapper = styled.header`
  display: flex;
  justify-content: center;

  width: 26.875rem;
  height: 7.2188rem;

  ${({ theme }) => theme.fonts.kotrahopeCommon}

  margin-left: -1rem;
`;

const StHeader = styled.section`
  width: 23.875rem;
  height: 7.1875rem;
  display: flex;
  justify-content: center;

  border-bottom: 0.0625rem solid ${({ theme }) => theme.colors.grey};

  & > h1 {
    padding-top: 4.895rem;
    font-size: 1.5rem;
  }
`;
