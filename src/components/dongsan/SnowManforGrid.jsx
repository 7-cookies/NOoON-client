import React, { useState } from "react";

import {
  BaseContainer,
  Base,
  Head,
  Eye,
  Nose,
  Item,
  Arm,
  Mouth,
  ImgContainer,
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
    <ImgContainer>
      <BaseContainer imgSize={props.imgSize}>
        <Base src={base} imgSize={props.imgSize} />
      </BaseContainer>

      <Head
        src={headImg[props.head].putOn}
        alt="머리"
        imgSize={props.imgSize}
      ></Head>
      <Eye src={eyeImg[props.eye].putOn} alt="눈" imgSize={props.imgSize}></Eye>
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
    </ImgContainer>
  );
};

export default SnowManforGrid;
