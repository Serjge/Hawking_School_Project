import styled, { css } from 'styled-components';

type FlexProps = {
  justifyContent?:
    | 'flex-end'
    | 'flex-start'
    | 'center'
    | 'space-between'
    | 'space-around';
  flexDirection?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
  alignItems?: 'flex-end' | 'flex-start' | 'center' | 'self-end' | 'self-start';
  alignSelf?: 'self-start' | 'self-end' | 'center' | 'auto';
  margin?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
};

export const Flex = styled.div<FlexProps>`
  ${({
    margin,
    justifyContent,
    alignItems,
    flexDirection,
    alignSelf,
    ml,
    mr,
    mb,
    mt,
  }) => {
    return css`
      margin: ${margin};
      display: flex;
      justify-content: ${justifyContent};
      align-items: ${alignItems};
      flex-direction: ${flexDirection};
      align-self: ${alignSelf};
      margin-top: ${mt};
      margin-bottom: ${mb};
      margin-right: ${mr};
      margin-left: ${ml};
    `;
  }}
`;
