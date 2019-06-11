import {
  CHANGE_QUESTION_IS_SELECTED,
  GET_QUESTION_DATA,
  UPDATE_QUESTION_IS_CHECKED,
} from './constants';

const initialState = {
  orderQuestionIsSelected: 1,
  listQuestion: [],
  listAnswer: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_QUESTION_IS_SELECTED:
      return { ...state, ...payload };
    case GET_QUESTION_DATA:
      return { ...state, ...payload };
    case UPDATE_QUESTION_IS_CHECKED:
      return { ...state, ...payload };
    default:
      return state;
  }
};
