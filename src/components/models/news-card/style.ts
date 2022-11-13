import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const WrapperNewsCard = styled.div`
  width: 31.7%;
  height: 500px;
  filter: drop-shadow(0px 20px 40px rgba(135, 124, 202, 0.15));
  border-radius: 10px;
  background: #fffefe;
  margin-bottom: 30px;
`;

export const ImageNewsCard = styled.img`
  width: 100%;
  height: 45%;
  margin: 0;
  overflow: hidden;
  object-fit: cover;
  border-radius: 10px;
`;

export const DescriptionNewsCard = styled.div`
  padding: 30px 20px 23px 20px;
`;

export const ContentNewsCard = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  height: 85px;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.4px;
  margin-top: 17px;
  color: #686868;
`;

export const TitleNewsCard = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #1e2123;
`;

export const DateNewsCard = styled.div`
  background: #f8f8f8;
  border-radius: 18px;
  padding: 10px 8px;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.4px;

  text-align: right;

  color: #8291a3;
`;

export const ButtonNewsCard = styled(Link)`
  padding: 10px 15px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  color: #664ef9;

  background: rgba(102, 78, 249, 0.1);
  border-radius: 17px;
`;
