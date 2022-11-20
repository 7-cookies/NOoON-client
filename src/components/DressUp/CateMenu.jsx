import React, {useState} from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'

import {menuData} from "../../asset/imgData"
import {modalStateC, modalStateT} from "../../asset/dressRecoil"

export const CateMenu = () => {
    const [cateNum, setCateNum] = useState(0);

    const [showModal, setModal] = useRecoilState(modalStateC);
    const [modalType, setModalType] = useRecoilState(modalStateT);

    const openModal = (e) => {
        setModal(true);
        setModalType(e.currentTarget.getAttribute('type'))
    }


    return (

        menuData.map(data=>(
            <Menu 
                key={data + 'category'} 
                onClick={()=>{setCateNum(data);}} 
                check={data} 
                num={cateNum}>

                    <MenuImg  
                    url={data.url}
                    type={data.categoryName}
                    onClick={openModal}/>
            </Menu>
        ))

    )
}



const Menu = styled.section`
display: flex;
justify-content: center;
align-items: center;

background-color: ${(props)=>(props.check === props.num ? '#D6E2F0' : '#E9F3FF')};
width: 4.125rem;
height: 4.125rem;
top: ${(props)=>(props.check === props.num ? 0 : 0.625)}rem;
position: relative;

border-radius: 0.9375rem 0.9375rem 0 0;
margin: 0 0.15rem;
padding: 0;
`

const MenuImg = styled.section`
width: 3.1875rem;
height: 3.1875rem;

background-image: url(${(props)=>props.url});
background-position: center;
background-repeat: no-repeat;
background-size: cover;

`
