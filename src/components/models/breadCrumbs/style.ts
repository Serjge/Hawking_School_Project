import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { ReactComponent as HomeSvg } from 'assets/icons/home.svg';
import { WIDTH } from 'styles/constance';

export const HomeIcon = styled(HomeSvg)``;

export const BreadCrumbsWrapper = styled.div`
  width: ${WIDTH.container}px;
  margin: 0 auto;
  margin-top: 42px;
  margin-bottom: 25px;
`;

type CurrentPageProps = {
  index: number;
};

export const CurrentPage = styled.p<CurrentPageProps>`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #686868;
  display: inline;
  margin-left: 17px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 3px;
    top: 50%;
    left: -8.5px;
    background: #4e64f9;
  }
`;

export const CustomLink = styled(Link)<CurrentPageProps>`
  ${({ index }) => {
    return css`
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 100%;
      display: inline;
      color: #4e64f9;
      margin-left: ${index === 0 ? '7' : '17'}px;
      position: relative;
    `;
  }}
`;
