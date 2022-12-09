import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";

import { Container, ShortButton } from "../../styles/globalStyle";
import { DressZone } from "../../styles/dressUp/DressUp.jsx";

import CateMenu from "../../components/DressUp/CateMenu.jsx";
import DressPalette from "../../components/DressUp/DressPalette";
import SnowMan from "../../components/DressUp/SnowMan.jsx";
import WRMessage from "../../components/DressUp/WRMessage.jsx";
import HeaderForDress from "../../components/common/HeaderForDress.jsx";
import Header from "../../components/common/Header.jsx";
import { KakaoShare } from "../../utils/kakaoShare.jsx";

import {
  modalStateC,
  modalStateT,
  messageState,
} from "../../utils/dressRecoil";

const DressUp = ({setStep}) => {
  const [showModal, setModal] = useRecoilState(modalStateC);
  const [modalType, setModalType] = useRecoilState(modalStateT);
  const [ms, setMs] = useRecoilState(messageState);
  const message = useRecoilValue(messageState);
  const moveToMessage = () => {
    setMs(!ms);
  };

  const [saveFirst, setSaveFirst] = useState(false);
  const [saveComp, setSaveComp] = useState(false);
  const isClickedSaveBt = () => {
    setSaveFirst(!saveFirst);
    console.log(saveFirst);
  };

  const isCompSaved = () => {
    setSaveComp(!saveComp);
    setSaveFirst(false);
  };

  return (
    <>
      <ContainerE>
        {message ? (
          <HeaderForDress title={"메세지 남기기"} />
        ) : (
          <Header title={"눈사람 꾸미기"}></Header>
        )}
        <DressZone>
          <SnowMan imgSize={message === true ? "15" : "19.375"} />

          <KakaoShare />

          {message === false ? (
            <>
              <section>
                <CateMenu
                  setModal={setModal}
                  showModal={showModal}
                  setModalType={setModalType}
                  modalType={modalType}
                />

                <DressPalette showModal={showModal} modalType={modalType} />
              </section>

              <NextButton onClick={moveToMessage}> 저장하기 </NextButton>
            </>
          ) : (
            <>
              <WRMessage modalFirst={saveFirst} modalSecond={saveComp} />
              <ShortButton onClick={isClickedSaveBt}> 저장 </ShortButton>
            </>
          )}
        </DressZone>
      </ContainerE>
      <ContainerEdit modal={saveComp ? true : saveFirst ? true : false}>
        {saveFirst ? (
          <ModalCon>
            <TextCon>
              <div> 저장한 눈사람과 메세지는 수정할 수 없습니다. </div>
              <div className="save"> 저장하시겠습니까? </div>
            </TextCon>
            <ButtonCon>
              <ShortButtonE onClick={isCompSaved}>확인</ShortButtonE>
              <ShortButtonE onClick={isClickedSaveBt}>취소</ShortButtonE>
            </ButtonCon>
          </ModalCon>
        ) : (
          <></>
        )}

        {saveComp ? (
          <ModalCon className="compSaved">
            <TextCon>
              <div> 저장되었습니다. </div>
            </TextCon>
            <ButtonCon>
              <ShortButtonE onClick={isCompSaved}>확인</ShortButtonE>
            </ButtonCon>
          </ModalCon>
        ) : (
          <></>
        )}
      </ContainerEdit>
    </>
  );
};

export default DressUp;

const NextButton = styled(ShortButton)`
  width: 23.875rem;
  /* box-shadow: 0.3vw 0.3vw 0.6vw rgba(0, 0, 0, 0.3); */
  position: fixed;
  margin-top: 43rem;
  z-index: 1;
`;

const ContainerEdit = styled(Container)`
  background: ${(props) =>
    props.modal === false ? "transparent" : "rgba(85, 85, 85, 0.2)"};
  z-index: ${(props) => (props.modal === false ? -100 : 100)};
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerE = styled.section`
  position: absolute;
`;

const ModalCon = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 23.875rem;
  height: 15.1875rem;

  background-color: #ffffff;
  position: fixed;
  margin-bottom: 10rem;
  border-radius: 1.0625rem;

  box-shadow: 0.3vw 0.3vw 0.6vw rgba(0, 0, 0, 0.3);
`;

const TextCon = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    ${({ theme }) => theme.fonts.kotrahopeText}
    font-size: 1.25rem;
    margin-top: 0.6rem;
  }
`;

const ButtonCon = styled.section`
  display: flex;
  margin-top: 2rem;
`;

const ShortButtonE = styled(ShortButton)`
  margin: 0 1rem; ;
`;
