import styled from 'styled-components';
import theme from '@src/root/theme';

export const WrapTestingTab = styled.div`
  display: flex;
  flex-direction: row;
  height: 85%;
  width: 100%;
  overflow: hidden;
`;

export const WrapSideBar = styled.div`
  width: 20%;
  height: 100%;
  overflow-y: visible;
  overflow-y: scroll;
`;

export const WrapContent = styled.div`
  width: 80%;
`;
