import { css } from 'styled-components';

const colors = {
  skyblue: '#E9F3FF',
  blue: '#A6C7EF',
  grey: '#B4B4B4',
};

const fonts = {
  kotrahopeCommon: css`
    font-family: 'KOTRAHOPE';
    font-style: normal;
    font-weight: 400;
    font-size: 1.375rem;
    line-height: 1.4375rem;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.07em;
  `,
  kotrahopeLandingTitle: css`
    font-family: 'KOTRAHOPE';
    font-style: normal;
    font-weight: 400;
    font-size: 2.625rem;
    line-height: 1.4375rem;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.07em;
    color: #6578BE;
  `,
  kotrahopeText: css`
    font-family: 'KOTRAHOPE';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.4375rem;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.07em;
  `,
  kotrahopeMessage: css`
    font-family: 'KOTRAHOPE';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height : 1.875rem;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.07em;
  `,
  kotrahopeError: css`
    font-family: 'KOTRAHOPE';
    font-style: normal;
    font-weight: 400;
    font-size: 0.9375rem;
    line-height : 1.875rem;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.07em;
    color:#EB4253;
  `
};

const theme = {
  colors,
  fonts
};

export default theme;