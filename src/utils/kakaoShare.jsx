import React, { useEffect } from "react";
import styled from "styled-components";
import kakaoIcon from "../asset/icon/kakao.svg";

export const KakaoShare = ({url}) => {
  useEffect(() => {
    handleClickKakao({url});
  }, []);

  const username = window.sessionStorage.username;

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
          description: `${username}님의 눈동산에 방문해 눈사람을 꾸미고 메시지를 남겨주세요!⛄️`,
          imageUrl: `${process.env.REACT_APP_S3_URL}kakaoTitle.png`,
          link: {
            webUrl: `http://nooon-bucket.s3-website.ap-northeast-2.amazonaws.com//${url}`,
            mobileWebUrl: `http://nooon-bucket.s3-website.ap-northeast-2.amazonaws.com//${url}`,
          },
        },

        buttons: [
          {
            title: "❄️눈사람 만들러 가기❄️",
            link: {
              webUrl: `http://nooon-bucket.s3-website.ap-northeast-2.amazonaws.com//${url}`,

              mobileWebUrl: `http://nooon-bucket.s3-website.ap-northeast-2.amazonaws.com//${url}`,

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
