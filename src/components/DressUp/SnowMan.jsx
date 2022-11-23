import React from 'react'
import {useRecoilState} from 'recoil'

import {BaseContainer, Base, Head, Eye, Nose, Item, Arm, Mouth} from '../../styles/dressUp/DressUp.jsx'

import base from '../../asset/img/base.png'
import {headImg, eyeImg, noseImg, armImg, mouthImg, accImg} from '../../asset/imgData.jsx'
import {baseEyes, baseArms, baseHead, baseNose, baseItem, baseMouth} from '../../asset/dressRecoil'

export const SnowMan = () => {
    const [eye, setEyes] = useRecoilState(baseEyes);
    const [nose, setNose] = useRecoilState(baseNose);
    const [arm, setArms] = useRecoilState(baseArms);
    const [item, setItem] = useRecoilState(baseItem);
    const [mouth, setMouth] = useRecoilState(baseMouth);
    const [head, setHead] = useRecoilState(baseHead);

    return (
    <>
        <BaseContainer>
            <Base src={base}/>
        </BaseContainer>

        <Head src={headImg[head[0].Head].putOn} alt='머리'></Head>
        <Eye src={eyeImg[eye[0].Eye].putOn} alt='눈'></Eye>
        <Nose src={noseImg[nose[0].Nose].putOn} alt='코'></Nose>
        <Arm src={armImg[arm[0].Arm].putOn} alt='팔'></Arm>
        <Mouth src={mouthImg[mouth[0].Mouth].putOn} alt='입'></Mouth>
        <Item src={accImg[item[0].Item].putOn} alt='소품'></Item>
    </>
    )
}
