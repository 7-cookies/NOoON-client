import styled from "styled-components";
import Header from '../common/Header'
import { Input, ShortButton } from "../../styles/globalStyle";

const DongsanName = ({ setStep }) => {

    const handleNextClick=()=>{
        setStep('DONSAN-NAMING-MODAL');
    }

    return (
        <>
        <StDongsanNameWrapper>
            <Header title="동산이름 정하기" />
            <StDongsanName>
                <div>
                    <p>동산 이름을 지어주세요 ☃️</p>
                    <StNameInput placeholder="ex) 눈 펑펑 오는 눈동산 (최대 20자)" />
                </div> 
                <StButtonWrapper>
                    <ShortButton button="button" className="check" onClick={handleNextClick}>확인</ShortButton>
                </StButtonWrapper>
            </StDongsanName>
        </StDongsanNameWrapper>
        </>

    );
};

export default DongsanName;

const StDongsanNameWrapper = styled.section`
    position: relative;
`
const StDongsanName = styled.div`
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

const StButtonWrapper = styled.div`
    display: flex;
    justify-content: center;

    margin-top: 299px;
`
