import React, {useState} from 'react'
import styled from 'styled-components'
import {useRecoilState} from 'recoil'

import {headImg, eyeImg} from "../../asset/imgData"
import {baseEyes, baseArms, baseHead, baseNose, baseItem, baseMouth} from '../../asset/dressRecoil'


export const DressPalette = ({showModal, modalType}) => {
    const [checkNum, setCheckNum] = useState(0)

    //recoilState 선언
    const [eye, setEyes] = useRecoilState(baseEyes);
    const [nose, setNose] = useRecoilState(baseNose);
    const [arm, setArms] = useRecoilState(baseArms);
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
    


    // const handleChangeHead = (e) => {
    //     const Head = e.currentTarget.getAttribute('src');
    //     const HeadVal = e.currentTarget.getAttribute('value');
    //     const Array = [{Head, HeadVal}];
    //     setHead(Array);
    // }

    // eslint-disable-next-line default-case
    switch (modalType){
        case 'head' :
        return(  
        <>
        {showModal===true ? 
            <>
            <ModalContainer>
            {headImg.map((res,num)=>(
                <ItemContainer 
                key={res}
                onClick={()=>{setCheckNum(res);}}
                check={res} 
                number={checkNum}
                num={num}> 

                    <Item 
                    key={res}
                    src={res.palette} 
                    alt={`모자`} 
                    value={num}
                    onClick={handleClickHead}/>
    
                </ItemContainer> 
            ))}
            </ModalContainer></> : null }</>)

        case 'eye' :
        return(
        <>
            {showModal===true ? 
                <>
                <ModalContainer>
                {eyeImg.map((res,num)=>(
                    <ItemContainer 
                        key={res}
                        onClick={()=>{setCheckNum(res);}}
                        check={res} 
                        number={checkNum}
                        num={num}> 

                        <Item 
                            key={res}
                            src={res.palette} 
                            alt={`눈`} 
                            value={num}
                            onClick={handleClickEye}/>
                    </ItemContainer> 
            ))}
            </ModalContainer></> : null }</>)
        default : return (null)
    }
}




const ModalContainer= styled.section`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;

width: 26.875rem; 
height: auto;
background-color:#D6E2F0;
padding: 1rem 0;

position: relative;
z-index: 1;
`

const ItemContainer = styled.section`
display: flex;
justify-content: center;
align-items: center;
width: 7rem; 
height: 7rem;
background-color: ${(props)=>(props.num)===11? 'transparent':'white'};
text-align: center;

margin: 0.5rem;
border: ${(props)=>(props.check === props.number ? '#95AECA solid 0.1875rem':'transparent solid 0.1875rem' )};
border-radius: 0.9375rem;

`

const Item = styled.img`
width: 7rem;
height: 7rem;
`
