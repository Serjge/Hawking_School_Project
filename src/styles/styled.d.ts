import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      main: string,
      second?: string,
    },
    colorActive: {
      main: string,
      second?: string,
    }
    backgroundColor: {
      main: string,
      second?: string,
    },
    fontColor: {
      main: string,
      second?: string,
      pageTitle?: string,
    },
    borderColor: {
      main: string,
      second?: string,
    },
  }
}