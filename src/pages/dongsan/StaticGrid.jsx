import React from "react";
import GridLayout from "react-grid-layout";
import styled from "styled-components";

class StaticGrid extends React.Component {
  render() {
    return (
      <StGridWrapper>
        <GridLayout className="layout" cols={2} rowHeight={57.25} width={413}>
          <div
            key="a"
            data-grid={{ x: 0, y: 0, w: 2, h: 2, static: true }}
            style={{ background: "transparent", border: "1px solid" }}
          >
            a
          </div>
          <div
            key="d"
            data-grid={{ x: 0, y: 2, w: 1, h: 3, static: true }}
            style={{ backgroundColor: "transparent", border: "1px solid" }}
          >
            d
          </div>
          <div
            key="e"
            data-grid={{ x: 2, y: 2, w: 1, h: 1, static: true }}
            style={{ backgroundColor: "transparent", border: "1px solid" }}
          >
            e
          </div>
          <div
            key="g"
            data-grid={{ x: 3, y: 3, w: 1, h: 3, static: true }}
            style={{ backgroundColor: "transparent", border: "1px solid" }}
          >
            g
          </div>
          <div
            key="j"
            data-grid={{ x: 0, y: 5, w: 1, h: 3, static: true }}
            style={{ backgroundColor: "transparent", border: "1px solid" }}
          >
            j
          </div>
          <div
            key="m"
            data-grid={{ x: 6, y: 6, w: 1, h: 1, static: true }}
            style={{ backgroundColor: "transparent", border: "1px solid" }}
          >
            m
          </div>
          <div
            key="o"
            data-grid={{ x: 7, y: 7, w: 1, h: 3, static: true }}
            style={{ backgroundColor: "transparent", border: "1px solid" }}
          >
            o
          </div>
          <div
            key="p"
            data-grid={{ x: 0, y: 8, w: 1, h: 3, static: true }}
            style={{ backgroundColor: "white", border: "1px solid" }}
          >
            p
          </div>
          <div
            key="u"
            data-grid={{ x: 10, y: 10, w: 1, h: 1, static: true }}
            style={{ backgroundColor: "transparent", border: "1px solid" }}
          >
            u
          </div>
          <div
            key="v"
            data-grid={{ x: 0, y: 11, w: 2, h: 2, static: true }}
            style={{ backgroundColor: "transparent", border: "1px solid" }}
          >
            v
          </div>
        </GridLayout>
      </StGridWrapper>
    );
  }
}

export default StaticGrid;

const StGridWrapper = styled.section`
  background-image: url("image/back.png");
  background-size: 430px;

  padding-left: 8px;
`;
