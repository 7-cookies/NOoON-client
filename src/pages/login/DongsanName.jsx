import styled from "styled-components";
import Header from '../../components/common/Header'
import { Input, ShortButton } from "../../styles/globalStyle";

const DongsanName = () => {
    return (
        <>
        <Header title="동산이름 정하기" />

        <StDongsanNameWrapper>
        <div>
            <p>동산 이름을 지어주세요 ☃️</p>
            <StNameInput placeholder="ex) 눈 펑펑 오는 눈동산 (최대 20자)" />
        </div> 
        <StButtonWrapper>
            <ShortButton className="check">확인</ShortButton>
        </StButtonWrapper>

        </StDongsanNameWrapper>
        </>

    );
};

export default DongsanName;

const StDongsanNameWrapper = styled.section`
    & > div> p{
        margin-left: 44.62px;
        margin-bottom:16.5px;
        ${({ theme }) => theme.fonts.kotrahopeCommon}
    }
    & > div{
        margin-top:265.04px;
    }
`

const StNameInput = styled(Input)`
    align-items: flex-start;
    text-align: left;

    margin-left: 24px;
    padding-left:20.5px;
`

const StButtonWrapper = styled.section`
    display: flex;
    justify-content: center;

    margin-top: 299px;
`