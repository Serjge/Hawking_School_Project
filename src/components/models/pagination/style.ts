import styled, { css } from 'styled-components';

export const WrapperPagination = styled.div`
  display: flex;
`;

type NumberPageProps = {
  isActive?: boolean;
};

export const NumberPage = styled.span<NumberPageProps>`
  ${({ isActive }) => {
    return css`
      text-align: center;
      font-style: normal;
      display: block;
      font-weight: ${isActive ? '700' : '400'};
      font-size: 18px;
      line-height: 22px;
      padding: 0 6px;

      border-bottom: ${isActive && '#ffd54f solid 2px'};
      color: ${isActive ? '#000' : '#686868'};
      margin-right: 3px;
    `;
  }}
`;

export const Dot = styled.span<NumberPageProps>`
  text-align: center;
  font-style: normal;
  display: block;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  width: 22px;

  color: #686868;
`;
