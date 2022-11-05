import { createGlobalStyle, DefaultTheme } from 'styled-components';

export type GlobalThemeProps = {
  theme: DefaultTheme;
};

export const GlobalStyle = createGlobalStyle<GlobalThemeProps>`
  body {
    font-weight: 500;
    font-size: 14px;
    line-height: 15px;
    font-family: "Inter", sans-serif;
    -webkit-font-smoothing: antialiased;
    margin: 0 auto;
    background-color: ${({ theme: { mainBackgroundColor } }) => mainBackgroundColor};
    color: ${({ theme: { mainFontColor } }) => mainFontColor};
  }

  /* Reset and base styles  */
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border: none;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :focus,
  :active {
    /*outline: none;*/
  }

  a:focus,
  a:active {
    /* outline: none;*/
  }

  /* Links */

  a, a:link, a:visited {
    /* color: inherit; */
    text-decoration: none;
    /* display: inline-block; */
  }

  a:hover {
    /* color: inherit; */
    text-decoration: none;
  }

  /* Common */

  aside, nav, footer, header, section, main {
    display: block;
  }

  h1, h2, h3, h4, h5, h6, p {
    font-size: inherit;
    font-weight: inherit;
  }

  ul, ul li {
    list-style: none;
  }

  img {
    vertical-align: top;
  }

  img, svg {
    max-width: 100%;
    height: auto;
  }

  address {
    font-style: normal;
  }

  /* Form */

  input, textarea, button, select {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background-color: transparent;
  }

  input::-ms-clear {
    display: none;
  }

  button, input[type="submit"] {
    display: inline-block;
    box-shadow: none;
    background-color: transparent;
    background: none;
    cursor: pointer;
  }

  input:focus, input:active,
  button:focus, button:active {
    outline: none;
  }

  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  label {
    cursor: pointer;
  }

  legend {
    display: block;
  }
`;
