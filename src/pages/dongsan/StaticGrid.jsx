import React from "react";
import GridLayout from "react-grid-layout";
import styled from "styled-components";

import base from "../../asset/img/base.png";

class StaticGrid extends React.Component {
  render() {
    return (
      <StGridWrapper>
        <GridLayout className="layout" cols={2} rowHeight={57.25} width={413}>
          <div
            key="a"
            data-grid={{ x: 0, y: 0, w: 2, h: 2, static: true }}
          ></div>
          <div key="b" data-grid={{ x: 0, y: 2, w: 1, h: 3, static: true }}>
            <StImg src={base} alt="민둥 눈사람입니다." />
          </div>
          <div
            key="c"
            data-grid={{ x: 2, y: 2, w: 1, h: 1, static: true }}
          ></div>
          <div key="d" data-grid={{ x: 3, y: 3, w: 1, h: 3, static: true }}>
            <StImg src={base} alt="눈사람입니다." />
          </div>
          <div key="e" data-grid={{ x: 0, y: 5, w: 1, h: 3, static: true }}>
            <StImg src={base} alt="눈사람입니다." />
          </div>
          <div
            key="f"
            data-grid={{ x: 6, y: 6, w: 1, h: 1, static: true }}
          ></div>
          <div key="g" data-grid={{ x: 7, y: 7, w: 1, h: 3, static: true }}>
            <StImg src={base} alt="눈사람입니다." />
          </div>
          <div key="h" data-grid={{ x: 0, y: 8, w: 1, h: 3, static: true }}>
            <StImg src={base} alt="눈사람입니다." />
          </div>
          <div
            key="i"
            data-grid={{ x: 10, y: 10, w: 1, h: 1, static: true }}
          ></div>
          <div
            key="j"
            data-grid={{ x: 0, y: 11, w: 2, h: 2, static: true }}
          ></div>
        </GridLayout>
      </StGridWrapper>
    );
  }
}

export default StaticGrid;

const StGridWrapper = styled.section`
  background-image: url("image/background1.png");
  background-size: 430px;
  padding-left: 8px;
`;

const StImg = styled.img`
  width: 192px;
`;
