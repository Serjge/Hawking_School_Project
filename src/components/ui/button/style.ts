import styled, { css } from 'styled-components';

type ButtonPropsType = {
  type: 'violet';
};

export const BaseButton = styled.button`
  background: linear-gradient(90deg, #9d94ff 0%, #6b50e9 94.5%);
  border-radius: 19px;
  padding: 10px 18px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme: { fontColor } }) => fontColor.second};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  letter-spacing: 0.25px;
`;

export const ButtonStyles = styled(BaseButton)<ButtonPropsType>`
  ${() => {
    return css`
      //font-size: 12px;
    `;
  }}
`;
