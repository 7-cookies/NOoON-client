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
    height:100%;

    display: flex;
    justify-content: center;
    align-items: center;
    
    overflow: scroll;

    scrollbar-width: none;
    -ms-overflow-style: none;

    scroll-behavior: smooth;

  ::-webkit-scrollbar {
  display: none;
  }
    

    @media (min-width: 1200px){ 
      font-size: 16px;
    }
    @media (min-width: 1000px){ 
      font-size: 16px;
    }


    @media (min-width: 931px) and (max-width:999px){ 
      font-size: 16px;

    }


    //Surface Pro 7
    @media (min-width: 901px) and (max-width:930px){ 
      font-size: 16px;
    }

    //
    @media (min-width: 831px) and (max-width:900px){ 
      font-size: 16px;
    }

    //iPad Air
    @media (min-width: 790px) and (max-width:830px){ 
      font-size: 16px;
    }


    //iPad Mini
    @media (min-width: 750px) and (max-width:789px){ 
      font-size: 16px;
    }

    @media (min-width: 600px) and (max-width:749px){ 
      font-size: 17.8px;
      @media (min-height: 740px) and (max-height: 999px){
            height: 80%!important;
      }
    }

    @media (min-width: 471px) and (max-width:580px){ 
      font-size: 17.8px;

    }
    //
    @media (min-width: 451px) and (max-width:470px){ 
      font-size: 16px;
    }

    //iPhone XR & Galaxy S20 Ultra & A51/71
    @media (min-width: 410px) and (max-width:450px){ 
      font-size: 15.4px;
    }

    //iPhone 12 Pro
    @media (min-width: 386px) and (max-width:409px){ 
      font-size: 14.7px;
     

    }

    //
    @media (min-width: 384px) and (max-width:385px){ 
      font-size: 14.2px;
    }


    //iPhone SE
    @media (min-width: 371px) and (max-width:383px){ 
      font-size: 13.95px;
   
    }

    @media (min-width:361px) and (max-width: 370px){
      font-size: 13.95px;
    }

    @media (min-width:331px) and (max-width: 361px){
      font-size: 13.4px;

   
    }


     //Galaxy S9+
    @media (min-width:301px) and (max-width:330px){
      font-size: 11.9px;
   
    }

    //Galaxy Fold
    @media (min-width:251px) and (max-width: 300px){ 
      font-size:10.4px;
    }

    @media (max-width:250px){
      font-size:8.9px;
    }


}

#root{
  width: 26.875rem;
  height: 58.25rem;

  overflow: scroll;
  margin: auto;

  scrollbar-width: none;
    -ms-overflow-style: none;

  }
::-webkit-scrollbar {
  display: none;
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
