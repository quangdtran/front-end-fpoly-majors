import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBackIcon from '@material-ui/icons/NavigateBefore';

import LessonOrder from '@components/LessonOrder';

import theme from '@src/root/theme';

import {
  WrapSideBar,
  WrapDetailCourseTab,
  WrapBackListCourseBtn,
  WrapOptionSideBar,
  WrapBody,
  LessonIframe,
  TextLessonOrder,
  WrapLessonOrder,
  WrapPathTree,
  Body,
  PathLink,
  WrapBtnDirect,
  WrapPathLink,
  ChangeLessonBtn,
} from './styled';

const listLesson = [
  {
    id: 1,
    url: 'http://localhost:8080/frames/courses/UDPM/bai1.html',
  },
  {
    id: 2,
    url: 'http://localhost:8080/frames/courses/UDPM/bai2.html',
  },
  {
    id: 3,
    url: 'http://localhost:8080/frames/courses/UDPM/bai3.html',
  },
  {
    id: 4,
    url: 'http://localhost:8080/frames/courses/UDPM/bai4.html',
  },
  {
    id: 5,
    url: 'http://localhost:8080/frames/courses/UDPM/bai5.html',
  },
];

class DetailCourseTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lessonIsSelected: listLesson[0],
    };
  }

  // METHODS:
  renderListCourseOrder() {
    return listLesson.map((lesson, index) => {
      return (
        <WrapLessonOrder
          is-selected={lesson.id === this.state.lessonIsSelected.id}
          onClick={() => this.setState({ lessonIsSelected: lesson })}
        >
          <TextLessonOrder>Bài số {index + 1}</TextLessonOrder>
        </WrapLessonOrder>
      );
    });
  }

  render() {
    const { lessonIsSelected } = this.state;
    return (
      <WrapDetailCourseTab>
        <WrapSideBar>
          {/* <WrapOptionSideBar>
            <Link to="/learn" style={{ textDecoration: 'none' }}>
              <WrapBackListCourseBtn>
                <ArrowBackIcon style={{ marginRight: 20, marginLeft: 20 }} />
                Trở về khóa học
              </WrapBackListCourseBtn>
            </Link>
          </WrapOptionSideBar> */}
          {this.renderListCourseOrder()}
        </WrapSideBar>
        <WrapBody>
          <WrapPathTree>
            <WrapPathLink>
              <p style={{ color: theme.color.orange }}><PathLink to="/learn">HỌC THỬ</PathLink> {'>'} <PathLink to="/learn/UDPM">KHÓA HỌC ỨNG DỤNG PHẦN MỀM CƠ BẢN</PathLink></p>
            </WrapPathLink>
            <WrapBtnDirect>
              <ChangeLessonBtn
                onClick={() => {
                  if (lessonIsSelected.id > 1) {
                    this.setState({ lessonIsSelected: listLesson[lessonIsSelected.id - 2] });
                  }
                }}
              >
                <p style={{ display: 'flex', alignItems: 'center' }}>
                  <NavigateBackIcon />Bài trước
                </p>
              </ChangeLessonBtn>
              <ChangeLessonBtn
                onClick={() => {
                  if (lessonIsSelected.id < listLesson.length) {
                    this.setState({ lessonIsSelected: listLesson[lessonIsSelected.id] });
                  }
                }}
              >
                <p style={{ display: 'flex', alignItems: 'center' }}>
                  Bài sau<NavigateNextIcon />
                </p>
              </ChangeLessonBtn>
            </WrapBtnDirect>
          </WrapPathTree>
          <Body>
            <LessonIframe
              ref="lesson-iframe"
              src={lessonIsSelected.url}
              title="bai-hoc"
            />
          </Body>
          <div style={{
            width: '100%',
            height: '200px',
            backgroundColor: 'grey',
          }}
          >
            a
          </div>
        </WrapBody>
      </WrapDetailCourseTab>
    );
  }
}

export default DetailCourseTab;
