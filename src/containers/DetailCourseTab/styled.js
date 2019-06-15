import styled from 'styled-components';
import theme from '@src/root/theme';

export const WrapDetailCourseTab = styled.div`
  width: 100%;
  height: 100%;
`;

export const WrapSideBar = styled.div`
  width: 20%;
  height: 100%;
  position: relative;
  overflow-y: scroll;
`;

export const WrapOptionSideBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 40px;
  background-color: ${theme.bgColor.green};
`;

export const WrapBackListCourseBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  color: white;
  cursor: pointer;
`;
