import styled from 'styled-components';
import theme from '@src/root/theme';
import { Link, NavLink } from 'react-router-dom';
import {
  Grid,
} from '@material-ui/core';

// Header:

export const WrapHeader = styled.div`
  width: 100%;
  background: ${theme.bgColor.blue};
  display: flex;
  flex-direction: row;
  height: 15%;
`;

export const HeaderLink = styled(NavLink)`
  color: white;
  text-decoration: none;
`;

export const WrapHeaderLogo = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapHeaderMenu = styled(Grid)`
  width: 80% !important;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px 0;
`;

export const HeaderLogo = styled.img`
  width: 150px;
`;

// QuestionOrder:

export const WrapQuestionOrder = styled.div`
  font-size: 1em;
  text-align: left;
  padding: 25px 10px;
  cursor: pointer;
  background-color: ${props => (props['is-selected'] ? theme.bgColor.questionIsSelected : 'white')};
`;

export const Text = styled.p``;
