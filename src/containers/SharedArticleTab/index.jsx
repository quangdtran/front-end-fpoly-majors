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
        <iframe
          style={{
            width: '100%',
            height: '2000%',
            border: 'none',
          }}
          title="test"
          scrolling="no"
          src="http://localhost:3003/"
        />
      </WrapSharedArticleTab>
    );
  }
}
