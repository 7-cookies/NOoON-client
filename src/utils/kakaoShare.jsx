import React, { useEffect } from "react";
import styled from "styled-components";
import kakaoIcon from "../asset/icon/kakao.svg";

export const KakaoShare = ({url}) => {
  useEffect(() => {
    handleClickKakao({url});
  }, []);

  const Name = "하린";

  const handleClickKakao = ({url}) => {

    if (window.Kakao) {
      const kakao = window.Kakao;
      console.log(kakao);
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_JS_KEY);
      }
      kakao.Share.createDefaultButton({
        container: "#kakao-link-btn",

        objectType: "feed",

        content: {
          title: "크리스마스에 완성되는 나만의 눈동산",
          description: `${Name}님의 눈동산에 방문해 눈사람을 꾸미고 메시지를 남겨주세요!⛄️`,
          imageUrl: `${process.env.REACT_APP_S3_URL}%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8_%E1%84%8B%E1%85%A5%E1%86%B9%E1%84%82%E1%85%B3%E1%86%AB_%E1%84%8B%E1%85%A1%E1%84%90%E1%85%B3%E1%84%8B%E1%85%AF%E1%84%8F%E1%85%B3+4+15.png`,
          link: {
            webUrl: window.location.href+`/${url}`,
            mobileWebUrl: window.location.href+`/${url}`,
          },
        },

        buttons: [
          {
            title: "❄️눈사람 만들러 가기❄️",
            link: {
              webUrl: window.location.href+`/${url}`,

              mobileWebUrl: window.location.href+`/${url}`,

            },
          },
        ],
      });
    }
  };

  return (
    <KakaoImg
      id="kakao-link-btn"
      src={kakaoIcon}
      alt="#"
      url={url}
      onClick={() => {
        handleClickKakao({url});
      }}
      sender="하린"
    />
  );


};

const KakaoImg = styled.img``;
