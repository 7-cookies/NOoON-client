import React, {useState} from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'

import {menuData} from "../../utils/imgData"
import {modalStateC, modalStateT} from "../../utils/dressRecoil"

import {CateMenuCon} from '../../styles/dressUp/DressUp.jsx'

const CateMenu = () => {
    const [cateNum, setCateNum] = useState(menuData[0]);

    const [showModal, setModal] = useRecoilState(modalStateC);
    const [modalType, setModalType] = useRecoilState(modalStateT);

    const openModal = (e) => {
        setModal(true);
        setModalType(e.currentTarget.getAttribute('type'))
    }
    


    return (
    <CateMenuCon>

        {menuData.map((data)=>(
            <Menu 
                key={data.categoryName} 
                onClick={()=>{setCateNum(data);}} 
                check={data} 
                num={cateNum}>

                    <MenuImg
                    id={data.categoryName}  
                    url={data.url}
                    type={data.categoryName}
                    onClick={openModal}/>
            </Menu>

        ))}

    </CateMenuCon>

    )
}

export default CateMenu;


const Menu = styled.section`
display: flex;
justify-content: center;
align-items: center;

background-color: ${(props)=>(props.key === 'head' ? '#E9F3FF' : (props.check === props.num ? '#D6E2F0' : '#E9F3FF'))};
width: 4.125rem;
height: 4.125rem;
top: ${(props)=>(props.check === props.num ? 0 : 0.625)}rem;
position: relative;

border-radius: 0.9375rem 0.9375rem 0 0;
margin: 0 0.15rem;
padding: 0;
`

const MenuImg = styled.section`
width: ${(props)=>props.type==='acc'? 2.7 : 3}rem;
height: ${(props)=>props.type==='acc'? 2.7 : 3}rem;

background-image: url(${(props)=>props.url});
background-position: center;
background-repeat: no-repeat;
background-size: cover;



`

