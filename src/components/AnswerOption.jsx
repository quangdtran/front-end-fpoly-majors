import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  WrapAnswerOption,
  CheckBoxAnswerOption,
  LabelAnswerOption,
  SpanAnswerOption,
} from './styled';

class AnswerOption extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { id, answer } = this.props.option;
    return (
      <WrapAnswerOption>
        <LabelAnswerOption>
          {answer}
          <CheckBoxAnswerOption type="checkbox" />
          <SpanAnswerOption />
        </LabelAnswerOption>
      </WrapAnswerOption>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerOption);
