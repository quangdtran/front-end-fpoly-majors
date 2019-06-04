import {
  CHANGE_QUESTION_IS_SELECTED,
} from './constants';

const initialState = {
  orderQuestionIsSelected: 1,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_QUESTION_IS_SELECTED:
      return { ...state, ...payload };

    default:
      return state;
  }
};
