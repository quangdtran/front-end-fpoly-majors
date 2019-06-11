import React, { Component } from 'react';

import {
  WrapSharedArticleTab,
  WrapRowCourse,
  ImageCourse,
} from './styled';

export default class SharedArticleTab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <WrapSharedArticleTab>
        <WrapRowCourse>
          <ImageCourse src="http://localhost:8080/images/TKDH.png" />
          <ImageCourse src="http://localhost:8080/images/LTDĐ.png" />
        </WrapRowCourse>
        <WrapRowCourse>
          <ImageCourse src="http://localhost:8080/images/TKW.png" />
          <ImageCourse src="http://localhost:8080/images/UDPM.png" />
        </WrapRowCourse>
      </WrapSharedArticleTab>
    );
  }
}
