import styled from 'styled-components';

import { ReactComponent as LoupeSvg } from 'assets/icons/loupe.svg';

export const SearchWrapper = styled.div`
  position: relative;
  width: fit-content;

  &:after {
    content: '';
    position: absolute;
    width: 848.5px;
    height: 1000px;
    top: -55px;
    left: -100px;
    z-index: -10;

    background: linear-gradient(90deg, #94afff 0%, #4e64f9 94.5%);
    opacity: 0.1;
    border-radius: 40px;
  }
`;

export const SearchInput = styled.input`
  width: 621px;
  height: 37px;
  position: relative;
  padding: 10px 70px 10px 21px;
  background: #ffffff;
  box-shadow: 0 10px 20px rgba(0, 96, 206, 0.05);
  border-radius: 20px;
  letter-spacing: 0.5px;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  z-index: 2;
  color: #686868;
`;

export const SearchButton = styled(LoupeSvg)`
  padding: 10px 18px;
  z-index: 2;
  position: absolute;
  width: 53px;
  height: 37px;
  right: 0;
  fill: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  background: #664ef9;
  border-radius: 19px;
  &:hover {
    fill: #fff;
  }
`;
