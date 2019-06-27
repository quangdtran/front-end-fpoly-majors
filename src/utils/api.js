import axios from 'axios';

const api = axios.create({
  baseURL: 'http://dght003.herokuapp.com/api',
  timeout: 5000,
});

export const getAllQuestion = () => api.get('/questions');

export const getCourseById = courseId => api.get(`pre-taste-courses/${courseId}`);

export const postTestResult = (userInfo, answers) => api.post('/test', {
  candinate: { ...userInfo },
  answers,
});
