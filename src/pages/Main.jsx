import styled from "styled-components"
import {Button} from "../styles/globalStyle"

const Main = () => {
    return (
        <Container>
            <Button>안녕</Button>
        </Container>
     

    );
};

export default Main;

const Container = styled.section`
    background-color: black;
`