import React, { Component } from 'react';

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
        <WrapRowCourse>
          <WrapImageCourse>
            <OverlayImageCourse>
              <TextLearning>HỌC THỬ NGAY</TextLearning>
              <TextLine />
            </OverlayImageCourse>
            <ImageCourse src="http://localhost:8080/images/TKDH.png" />
          </WrapImageCourse>
          <WrapImageCourse>
            <OverlayImageCourse />
            <ImageCourse src="http://localhost:8080/images/LTDĐ.png" />
          </WrapImageCourse>
        </WrapRowCourse>
        <WrapRowCourse>
          <WrapImageCourse>
            <OverlayImageCourse />
            <ImageCourse src="http://localhost:8080/images/TKW.png" />
          </WrapImageCourse>
          <WrapImageCourse>
            <OverlayImageCourse />
            <ImageCourse src="http://localhost:8080/images/UDPM.png" />
          </WrapImageCourse>
        </WrapRowCourse>
      </WrapSharedArticleTab>
    );
  }
}
