import React, {useEffect} from 'react'
import styled from 'styled-components'

export const KakaoShare = ({url}) => {

    useEffect(()=>{
        handleClickKakao();
    },[])

    const Name = '하린'

    const handleClickKakao = (e)=>{

        if (window.Kakao) {
            const kakao = window.Kakao;
            console.log(kakao)
            if (!kakao.isInitialized()){
                kakao.init(process.env.REACT_APP_KAKAO_JS_KEY)
            }
            kakao.Share.createDefaultButton({
                container: "#kakao-link-btn",

                objectType: "feed",

                content:{
                    title: '크리스마스에 완성되는 나만의 눈동산',
                    description: `${Name}님의 눈동산에 방문해 눈사람을 꾸미고 메시지를 남겨주세요!⛄️`,
                    imageUrl: `${process.env.REACT_APP_S3_URL}kakaoTitle.png`,
                    link: {
                        webUrl: window.location.href,
                        // .replace(window.location.href,url),
                        mobileWebUrl: window.location.href
                        // .replace(window.location.href,url),
                    },
                },

                buttons: [
                {
                title: '❄️눈사람 만들러 가기❄️',
                link: {
                    webUrl: window.location.href,
                    // .replace(window.location.href,url),
                    mobileWebUrl: window.location.href
                    // .replace(window.location.href,url),
                },
                },
            ],
        });
    };
};


    return (
    <KakaoImg 
        id="kakao-link-btn"
        url={url} 
        onClick={() => {
            handleClickKakao(url)}} 
        sender='하린'>
        공유버튼
    </KakaoImg>
    )
}


const KakaoImg = styled.button`

`