import styled, { css } from 'styled-components';

import { ReactComponent as HeartSvg } from 'assets/icons/heart.svg';
import { MarkIcon } from 'components/icon';
import { WIDTH } from 'styles/constance';

type HeaderType = {
  type: 'top' | 'bottom';
};

export const HeaderStyled = styled.div<HeaderType>`
  ${({ theme: { backgroundColor }, type }) => {
    if (type === 'bottom') {
      return css`
        background-color: ${backgroundColor.main};
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
        height: 60px;
        display: flex;
        align-items: center;
      `;
    }

    return css`
      background-color: ${backgroundColor.second};
    `;
  }};
`;

export const HeaderWrapper = styled.header`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${WIDTH.container}px;
  margin: 0 auto;
`;

export const Nav = styled.nav`
  display: flex;
`;

type NavItemType = HeaderType & {
  isActive: boolean;
};

export const NavItem = styled.div<NavItemType>`
  display: flex;
  align-items: center;
  font-style: normal;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.25px;

  ${({ theme: { borderColor, color, colorActive }, isActive, type }) => {
    if (type === 'bottom') {
      return css`
        height: 60px;
        color: ${colorActive.main};
        border-bottom: solid 3px ${isActive ? borderColor.main : 'none'};
        font-weight: 600;
      `;
    }

    return css`
      margin-right: 57px;
      height: 40px;
      color: ${isActive ? colorActive.main : color.second};
      border-bottom: solid 3px ${isActive ? borderColor.main : 'none'};
      font-weight: 400;
    `;
  }}
`;

type ButtonType = {
  colorButton: 'grey' | 'violet';
};

export const ButtonHeader = styled.button<ButtonType>`
  ${({ theme: { color }, colorButton }) => {
    return css`
      margin-left: 40px;
      color: ${colorButton === 'grey' ? color.second : color.main};
      font-weight: 500;
      letter-spacing: 0.5px;
    `;
  }}
`;

export const Heart = styled(HeartSvg)`
  margin-left: 10px;
`;

type MarkType = {
  isActive: boolean;
  colorMark: 'grey' | 'yellow';
};

export const Mark = styled(MarkIcon)<MarkType>`
  ${({ theme: { color, colorActive, borderColor }, isActive, colorMark }) => {
    if (colorMark === 'yellow') {
      return css`
        margin-left: 15px;
        fill: ${borderColor.main};
        width: 12px;
        height: 15px;
      `;
    }

    return css`
      margin-right: 5px;
      fill: ${isActive ? colorActive.main : color.second};
      width: 8px;
      height: 10px;
    `;
  }}
`;
