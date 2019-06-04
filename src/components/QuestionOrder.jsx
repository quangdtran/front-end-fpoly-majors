import React, { Component } from 'react';

import { connect } from 'react-redux';

import theme from '@src/root/theme';

import { changeOrderQuestionIsSelected } from '@containers/TestingTab/action';

import {
  WrapQuestionOrder,
  Text,
} from './styled';


class QuestionOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      question,
      orderQuestionIsSelected,
      changeQuestionIsSelected,
    } = this.props;
    let textColor = 'black';
    if (question.isDone) textColor = theme.color.green;
    else if (question.order === orderQuestionIsSelected) {
      textColor = 'white';
    }
    return (
      <WrapQuestionOrder
        onClick={() => changeQuestionIsSelected(question.order)}
        is-selected={question.order === orderQuestionIsSelected}
      >
        <Text style={{ color: textColor }}>Câu hỏi số {question.order}</Text>
      </WrapQuestionOrder>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orderQuestionIsSelected: state.testingTab.orderQuestionIsSelected,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeQuestionIsSelected: order => dispatch(changeOrderQuestionIsSelected(order)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionOrder);
