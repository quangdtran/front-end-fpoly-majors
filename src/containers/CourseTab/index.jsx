import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import {
  WrapSharedArticleTab,
  WrapRowCourse,
  WrapImageCourse,
  ImageCourse,
  OverlayImageCourse,
  TextLearning,
  TextLine,
} from './styled';

export default class CourseTab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <WrapSharedArticleTab>
        <WrapRowCourse style={{ alignItems: 'flex-start', paddingBottom: 25 }}>
          <WrapImageCourse>
            <Link to="/learn/TKDH">
              <OverlayImageCourse>
                <TextLearning>HỌC THỬ NGAY</TextLearning>
                <TextLine />
              </OverlayImageCourse>
              <ImageCourse src="http://localhost:8080/images/TKDH.png" />
            </Link>
          </WrapImageCourse>
          <WrapImageCourse>
            <Link to="/learn/LTDD">
              <OverlayImageCourse>
                <TextLearning>HỌC THỬ NGAY</TextLearning>
                <TextLine />
              </OverlayImageCourse>
              <ImageCourse src="http://localhost:8080/images/LTDĐ.png" />
            </Link>
          </WrapImageCourse>
        </WrapRowCourse>
        <WrapRowCourse style={{ alignItems: 'flex-end' }}>
          <WrapImageCourse>
            <Link to="/learn/TKW">
              <OverlayImageCourse>
                <TextLearning>HỌC THỬ NGAY</TextLearning>
                <TextLine />
              </OverlayImageCourse>
              <ImageCourse src="http://localhost:8080/images/TKW.png" />
            </Link>
          </WrapImageCourse>
          <WrapImageCourse>
            <Link to="/learn/UDPM">
              <OverlayImageCourse>
                <TextLearning>HỌC THỬ NGAY</TextLearning>
                <TextLine />
              </OverlayImageCourse>
              <ImageCourse src="http://localhost:8080/images/UDPM.png" />
            </Link>
          </WrapImageCourse>
        </WrapRowCourse>
      </WrapSharedArticleTab>
    );
  }
}
