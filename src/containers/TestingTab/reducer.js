import {
  CHANGE_QUESTION_IS_SELECTED,
  GET_QUESTION_DATA,
  UPDATE_QUESTION_IS_CHECKED,
  UPDATE_LIST_ANSWER,
} from './constants';

const initialState = {
  orderQuestionIsSelected: 1,
  listQuestion: [],
  listAnswer: new Map(),
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_QUESTION_IS_SELECTED:
      return { ...state, ...payload };
    case GET_QUESTION_DATA:
      return { ...state, ...payload };
    case UPDATE_LIST_ANSWER:
      return { ...state, listAnswer: new Map(payload.listAnswer) };
    default:
      return state;
  }
};
