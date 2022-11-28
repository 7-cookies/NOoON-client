import React, {useState} from 'react'
import styled from 'styled-components'
import logo from '../asset/icon/Group 88.png'

const kakaoJsKey = process.env.REACT_APP_KAKAO_JS_KEY;

const KakaoShare = () => {
    const [sender, SetSender] = useState('');

    const handleClickKakao = (e)=>{
        const Sender = e.currentTarget.getAttribute('value');
        SetSender(Sender);

        window.Kakao.Share.createCustomButton({
        container: "#kakao-link-btn",
        templateId: 86522,
        // requestUrl: 'http://localhost:3000/dressUp',

        templateArgs:{
                'title': '크리스마스에 완성되는 나만의 눈동산',
                'desc': `${sender}님의 눈동산에 방문해 눈사람을 꾸미고 메시지를 남겨주세요!`,
                }
            
        })
    // console.log(sender);
    

    }
    
    return (
    <KakaoImg id="kakao-link-btn" onClick={handleClickKakao} value='하린'>
        공유버튼
    </KakaoImg>
    )
}

export default KakaoShare

const KakaoImg = styled.button`

`