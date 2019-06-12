import React, { Component } from 'react';

import {
  WrapTestResult,
  WrapSectorInfo,
  WrapListMajorInfo,
  WrapSectorCircle,
  WrapSectorContent,
  SectorCircle,
  TitleSectorContent,
} from './styled';

export default class TestResult extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <WrapTestResult>
        <WrapSectorInfo>
          <WrapSectorCircle>
            <SectorCircle>
              80%
            </SectorCircle>
          </WrapSectorCircle>
          <WrapSectorContent>
            <TitleSectorContent>Công nghệ thông tin</TitleSectorContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Eum, incidunt dolore necessitatibus soluta iste hic obcaecati fugit,
             dolor earum impedit iusto unde ab, omnis vero laborum in consequuntur velit nobis.
          </WrapSectorContent>
        </WrapSectorInfo>
        <WrapListMajorInfo>list major</WrapListMajorInfo>
      </WrapTestResult>
    );
  }
}
