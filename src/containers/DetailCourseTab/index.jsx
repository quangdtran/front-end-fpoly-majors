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

const courseName = {
  UDPM: 'KHÓA HỌC ỨNG DỤNG PHẦN MỀM CƠ BẢN',
  TKW: 'KHÓA HỌC THIẾT KẾ WEBSITE CƠ BẢN',
  TKDH: 'KHÓA HỌC THIẾT KẾ ĐỒ HỌA CƠ BẢN',
  LTDD: 'KHÓA HỌC LẬP TRÌNH MOBILE CƠ BẢN',
};

const courses = {
  UDPM: [
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
  ],
  TKW: [
    {
      id: 1,
      url: 'https://www.youtube.com/embed/zNV_9zs_JTU',
    },
    {
      id: 2,
      url: 'https://www.youtube.com/embed/03jUe-_8gXg',
    },
    {
      id: 3,
      url: 'https://www.youtube.com/embed/CftaNEbfNEY',
    },
    {
      id: 4,
      url: 'https://www.youtube.com/embed/ZJylJASl7AQ',
    },
    {
      id: 5,
      url: 'https://www.youtube.com/embed/LLmK2AEY3Xk',
    },
    {
      id: 6,
      url: 'https://www.youtube.com/embed/KVbo3RTDJJc',
    },
    {
      id: 7,
      url: 'https://www.youtube.com/embed/KVbo3RTDJJc',
    },
    {
      id: 8,
      url: 'https://www.youtube.com/embed/YpDsFw5izBg',
    },
    {
      id: 9,
      url: 'https://www.youtube.com/embed/YpDsFw5izBg',
    },
    {
      id: 10,
      url: 'https://www.youtube.com/embed/AO9Bkeh3VFM',
    },
  ],
  TKDH: [
    {
      id: 1,
      url: 'https://www.youtube.com/embed/AO9Bkeh3VFM',
    },
    {
      id: 2,
      url: 'https://www.youtube.com/embed/AO9Bkeh3VFM',
    },
    {
      id: 3,
      url: 'https://www.youtube.com/embed/AO9Bkeh3VFM',
    },
    {
      id: 4,
      url: 'https://www.youtube.com/embed/AO9Bkeh3VFM',
    },
    {
      id: 5,
      url: 'https://www.youtube.com/embed/AO9Bkeh3VFM',
    },
    {
      id: 6,
      url: 'https://www.youtube.com/embed/AO9Bkeh3VFM',
    },
    {
      id: 7,
      url: 'https://www.youtube.com/embed/AO9Bkeh3VFM',
    },
  ],
  LTDD: [],
};

class DetailCourseTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCourse: '',
      lessonIsSelected: {},
      listLesson: [],
    };
  }

  // LIFECYCLE:
  componentDidMount() {
    const courseId = this.props.match.params.id;
    this.setState({
      listLesson: courses[courseId] || [],
      lessonIsSelected: courses[courseId][0] || {},
    });
  }

  // METHODS:
  renderListCourseOrder() {
    const { listLesson } = this.state;
    return listLesson.map((lesson, index) => {
      return (
        <WrapLessonOrder
          key={lesson.id}
          is-selected={lesson.id === this.state.lessonIsSelected.id}
          onClick={() => this.setState({ lessonIsSelected: lesson })}
        >
          <TextLessonOrder>Bài số {index + 1}</TextLessonOrder>
        </WrapLessonOrder>
      );
    });
  }

  render() {
    const { lessonIsSelected, listLesson } = this.state;
    const { id } = this.props.match.params;
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
              <p style={{ color: theme.color.orange, userSelect: 'none' }}><PathLink to="/learn">HỌC THỬ</PathLink> {'>'} <PathLink to={`/learn/${id}`}>{courseName[id]}</PathLink></p>
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
