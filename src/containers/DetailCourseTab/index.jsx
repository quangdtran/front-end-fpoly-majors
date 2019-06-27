import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBackIcon from '@material-ui/icons/NavigateBefore';

import LessonOrder from '@components/LessonOrder';

import { getCourseById } from '@utils/api';

import theme from '@src/root/theme';

import {
  WrapSideBar,
  WrapDetailCourseTab,
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
  SideBar,
  HeaderSideBar,
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
      link: 'https://dght003-7228c.firebaseapp.com/frames/courses/UDPM/bai1.html',
      orderNumber: 1,
      name: 'Giới thiệu và cài đặt',
    },
    {
      id: 2,
      link: 'https://dght003-7228c.firebaseapp.com/frames/courses/UDPM/bai2.html',
      orderNumber: 2,
      name: 'Chương trình đầu tiên',
    },
    {
      id: 3,
      link: 'https://dght003-7228c.firebaseapp.com/frames/courses/UDPM/bai3.html',
      orderNumber: 3,
      name: 'Biến và kiểu dữ liệu',
    },
    {
      id: 4,
      link: 'https://dght003-7228c.firebaseapp.com/frames/courses/UDPM/bai4.html',
      orderNumber: 4,
      name: 'Toán tử, vòng lặp, rẽ nhánh',
    },
    {
      id: 5,
      link: 'https://dght003-7228c.firebaseapp.com/frames/courses/UDPM/bai5.html',
      orderNumber: 5,
      name: 'Chưa cập nhật',
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
  LTDD: [
    {
      id: 1,
      url: 'https://www.youtube.com/embed/rcH4NbngPEk',
    },
    {
      id: 2,
      url: 'https://www.youtube.com/embed/80ayldnOsSI',
    },
    {
      id: 3,
      url: 'https://www.youtube.com/embed/QQk0PhOxMV4',
    },
    {
      id: 4,
      url: 'https://www.youtube.com/embed/v2WKdvG2TUA',
    },
    {
      id: 5,
      url: 'https://www.youtube.com/embed/2TPjqGpgPvM',
    },
    {
      id: 6,
      url: 'https://www.youtube.com/embed/Y6Yw3wlQIQw',
    },
    {
      id: 7,
      url: 'https://www.youtube.com/embed/Jk18f4_L0Ac',
    },
    {
      id: 8,
      url: 'https://www.youtube.com/embed/hLDurLNyMB0',
    },
    {
      id: 9,
      url: 'https://www.youtube.com/embed/5KpN6fxOLWo',
    },
    {
      id: 10,
      url: 'https://www.youtube.com/embed/RCXYMkGB57Q',
    },
    {
      id: 11,
      url: 'https://www.youtube.com/embed/fuxs7z0i0-M',
    },
    {
      id: 12,
      url: 'https://www.youtube.com/embed/HA-6iXtzkkY',
    },
  ],
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
    if (courseId === 'UDPM') {
      this.setState({
        listLesson: courses[courseId],
        lessonIsSelected: courses[courseId][0],
      });
      return;
    }
    getCourseById(courseId)
      .then((res) => {
        if (res.data) {
          this.setState({
            listLesson: res.data,
            lessonIsSelected: res.data[0],
          });
        }
      })
      .catch(err => console.log(err));
  }

  // METHODS:
  renderListCourseOrder() {
    const { listLesson } = this.state;
    return listLesson.map((lesson) => {
      return (
        <WrapLessonOrder
          key={lesson.id}
          is-selected={lesson.id === this.state.lessonIsSelected.id}
          onClick={() => this.setState({ lessonIsSelected: lesson })}
        >
          <TextLessonOrder>Bài {lesson.orderNumber}: {lesson.name}</TextLessonOrder>
        </WrapLessonOrder>
      );
    });
  }

  render() {
    const { lessonIsSelected, listLesson } = this.state;
    const { id } = this.props.match.params;
    if (!lessonIsSelected) return <h3>Có lỗi xảy ra vui lòng thử lại sau.</h3>;
    return (
      <WrapDetailCourseTab>
        <WrapSideBar>
          <HeaderSideBar>
            <p>Danh sách bài học</p>
          </HeaderSideBar>
          <SideBar>
            {this.renderListCourseOrder()}
          </SideBar>
        </WrapSideBar>
        <WrapBody>
          <WrapPathTree>
            <WrapPathLink>
              <p style={{ color: theme.color.orange, userSelect: 'none' }}><PathLink to="/learn">HỌC THỬ</PathLink> {'>'} <PathLink to={`/learn/${id}`}>{courseName[id]}</PathLink></p>
            </WrapPathLink>
            <WrapBtnDirect>
              <ChangeLessonBtn
                onClick={() => {
                  if (lessonIsSelected.orderNumber > 1) {
                    this.setState({
                      lessonIsSelected: listLesson[lessonIsSelected.orderNumber - 2],
                    });
                  }
                }}
              >
                <p style={{ display: 'flex', alignItems: 'center' }}>
                  <NavigateBackIcon />Bài trước
                </p>
              </ChangeLessonBtn>
              <ChangeLessonBtn
                onClick={() => {
                  if (lessonIsSelected.orderNumber < listLesson.length) {
                    this.setState({
                      lessonIsSelected: listLesson[lessonIsSelected.orderNumber],
                    });
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
              src={lessonIsSelected.link}
              title="bai-hoc"
            />
          </Body>
        </WrapBody>
      </WrapDetailCourseTab>
    );
  }
}

export default DetailCourseTab;
