import styled from 'styled-components';
import { ShortButton } from '../../styles/globalStyle';
import Header from '../common/Header';

const DongSanSelect = () => {
    return (
        <StDongSanSelectWrapper>
            <Header title="동산 배경 정하기" />
            <StDongSanWrapper>
                <form>                        
                    <input type="radio" name="background" id="background1" value="background1" />
                    <label for="background1">
                        <img src="image/background1.png" alt="동산배경1" />
                    </label>
                    <input type="radio" name="background" id="background2" value="background2" />

                    <label for="background2">
                        <img src="image/background2.png" alt="동산배경2" />
                    </label>
                    <input type="radio" name="background" id="background3" value="background3" />
                    <label for="background3">
                        <img src="image/background3.png" alt="동산배경3" />
                    </label>
                    <input type="radio" name="background" id="background4" value="background4" />
                    <label for="background4">
                        <img src="image/background4.png" alt="동산배경4" />
                    </label>
                    <StShortButton button="submmit">확인</StShortButton>
                </form>
            </StDongSanWrapper>
        </StDongSanSelectWrapper>
    );
};

export default DongSanSelect;

const StDongSanSelectWrapper=styled.section`
`

const StDongSanWrapper = styled.div`
    & > form{
        margin-left:39.5px;
    }

    & input[type="radio"]{display:none;}
    & img {
        width: 150px;
        height: 326px;

        margin:27.5px 12.5px 0 12.5px;

        border-radius: 1px;
        border:2px solid #E7E7E7;
    }

    & img:hover {
        box-shadow :0px 0px 0px 5px ${({ theme }) => theme.colors.blue};
    }


`

const StShortButton = styled(ShortButton)`
    margin: 28px 105.5px;
`