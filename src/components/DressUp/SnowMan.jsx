import React, {useState} from 'react'
import {useRecoilState} from 'recoil'
import {BaseContainer, Base, Head, Eye, Nose, Item, Arm, Mouth, ImgContainer} from '../../styles/dressUp/DressUp.jsx'

import base from '../../asset/img/base.png'
import {headImg, eyeImg, noseImg, armImg, mouthImg, accImg} from '../../utils/imgData.jsx'
import {baseEyes, baseArms, baseHead, baseNose, baseItem, baseMouth} from '../../utils/dressRecoil'

const SnowMan = ({imgSize}) => {
    const [eye, setEyes] = useRecoilState(baseEyes);
    const [nose, setNose] = useRecoilState(baseNose);
    const [arm, setArms] = useRecoilState(baseArms);
    const [item, setItem] = useRecoilState(baseItem);
    const [mouth, setMouth] = useRecoilState(baseMouth);
    const [head, setHead] = useRecoilState(baseHead);

    return (
    <ImgContainer>

        <BaseContainer imgSize={imgSize}>
            <Base src={base} imgSize={imgSize}/>
        </BaseContainer>

        <Head src={headImg[head[0].Head].putOn} alt='머리' imgSize={imgSize}></Head>
        <Eye src={eyeImg[eye[0].Eye].putOn} alt='눈' imgSize={imgSize}></Eye>
        <Nose src={noseImg[nose[0].Nose].putOn} alt='코' imgSize={imgSize}></Nose>
        <Arm src={armImg[arm[0].Arm].putOn} alt='팔' imgSize={imgSize}></Arm>
        <Mouth src={mouthImg[mouth[0].Mouth].putOn} alt='입' imgSize={imgSize}></Mouth>
        <Item src={accImg[item[0].Item].putOn} alt='소품' imgSize={imgSize}></Item>

    </ImgContainer>
    )
}

export default SnowMan;

