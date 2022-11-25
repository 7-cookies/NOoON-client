import React, {useState} from 'react'
import styled from 'styled-components'
import {useRecoilState} from 'recoil'

import {headImg, eyeImg, noseImg, armImg, mouthImg, accImg } from "../../asset/imgData"
import {baseEyes, baseArms, baseHead, baseNose, baseItem, baseMouth} from '../../asset/dressRecoil'


const DressPalette = ({showModal, modalType}) => {
    const [checkNum, setCheckNum] = useState(0)

    //recoilState 선언
    const [eye, setEyes] = useRecoilState(baseEyes);
    const [nose, setNose] = useRecoilState(baseNose);
    const [arm, setArm] = useRecoilState(baseArms);
    const [item, setItem] = useRecoilState(baseItem);
    const [mouth, setMouth] = useRecoilState(baseMouth);
    const [head, setHead] = useRecoilState(baseHead);

    const handleClickHead = (e) =>{
        const Head = e.currentTarget.getAttribute('value');
        const HeadVal = e.currentTarget.getAttribute('src');
        const Arr =[{Head, HeadVal}];
        setHead(Arr);

    }

    const handleClickEye = (e) =>{
        const Eye = e.currentTarget.getAttribute('value');
        const EyeVal = e.currentTarget.getAttribute('src');
        const Arr =[{Eye, EyeVal}];
        setEyes(Arr);
    }

    const handleClickNose = (e) =>{
        const Nose = e.currentTarget.getAttribute('value');
        const NoseVal = e.currentTarget.getAttribute('src');
        const Arr =[{Nose, NoseVal}];
        setNose(Arr);
    }

    const handleClickArm = (e) =>{
        const Arm = e.currentTarget.getAttribute('value');
        const ArmVal = e.currentTarget.getAttribute('src');
        const Arr =[{Arm, ArmVal}];
        setArm(Arr);
    }

    const handleClickMouth = (e) =>{
        const Mouth = e.currentTarget.getAttribute('value');
        const MouthVal = e.currentTarget.getAttribute('src');
        const Arr =[{Mouth, MouthVal}];
        setMouth(Arr);
    }

    const handleClickAcc = (e) =>{
        const Item = e.currentTarget.getAttribute('value');
        const ItemVal = e.currentTarget.getAttribute('src');
        const Arr =[{Item, ItemVal}];
        setItem(Arr);
    }


    // eslint-disable-next-line default-case
    switch (modalType){
        default : 
            return(  
            <>
            <ModalContainer>
            {headImg.map((res,num)=>(
                <ItemContainer 
                key={res.palette}
                onClick={()=>{setCheckNum(res);}}
                check={res} 
                number={checkNum}
                > 

                    <Item 
                    key={res.palette}
                    src={res.palette} 
                    alt={`모자`} 
                    value={num}
                    onClick={handleClickHead}/>
    
                </ItemContainer> 
            ))}
            </ModalContainer></> 
            )

        case 'eye' :
        return(
        <>
            {showModal===true ? 
                <>
                <ModalContainer>
                {eyeImg.map((res,num)=>(
                    <ItemContainer 
                        key={res.palette}
                        onClick={()=>{setCheckNum(res);}}
                        check={res} 
                        number={checkNum}
                        > 

                        <Item 
                            key={res.palette}
                            src={res.palette} 
                            alt={`눈`} 
                            value={num}
                            onClick={handleClickEye}/>
                    </ItemContainer> 
            ))}
            </ModalContainer></> : null }</>)


        case 'nose' :
                return(
                <>
                    {showModal===true ? 
                        <>
                        <ModalContainer>
                        {noseImg.map((res,num)=>(
                            <ItemContainer 
                                key={res.palette}
                                onClick={()=>{setCheckNum(res);}}
                                check={res} 
                                number={checkNum}
                                > 

                                <Item 
                                    key={res.palette}
                                    src={res.palette} 
                                    alt={`코`} 
                                    value={num}
                                    onClick={handleClickNose}/>
                            </ItemContainer> 
                    ))}
                    </ModalContainer></> : null }</>)

        case 'arm' :
                            return(
                            <>
                                {showModal===true ? 
                                    <>
                                    <ModalContainer>
                                    {armImg.map((res,num)=>(
                                        <ItemContainer 
                                            key={res.palette}
                                            onClick={()=>{setCheckNum(res);}}
                                            check={res} 
                                            number={checkNum}
                                            > 

                                            <Item 
                                                key={res.palette}
                                                src={res.palette} 
                                                alt={`팔`} 
                                                value={num}
                                                onClick={handleClickArm}/>
                                        </ItemContainer> 
                                ))}
                                </ModalContainer></> : null }</>)

        case 'mouth' :
            return(
            <>
                {showModal===true ? 
                    <>
                    <ModalContainer>
                    {mouthImg.map((res,num)=>(
                        <ItemContainer 
                            key={res.palette}
                            onClick={()=>{setCheckNum(res);}}
                            check={res} 
                            number={checkNum}
                            > 

                            <Item 
                                key={res.palette}
                                src={res.palette} 
                                alt={`입`} 
                                value={num}
                                onClick={handleClickMouth}/>
                        </ItemContainer> 
                ))}
                </ModalContainer></> : null }</>)

    case 'acc' :
        return(
        <>
            {showModal===true ? 
                <>
                <ModalContainer>
                {accImg.map((res,num)=>(
                    <ItemContainer 
                        key={res.palette}
                        onClick={()=>{setCheckNum(res);}}
                        check={res} 
                        number={checkNum}
                        > 

                        <Item 
                            key={res.palette}
                            src={res.palette} 
                            alt={`악세사리`} 
                            value={num}
                            onClick={handleClickAcc}/>
                    </ItemContainer> 
            ))}
            </ModalContainer></> : null }</>)

    }
}

export default DressPalette;




const ModalContainer= styled.section`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;

width: 26.875rem; 
height:35.75rem;
background-color:#D6E2F0;
/* background-color:red; */
padding: 1rem 0 37rem 0;

position: relative;
z-index: 1;
`

const ItemContainer = styled.section`
display: flex;
justify-content: center;
align-items: center;
width: 7rem; 
height: 7rem;
background-color: ${(props)=>(props.num)===11 ? 'transparent':'white'};
text-align: center;

margin: 0.5rem;
border: ${(props)=>(props.check === props.number ? '#95AECA solid 0.1875rem':'transparent solid 0.1875rem')};
border-radius: 0.9375rem;

`

const Item = styled.img`
width: 7rem;
height: 7rem;
`
