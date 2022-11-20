import React, {useState} from 'react'
import styled from 'styled-components'
import {useRecoilState} from 'recoil'

import {modalStateC, modalStateT} from '../../asset/dressRecoil.jsx'

import {headImg} from "../../asset/imgData"
import {baseEyes, baseArms, baseHead, baseNose, baseItem, baseMouth} from '../../asset/dressRecoil'


export const DressPalette = () => {
    const [checkNum, setCheckNum] = useState(0)

    //recoilState 선언
    const [eye, setEyes] = useRecoilState(baseEyes);
    const [nose, setNose] = useRecoilState(baseNose);
    const [arm, setArms] = useRecoilState(baseArms);
    const [item, setItem] = useRecoilState(baseItem);
    const [mouth, setMouth] = useRecoilState(baseMouth);
    const [head, setHead] = useRecoilState(baseHead);


    // const handleChangeHead=(e)=>{
    //     setCateNum(e.currentTarget.getAttribute('value'));
    // }
    // console.log(cateNum);

    return(
        <ModalContainer>
        {headImg.map((res)=>(
            <ItemContainer 
            key={res}
            onClick={()=>{setCheckNum(res);}}
            check={res} 
            number={checkNum}> 
                <Item 
                key={res}
                src={res.palette} 
                alt={`모자`} 
                value={`head_${res.num+1}`}/>

            </ItemContainer> 
        ))}
        </ModalContainer>)

    // switch (modalStateT){
    //     case 'eye' :
    //     return(
    //         <>
    //                 {modalStateC===true ? 
    //             <>

    //                     <ModalContainer>
    //                         <OpenModal> 
    //                             <Item src='' alt='눈1' value='eyes_01' ></Item>
    //                             <Item src='' alt='눈2' value='eyes_02' ></Item>
    //                         </OpenModal> 
    
    //                     </ModalContainer>
    //                     </>: null }</>
    //         )

    //     case 'nose' :
    //         return(
    //             <>
    //                 {modalStateC===true ? 
    //                 <>
    //                         <ModalContainer>
    //                             <OpenModal> 
    //                                 <Item src='' alt='코1' value='nose_01' ></Item>
    //                                 <Item src='' alt='코2' value='nose_02' ></Item>
    //                             </OpenModal> 
        
    //                         </ModalContainer>
    //                         </>:null}</>
    //     )
    //     case 'head' :
    //         return(
    //                 <>
    //                 {modalStateC===true ? 
    //                         <>
    //                         <ModalContainer>
    //                             <OpenModal> 
    //                                 <Item src='' alt='머리1' value='head_01' ></Item>
    //                                 <Item src='' alt='머리2' value='head_02' ></Item>
    //                             </OpenModal> 
        
    //                         </ModalContainer>
    //                         </>
    //                     : null}
    //                     </>)
    //     case 'item' :
    //         return(
    //                 <>
    //                 {modalStateC===true ? 
    //                         <>
    //                         <ModalContainer>
    //                             <OpenModal> 
    //                                 <Item src='' alt='소품1' value='item_01' ></Item>
    //                                 <Item src='' alt='소품2' value='item_02' ></Item>
    //                             </OpenModal> 
        
    //                         </ModalContainer>
    //                         </>
    //                     : null}
    //                     </>)
    //     case 'arms' :
    //         return(
    //                 <>
    //                 {modalStateC===true ? 
    //                         <>
    //                         <ModalContainer>
    //                             <OpenModal> 
    //                                 <Item src='' alt='팔1' value='arms_01' ></Item>
    //                                 <Item src='' alt='팔2' value='arms_02' ></Item>
    //                             </OpenModal> 
        
    //                         </ModalContainer>
    //                         </>
    //                     : null}
    //                     </>)
    //     case 'mouth' :
    //         return(
    //                 <>
    //                 {modalStateC===true ? 
    //                         <>
    //                         <ModalContainer>
    //                             <OpenModal> 
    //                                 <Item src='' alt='입1' value='mouth_01' ></Item>
    //                                 <Item src='' alt='입2' value='mouth_02' ></Item>
    //                             </OpenModal> 
        
    //                         </ModalContainer>
    //                         </>
    //                     : null}
    //                     </>)
    //     default : return (null)
        


    // }
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
background-color: white;
text-align: center;

margin: 0.5rem;

/* border: #95AECA solid 0.1875rem; */
border: ${(props)=>(props.check === props.number ? '#95AECA solid 0.1875rem':'transparent solid 0.1875rem' )};
border-radius: 0.9375rem;
/* box-shadow: 0.15rem 0.15rem 0.15rem 0.15rem ${(props)=>(props.check === props.number ? 'grey':'transparent' )} inset; */

`

const Item = styled.img`
width: 7rem;
height: 7rem;
`
