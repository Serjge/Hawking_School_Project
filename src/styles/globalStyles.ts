import { createGlobalStyle, DefaultTheme } from 'styled-components';

import InterBold from 'assets/font/Inter-Bold.ttf';
import InterExtraBold from 'assets/font/Inter-ExtraBold.ttf';
import InterExtraLight from 'assets/font/Inter-ExtraLight.ttf';
import InterLight from 'assets/font/Inter-Light.ttf';
import InterMedium from 'assets/font/Inter-Medium.ttf';
import InterRegular from 'assets/font/Inter-Regular.ttf';
import InterSemiBold from 'assets/font/Inter-SemiBold.ttf';
import InterThin from 'assets/font/Inter-Thin.ttf';

export type GlobalThemeProps = {
  theme: DefaultTheme;
};

export const GlobalFonts = createGlobalStyle`

  @font-face {
    font-family: 'Inter', sans-serif;
    font-weight: 100;
    font-style: normal;
    src: local('Inter Font'), local('InterFont'),
    url(${InterThin}) format('truetype'),
  }

  @font-face {
    font-family: 'Inter', sans-serif;
    font-weight: 200;
    font-style: normal;
    src: local('Inter Font'), local('InterFont'),
    url(${InterExtraLight}) format('truetype'),
  }

  @font-face {
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-style: normal;
    src: local('Inter Font'), local('InterFont'),
    url(${InterLight}) format('truetype'),
  }

  @font-face {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-style: normal;
    src: local('Inter Font'), local('InterFont'),
    url(${InterRegular}) format('truetype'),
  }

  @font-face {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-style: normal;
    src: local('Inter Font'), local('InterFont'),
    url(${InterMedium}) format('truetype'),
  }

  @font-face {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-style: normal;
    src: local('Inter Font'), local('InterFont'),
    url(${InterSemiBold}) format('truetype'),
  }

  @font-face {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-style: normal;
    src: local('Inter Font'), local('InterFont'),
    url(${InterBold}) format('truetype'),
  }

  @font-face {
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-style: normal;
    src: local('Inter Font'), local('InterFont'),
    url(${InterExtraBold}) format('truetype'),
  }
`;

export const GlobalStyle = createGlobalStyle<GlobalThemeProps>`
  body {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    font-family: "InterFont", sans-serif;
    -webkit-font-smoothing: antialiased;
    margin: 0 auto;
    background-color: ${({
      theme: {
        backgroundColor: { main },
      },
    }) => main};
    color: ${({
      theme: {
        fontColor: { main },
      },
    }) => main};
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
