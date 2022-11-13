import styled from 'styled-components';

export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 100%;
  letter-spacing: 0.5px;
  color: ${({
    theme: {
      fontColor: { pageTitle },
    },
  }) => pageTitle};
`;
