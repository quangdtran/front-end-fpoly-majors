import React, { Component } from 'react';

// import QuestionOrder from '@containers/QuestionOrder';
import QuestionOrder from '@components/QuestionOrder';

import {
  WrapTestingTab,
  WrapContent,
  WrapSideBar,
} from './styled';

export default class TestingTab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // RENDER:
  renderListQuestion() {
    const data = [];
    for (let i = 0; i < 40; i++) {
      data.push({
        order: i + 1,
        isDone: i < 33,
      });
    }
    return data.map((el) => {
      return (
        <QuestionOrder
          key={el.order}
          question={el}
        />
      );
    });
  }

  render() {
    return (
      <WrapTestingTab>
        <WrapSideBar>
          {this.renderListQuestion()}
        </WrapSideBar>
        <WrapContent>b</WrapContent>
      </WrapTestingTab>
    );
  }
}
