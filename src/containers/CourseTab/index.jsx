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
            <Link to="/learn/UDPM">
              <OverlayImageCourse>
                <TextLearning>HỌC THỬ NGAY</TextLearning>
                <TextLine />
              </OverlayImageCourse>
              <ImageCourse src="http://localhost:8080/images/TKDH.png" />
            </Link>
          </WrapImageCourse>
          <WrapImageCourse>
            <OverlayImageCourse>
              <TextLearning>HỌC THỬ NGAY</TextLearning>
              <TextLine />
            </OverlayImageCourse>
            <ImageCourse src="http://localhost:8080/images/LTDĐ.png" />
          </WrapImageCourse>
        </WrapRowCourse>
        <WrapRowCourse style={{ alignItems: 'flex-end' }}>
          <WrapImageCourse>
            <OverlayImageCourse>
              <TextLearning>HỌC THỬ NGAY</TextLearning>
              <TextLine />
            </OverlayImageCourse>
            <ImageCourse src="http://localhost:8080/images/TKW.png" />
          </WrapImageCourse>
          <WrapImageCourse>
            <OverlayImageCourse>
              <TextLearning>HỌC THỬ NGAY</TextLearning>
              <TextLine />
            </OverlayImageCourse>
            <ImageCourse src="http://localhost:8080/images/UDPM.png" />
          </WrapImageCourse>
        </WrapRowCourse>
      </WrapSharedArticleTab>
    );
  }
}
