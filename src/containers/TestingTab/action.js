import {
  CHANGE_QUESTION_IS_SELECTED,
  GET_QUESTION_DATA,
  UPDATE_QUESTION_IS_CHECKED,
} from './constants';

export const changeOrderQuestionIsSelected = order => ({
  type: CHANGE_QUESTION_IS_SELECTED,
  payload: {
    orderQuestionIsSelected: order,
  },
});

export const getQuestionData = (listQuestion) => {
  // const listAnswer = listQuestion.map(question => ({
  //   questionId: question.id,
  //   answerId: null,
  // }));
  const listAnswer = new Map();
  listQuestion.forEach(question => listAnswer.set(question.id, null));
  return ({
    type: GET_QUESTION_DATA,
    payload: {
      listQuestion,
      listAnswer,
    },
  });
};

export const updateListAnswer = (listAnswer) => {
  return ({
    type: UPDATE_QUESTION_IS_CHECKED,
    payload: {
      listAnswer,
    },
  });
};
