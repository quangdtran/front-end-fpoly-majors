import styled from 'styled-components';
import theme from '@src/root/theme';

export const WrapSharedArticleTab = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const WrapRowCourse = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageCourse = styled.img`
  margin: 45px;
  width: 330px;
`;

export const WrapProcessBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 10%;
  background-color: ${theme.bgColor.processBar};
`;
