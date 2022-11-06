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
    width: {
      wrapper: number,
    },
    fontColor: {
      main: string,
      second?: string,
    },
    borderColor: {
      main: string,
      second?: string,
    },
  }
}