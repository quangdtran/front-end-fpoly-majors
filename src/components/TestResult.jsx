import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  WrapTestResult,
  WrapSectorInfo,
  WrapListMajorInfo,
  WrapSectorCircle,
  WrapSectorContent,
  SectorCircle,
  TitleSectorContent,
  WrapMajorInfo,
  TitleMajorContent,
  WrapMajorContent,
  MajorContent,
  WrapMajorCircle,
  MajorCircle,
} from './styled';

class TestResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CNTT: 72,
      UDPM: 50,
      TKW: 62,
      LTDD: 43,
      TKDH: 80,
    };
  }

  // LIFECYCLE:
  componentDidUpdate() {
    const { listAnswer } = this.props;
    if (listAnswer && listAnswer.size !== 0) {
      // send api
    }
  }

  // METHODS:
  getPercentNotSuitable(percent) {
    return 90 + (100 - percent) * 3.6;
  }

  render() {
    const {
      CNTT,
      UDPM,
      TKW,
      LTDD,
      TKDH,
    } = this.state;
    return (
      <WrapTestResult>
        <WrapSectorInfo>
          <WrapSectorCircle percent={this.getPercentNotSuitable(CNTT)}>
            <SectorCircle>
              {CNTT}%
            </SectorCircle>
          </WrapSectorCircle>
          <WrapSectorContent>
            <TitleSectorContent>CÔNG NGHỆ THÔNG TIN</TitleSectorContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Eum, incidunt dolore necessitatibus soluta iste hic obcaecati fugit,
             dolor earum impedit iusto unde ab, omnis vero laborum in consequuntur velit nobis.
          </WrapSectorContent>
        </WrapSectorInfo>
        <WrapListMajorInfo>
          <WrapMajorInfo>
            <WrapMajorCircle percent={this.getPercentNotSuitable(UDPM)}>
              <MajorCircle>{UDPM}%</MajorCircle>
            </WrapMajorCircle>
            <WrapMajorContent>
              <TitleMajorContent>ỨNG DỤNG PHẦN MỀM</TitleMajorContent>
              <MajorContent>
                Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Minima beatae maiores
                 in rerum facere dolorum aut perspiciatis
                 quia nihil, deleniti dolore numquam nesciunt quo
                 cumque nulla saepe doloribus, quod reprehenderit!
              </MajorContent>
            </WrapMajorContent>
          </WrapMajorInfo>
          <WrapMajorInfo>
            <WrapMajorCircle percent={this.getPercentNotSuitable(TKW)}>
              <MajorCircle>{TKW}%</MajorCircle>
            </WrapMajorCircle>
            <WrapMajorContent>
              <TitleMajorContent>THIẾT KẾ WEBSITE</TitleMajorContent>
              <MajorContent>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Minima beatae maiores
                in rerum facere dolorum aut perspiciatis
                quia nihil, deleniti dolore numquam nesciunt quo
                cumque nulla saepe doloribus, quod reprehenderit!
              </MajorContent>
            </WrapMajorContent>
          </WrapMajorInfo>
          <WrapMajorInfo>
            <WrapMajorCircle percent={this.getPercentNotSuitable(LTDD)}>
              <MajorCircle>{LTDD}%</MajorCircle>
            </WrapMajorCircle>
            <WrapMajorContent>
              <TitleMajorContent>LẬP TRÌNH DI ĐỘNG</TitleMajorContent>
              <MajorContent>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Minima beatae maiores
                in rerum facere dolorum aut perspiciatis
                quia nihil, deleniti dolore numquam nesciunt quo
                cumque nulla saepe doloribus, quod reprehenderit!
              </MajorContent>
            </WrapMajorContent>
          </WrapMajorInfo>
          <WrapMajorInfo>
            <WrapMajorCircle percent={this.getPercentNotSuitable(TKDH)}>
              <MajorCircle>{TKDH}%</MajorCircle>
            </WrapMajorCircle>
            <WrapMajorContent>
              <TitleMajorContent>THIẾT KẾ ĐỒ HỌA</TitleMajorContent>
              <MajorContent>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Minima beatae maiores
                in rerum facere dolorum aut perspiciatis
                quia nihil, deleniti dolore numquam nesciunt quo
                cumque nulla saepe doloribus, quod reprehenderit!
              </MajorContent>
            </WrapMajorContent>
          </WrapMajorInfo>
        </WrapListMajorInfo>
      </WrapTestResult>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listAnswer: state.testingTab.listAnswer,
  };
};

const mapDispatchToProps = () => {};

export default connect()(TestResult);
