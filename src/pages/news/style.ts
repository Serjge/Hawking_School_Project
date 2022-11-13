import styled from 'styled-components';

import { WIDTH } from 'styles/constance';

export const WrapperNews = styled.section`
  margin: 0 auto;
  width: ${WIDTH.container}px;
  padding: 25px 0 102px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContainerNews = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const WrapperListNews = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 52px 0 80px 0;
`;
