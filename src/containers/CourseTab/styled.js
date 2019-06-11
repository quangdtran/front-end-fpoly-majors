import styled from 'styled-components';
import theme from '@src/root/theme';

export const WrapSharedArticleTab = styled.div`
  width: 100%;
  height: 100%;
`;

export const WrapRowCourse = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OverlayImageCourse = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${theme.bgColor.blue};
  opacity: 0;
  transition: 0.4s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 0;

  &:hover{
    opacity: 0.5;
  }
`;

export const ImageCourse = styled.img`
  width: 330px;
`;

export const TextLearning = styled.p`
  margin: 2px;
  color: white;
  z-index: 100;
`;

export const TextLine = styled.div`
  margin: 2px;
  height: 2px;
  width: 40%;
  background-color: white;
`;

export const WrapImageCourse = styled.div`
  position: relative;
  margin: 45px;
`;

export const WrapProcessBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 10%;
  background-color: ${theme.bgColor.processBar};
`;
