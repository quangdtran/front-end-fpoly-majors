import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import {
  WrapSideBar,
  WrapDetailCourseTab,
  WrapBackListCourseBtn,
  WrapOptionSideBar,
} from './styled';

class DetailCourseTab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <WrapDetailCourseTab>
        <WrapSideBar>
          <WrapOptionSideBar>
            <Link to="/learn" style={{ textDecoration: 'none' }}>
              <WrapBackListCourseBtn>
                <ArrowBackIcon style={{ marginRight: 20, marginLeft: 20 }} />
                Trở về khóa học
              </WrapBackListCourseBtn>
            </Link>
          </WrapOptionSideBar>
        </WrapSideBar>
        detail course
      </WrapDetailCourseTab>
    );
  }
}

export default DetailCourseTab;
