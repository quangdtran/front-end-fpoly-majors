import {
  CHANGE_QUESTION_IS_SELECTED,
} from './constants';

export const changeOrderQuestionIsSelected = order => ({
  type: CHANGE_QUESTION_IS_SELECTED,
  payload: {
    orderQuestionIsSelected: order,
  },
});
