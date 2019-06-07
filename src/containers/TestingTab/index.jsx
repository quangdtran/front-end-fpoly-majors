import React, { Component } from 'react';

// import QuestionOrder from '@containers/QuestionOrder';
import QuestionOrder from '@components/QuestionOrder';
import AnswerOption from '@components/AnswerOption';

import {
  WrapTestingTab,
  WrapContent,
  WrapSideBar,
  BlackScreen,
  DetailQuestion,
  WrapProcessBar,
  WrapLeftProcessBar,
  WrapRightProcessBar,
  ProcessBar,
  ProcessBarCurrent,
  WrapTextProcess,
  TextQuestion,
  WrapAnswerOption,
  WrapTextQuestion,
  WrapPrevNextBtn,
  BackBtn,
  NextBtn,
} from './styled';

const questionExample = {
  content: 'Khi làm việc đội nhóm bạn là người...',
  answerOptions: [
    {
      id: 1,
      answer: 'Thu hút người khác',
    },
    {
      id: 2,
      answer: 'Sẽ làm việc cùng mọi người',
    },
    {
      id: 3,
      answer: 'Thích có cách riêng của mình',
    },
    {
      id: 3,
      answer: 'Tạo cảm giác thân thiện với mọi người',
    },
  ],
};

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

  renderListAnswerOption() {
    return questionExample.answerOptions.map(option =>
      <AnswerOption key={option.id} option={option} />);
  }

  render() {
    return (
      <WrapTestingTab>
        <WrapSideBar>
          {this.renderListQuestion()}
        </WrapSideBar>
        <WrapContent>
          <WrapProcessBar>
            <WrapLeftProcessBar>
              <ProcessBar>
                <ProcessBarCurrent />
              </ProcessBar>
              <WrapTextProcess>
                <span>32/40</span>
              </WrapTextProcess>
            </WrapLeftProcessBar>
            <WrapRightProcessBar>
              <span>completing...</span>
            </WrapRightProcessBar>
          </WrapProcessBar>
          <DetailQuestion>
            <BlackScreen />
            <WrapTextQuestion>
              <TextQuestion>Câu hỏi: {questionExample.content}</TextQuestion>
            </WrapTextQuestion>
            <WrapAnswerOption>
              {this.renderListAnswerOption()}
            </WrapAnswerOption>
            <WrapPrevNextBtn>
              <BackBtn>Back</BackBtn>
              <NextBtn>Next</NextBtn>
            </WrapPrevNextBtn>
          </DetailQuestion>
        </WrapContent>
      </WrapTestingTab>
    );
  }
}
