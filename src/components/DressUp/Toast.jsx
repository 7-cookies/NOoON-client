import React from 'react'
import styled from 'styled-components'

const Toast = () => {

    return (
        <ToastMessage>
            좌우로 스크롤을 넘겨 다양한 아이템을 확인해보세요!
        </ToastMessage>
        )
}

const ToastMessage = styled.div`
position: fixed;
border: solid black;
    
`

export default Toast