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
  height: 100%;
`;

export const HeaderLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  user-select: none;
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

export const Text = styled.p`
  user-select: none;
`;

// AnswerOption:
export const WrapAnswerOption = styled.div`
  z-index: 1;
`;

export const SpanAnswerOption = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;

  &:after {
    content: "";
    position: absolute;
    display: none;
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export const RadioAnswerOption = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked ~  ${SpanAnswerOption} {
    background-color: ${theme.bgColor.green} !important;
  }
  &:checked ~ ${SpanAnswerOption}:after {
    display: block;
  }
`;

export const LabelAnswerOption = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 18px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: white;
  border-radius: 50%;

  &:hover ${RadioAnswerOption} ~ ${SpanAnswerOption} {
    background-color: #ccc;
  }
`;
