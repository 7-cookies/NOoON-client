import styled, { createGlobalStyle, css } from "styled-components";

export const reset = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  menu,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }
  body {
    line-height: 1;
  }
  menu,
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export const GlobalStyle = createGlobalStyle`
${reset}

body, html {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    /* position: fixed; */
    /* overflow: hidden; */
}

#root{
  width: 26.875rem;
  height: 58.25rem;
  font-size: 100%;
  margin: auto;

  /* @media (min-width: 320px) and (max-width: 480px){
    width: 26.875rem;
    height: 58.25rem;
    font-size: 100%;
    margin: auto;

  } */
}


* {
    box-sizing: border-box;
    }

@font-face {
    font-family: 'KOTRAHOPE';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/KOTRAHOPE.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
`;

export const LongButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23.875rem;
  height: 3.75rem;

  border: 0.0625rem solid transparent;
  border-radius: 1.25rem;
  background-color: ${({ theme }) => theme.colors.blue};
  color: white;
  ${({ theme }) => theme.fonts.kotrahopeCommon}

  cursor: pointer;
`;

export const MiddleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10.625rem;
  height: 3.375rem;

  border: 0.0625rem solid transparent;
  border-radius: 1.25rem;
  background-color: ${({ theme }) => theme.colors.blue};
  color: white;
  ${({ theme }) => theme.fonts.kotrahopeCommon}

  cursor: pointer;
`;

export const ShortButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.75rem;
  height: 3.375rem;

  border: 0.0625rem solid transparent;
  border-radius: 1.25rem;
  background-color: ${({ theme }) => theme.colors.blue};
  color: white;
  ${({ theme }) => theme.fonts.kotrahopeCommon}

  cursor: pointer;
`;

export const Container = styled.section`
  width: 26.875rem;
  height: 58.25rem;
  margin: 0 auto;


`;

export const Input = styled.input`
  width: 23.875rem;
  height: 3.75rem;

  border: 0.0625rem solid transparent;
  border-radius: 1.25rem;

  background-color: ${({ theme }) => theme.colors.skyblue};
  ${({ theme }) => theme.fonts.kotrahopeText}
`;

export default GlobalStyle;
