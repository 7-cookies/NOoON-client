import styled from "styled-components";
import backArrow from "../../asset/icon/arrow.svg";

const Header = (props) => {
  return (
    <>
      <Icon src={backArrow} alt="#" />

      <StHeaderWrapper>
        <StHeader>
          <h1>{props.title}</h1>
        </StHeader>
      </StHeaderWrapper>
    </>
  );
};

export default Header;

const Icon = styled.img`
  position: absolute;
  z-index: 2;

  padding: 4.3125rem 0 0 0.875rem;
`;

const StHeaderWrapper = styled.header`
  display: flex;
  justify-content: center;

  width: 26.875rem;
  height: 7.2188rem;

  ${({ theme }) => theme.fonts.kotrahopeCommon}
`;

const StHeader = styled.section`
  width: 23.875rem;
  height: 115px;
  display: flex;
  justify-content: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};

  & > h1 {
    padding-top: 4.895rem;
    font-size: 1.5rem;
  }
`;
