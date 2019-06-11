import React, { Component } from 'react';
import { connect } from 'react-redux';

import QuestionOrder from '@components/QuestionOrder';
import AnswerOption from '@components/AnswerOption';

import axios from 'axios';
import configAPI from '@src/root/configAPI.json';

import questions from '@src/assets/data/questions.json';

import { getQuestionData } from './action';

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
      id: 4,
      answer: 'Tạo cảm giác thân thiện với mọi người',
    },
  ],
};

const api = axios.create({
  baseURL: configAPI.baseURL,
  timeout: 1000,
});

class TestingTab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // LIFECYCLE:
  componentDidMount() {
    // api.get('/questions.json')
    //   .then(res => this.props.getQuestionData(res.data))
    //   .catch(err => console.log(err));
    this.props.getQuestionData(questions.map((question, i) =>
      ({ ...question, isDone: false, order: i + 1 })));
  }

  // RENDER:
  renderListQuestion() {
    return this.props.listQuestion.map((question) => {
      return (
        <QuestionOrder
          key={question.id}
          question={question}
        />
      );
    });
  }

  renderListAnswerOption() {
    const {
      listQuestion,
      orderQuestionIsSelected,
    } = this.props;

    const currentQuestion = listQuestion[orderQuestionIsSelected - 1];
    if (currentQuestion) {
      return currentQuestion.answers.map(answer =>
        <AnswerOption key={answer.id} answer={answer} currentQuestion={currentQuestion} />);
    }
    return null;
  }

  render() {
    const {
      listQuestion,
      orderQuestionIsSelected,
    } = this.props;

    const currentQuestion = listQuestion[orderQuestionIsSelected - 1];
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
              <TextQuestion>
                Câu hỏi: {currentQuestion ? currentQuestion.content : null}
              </TextQuestion>
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

const mapStateToProps = (state) => {
  return {
    listQuestion: state.testingTab.listQuestion,
    orderQuestionIsSelected: state.testingTab.orderQuestionIsSelected,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getQuestionData: listQuestion => dispatch(getQuestionData(listQuestion)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestingTab);
