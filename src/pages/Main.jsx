import styled from "styled-components";
import StaticGrid from "./dongsan/StaticGrid";

const Main = () => {
  return (
    <Container>
      <StaticGrid />
    </Container>
  );
  }

export default Main;

const Container = styled.section`
  width: 430px;
`;

