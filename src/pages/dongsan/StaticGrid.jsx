import React, { useState } from "react";
import GridLayout from "react-grid-layout";
import styled from "styled-components";

import { MiddleButton } from "../../styles/globalStyle";
// import ShareModal from "./ShareModal";
import StartModal from "./StartModal";
// import CheckModal from "./CheckModal";

import SnowManforGrid from "../../components/dongsan/SnowManforGrid.jsx";
import noondongsan from "../../mocks/noondongsan.json";

class StaticGrid extends React.Component {
  render() {
    return (
      <StGridWrapper>
        <StartModal />
        {/* <ShareModal /> */}
        {/* <CheckModal /> */}

        <GridLayout className="layout" cols={2} rowHeight={60.85} width={413}>
          <div
            key="a"
            data-grid={{ x: 0, y: 0, w: 2, h: 2, static: true }}
          ></div>
          <div key="b" data-grid={{ x: 0, y: 2, w: 1, h: 3, static: true }}>
            <SnowManforGrid
              imgSize={12}
              head={1}
              eye={2}
              nose={1}
              arm={3}
              mouth={1}
              item={1}
            />
          </div>
          <div
            key="c"
            data-grid={{ x: 2, y: 2, w: 1, h: 1, static: true }}
          ></div>
          <div key="d" data-grid={{ x: 3, y: 3, w: 1, h: 3, static: true }}>
            <SnowManforGrid
              imgSize={12}
              head={2}
              eye={2}
              nose={2}
              arm={3}
              mouth={2}
              item={2}
            />
          </div>
          <div key="e" data-grid={{ x: 0, y: 5, w: 1, h: 3, static: true }}>
            <SnowManforGrid
              imgSize={12}
              head={6}
              eye={4}
              nose={2}
              arm={1}
              mouth={5}
              item={6}
            />
          </div>
          <div
            key="f"
            data-grid={{ x: 6, y: 6, w: 1, h: 1, static: true }}
          ></div>
          <div key="g" data-grid={{ x: 7, y: 7, w: 1, h: 3, static: true }}>
            <SnowManforGrid
              imgSize={12}
              head={5}
              eye={3}
              nose={2}
              arm={3}
              mouth={5}
              item={3}
            />
          </div>
          <div key="h" data-grid={{ x: 0, y: 8, w: 1, h: 3, static: true }}>
            <SnowManforGrid
              imgSize={12}
              head={3}
              eye={4}
              nose={2}
              arm={5}
              mouth={5}
              item={11}
            />
          </div>
          <div
            key="i"
            data-grid={{ x: 10, y: 10, w: 1, h: 1, static: true }}
          ></div>
          <div
            key="j"
            data-grid={{ x: 0, y: 11, w: 2, h: 2, static: true }}
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "11.25px",
            }}
          >
            <MiddleButton>내 동산 공유하기</MiddleButton>
          </div>
        </GridLayout>
      </StGridWrapper>
    );
  }
}

export default StaticGrid;

const StGridWrapper = styled.section`
  background-image: url("image/background1.png");
  background-size: 430px;
`;

const StImg = styled.img`
  width: 192px;
`;
