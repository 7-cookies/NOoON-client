import React, { useState } from "react";
import styled from "styled-components";

import {
  BaseContainer,
  Base,
  Head,
  Eye,
  Nose,
  Item,
  Arm,
  Mouth,
} from "../../styles/dressUp/DressUp.jsx";

import base from "../../asset/img/base.png";
import {
  headImg,
  eyeImg,
  noseImg,
  armImg,
  mouthImg,
  accImg,
} from "../../utils/imgData.jsx";

const SnowManforGrid = (props) => {
  return (
    <StImgContainer>
      <BaseContainer imgSize={props.imgSize}>
        <Base src={base} imgSize={props.imgSize} />
      </BaseContainer>

      <Head
        src={headImg[props.head].putOn}
        alt="머리"
        imgSize={props.imgSize}
        style={{ width: "192px", height: "192px" }}
      ></Head>
      <Eye
        src={eyeImg[props.eye].putOn}
        alt="눈"
        imgSize={props.imgSize}
        style={{ width: "192px", height: "192px" }}
      ></Eye>
      <Nose
        src={noseImg[props.nose].putOn}
        alt="코"
        imgSize={props.imgSize}
      ></Nose>
      <Arm src={armImg[props.arm].putOn} alt="팔" imgSize={props.imgSize}></Arm>
      <Mouth
        src={mouthImg[props.mouth].putOn}
        alt="입"
        imgSize={props.imgSize}
      ></Mouth>
      <Item
        src={accImg[props.item].putOn}
        alt="소품"
        imgSize={props.imgSize}
      ></Item>
    </StImgContainer>
  );
};

export default SnowManforGrid;

const StImgContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.imgSize}rem;
  height: ${(props) => props.imgSize}rem;
  width: 12rem;
  height: 12rem;

  /* margin: 0 -1rem; */
  /* margin-top: 1rem; */
`;
