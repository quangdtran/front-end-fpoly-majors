import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {
  WrapSharedArticleTab,
  Title,
  WrapMenu,
  Menu,
  MenuUl,
  MenuLi,
  MenuTitle,
  WrapSideBar,
  WrapBody,
  WrapMajor,
  MajorTitle,
  MajorContent,
  WrapMajorContent,
  WrapSection,
  SectionTitle,
  SectionContent,
  WrapSectionContent,
} from './styled';

export default class SharedArticleTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elIsSelected: '',
    };
    this.titleSection = [
      'UDPM',
      'UDPM-1',
      'UDPM-2',
      'UDPM-3',
      'TKW',
      'TKW-1',
      'TKW-2',
      'TKW-3',
      'TKDH',
      'TKDH-1',
      'TKDH-2',
      'TKDH-3',
      'LTDD',
      'LTDD-1',
      'LTDD-2',
      'LTDD-3',
    ];
  }

  // METHODS:
  scrollToRef(ref) {
    const body = ReactDOM.findDOMNode(this.refs['wrap-body']);
    const destination = ReactDOM.findDOMNode(this.refs[ref]).offsetTop;
    body.scrollTop = destination - 20;
    this.setState({ elIsSelected: ref });
  }

  handlerScrollToSection(evt) {
    const currentTop = evt.target.scrollTop;
    let currentSection = '';
    this.titleSection.forEach((ref, index) => {
      const destination = ReactDOM.findDOMNode(this.refs[ref]).offsetTop;
      if (currentTop > (destination - 25)) {
        let currentDestination = ReactDOM.findDOMNode(this.refs[currentSection]);
        currentDestination = currentDestination ? currentDestination.offsetTop : 0;
        if (destination > (currentDestination - 25)) currentSection = ref;
      }
    });
    this.setState({ elIsSelected: currentSection });
  }

  render() {
    const { elIsSelected } = this.state;
    return (
      <WrapSharedArticleTab>
        <WrapSideBar>

          <WrapMenu>
            <Menu>
              <MenuTitle
                onClick={() => this.scrollToRef('UDPM')}
                is-selected={elIsSelected === 'UDPM'}
              >
                Ứng Dụng Phần Mềm
              </MenuTitle>
              <MenuUl>
                <MenuLi
                  onClick={() => this.scrollToRef('UDPM-1')}
                  is-selected={elIsSelected === 'UDPM-1'}
                >
                  Môi trường học tập
                </MenuLi>
                <MenuLi
                  onClick={() => this.scrollToRef('UDPM-2')}
                  is-selected={elIsSelected === 'UDPM-2'}
                >
                  Môi trường làm việc
                </MenuLi>
                <MenuLi
                  onClick={() => this.scrollToRef('UDPM-3')}
                  is-selected={elIsSelected === 'UDPM-3'}
                >
                  Tính chất ngành học
                </MenuLi>
              </MenuUl>
              <MenuTitle
                onClick={() => this.scrollToRef('TKW')}
                is-selected={elIsSelected === 'TKW'}
              >
                Thiết Kế Website
              </MenuTitle>
              <MenuUl>
                <MenuLi
                  onClick={() => this.scrollToRef('TKW-1')}
                  is-selected={elIsSelected === 'TKW-1'}
                >
                  Môi trường học tập
                </MenuLi>
                <MenuLi
                  onClick={() => this.scrollToRef('TKW-2')}
                  is-selected={elIsSelected === 'TKW-2'}
                >
                  Môi trường làm việc
                </MenuLi>
                <MenuLi
                  onClick={() => this.scrollToRef('TKW-3')}
                  is-selected={elIsSelected === 'TKW-3'}
                >
                  Tính chất ngành học
                </MenuLi>
              </MenuUl>
              <MenuTitle
                onClick={() => this.scrollToRef('TKDH')}
                is-selected={elIsSelected === 'TKDH'}
              >
                Thiết Kế Đồ Họa
              </MenuTitle>
              <MenuUl>
                <MenuLi
                  onClick={() => this.scrollToRef('TKDH-1')}
                  is-selected={elIsSelected === 'TKDH-1'}
                >
                  Môi trường học tập
                </MenuLi>
                <MenuLi
                  onClick={() => this.scrollToRef('TKDH-2')}
                  is-selected={elIsSelected === 'TKDH-2'}
                >
                  Môi trường làm việc
                </MenuLi>
                <MenuLi
                  onClick={() => this.scrollToRef('TKDH-3')}
                  is-selected={elIsSelected === 'TKDH-3'}
                >
                  Tính chất ngành học
                </MenuLi>
              </MenuUl>
              <MenuTitle
                onClick={() => this.scrollToRef('LTDD')}
                is-selected={elIsSelected === 'LTDD'}
              >
                Lập Trình Mobile
              </MenuTitle>
              <MenuUl>
                <MenuLi
                  onClick={() => this.scrollToRef('LTDD-1')}
                  is-selected={elIsSelected === 'LTDD-1'}
                >
                  Môi trường học tập
                </MenuLi>
                <MenuLi
                  onClick={() => this.scrollToRef('LTDD-2')}
                  is-selected={elIsSelected === 'LTDD-2'}
                >
                  Môi trường làm việc
                </MenuLi>
                <MenuLi
                  onClick={() => this.scrollToRef('LTDD-3')}
                  is-selected={elIsSelected === 'LTDD-3'}
                >
                  Tính chất ngành học
                </MenuLi>
              </MenuUl>
            </Menu>
          </WrapMenu>
        </WrapSideBar>
        <WrapBody
          ref="wrap-body"
          onScroll={evt => this.handlerScrollToSection(evt)}
        >
          <Title>CHIA SẺ VỀ NGÀNH HỌC</Title>
          {/* Bài 1 */}
          <WrapMajor>
            <WrapSection>
              <MajorTitle ref="UDPM">ỨNG DỤNG PHẦN MỀM</MajorTitle>
              <WrapMajorContent>
                <MajorContent>
                  Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Doloremque quos nostrum voluptates ipsum
                    quisquam ea debitis numquam explicabo, facilis
                    voluptatem! Ea voluptatum sapiente ratione aliquid!
                    Provident unde deserunt repellat excepturi?
                  Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Doloremque quos nostrum voluptates ipsum
                    quisquam ea debitis numquam explicabo, facilis
                    voluptatem! Ea voluptatum sapiente ratione aliquid!
                    Provident unde deserunt repellat excepturi?
                </MajorContent>
              </WrapMajorContent>
            </WrapSection>
            <WrapSection>
              <SectionTitle ref="UDPM-1">1. Môi trường học tập</SectionTitle>
              <WrapSectionContent>
                <SectionContent>
                  Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Doloremque quos nostrum voluptates ipsum
                    quisquam ea debitis numquam explicabo, facilis
                    voluptatem! Ea voluptatum sapiente ratione aliquid!
                    Provident unde deserunt repellat excepturi?
                  Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Doloremque quos nostrum voluptates ipsum
                    quisquam ea debitis numquam explicabo, facilis
                    voluptatem! Ea voluptatum sapiente ratione aliquid!
                    Provident unde deserunt repellat excepturi?
                </SectionContent>
              </WrapSectionContent>
            </WrapSection>
            <WrapSection>
              <SectionTitle ref="UDPM-2">2. Môi trường làm việc</SectionTitle>
              <WrapSectionContent>
                <SectionContent>
                  Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Doloremque quos nostrum voluptates ipsum
                    quisquam ea debitis numquam explicabo, facilis
                    voluptatem! Ea voluptatum sapiente ratione aliquid!
                    Provident unde deserunt repellat excepturi?
                  Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Doloremque quos nostrum voluptates ipsum
                    quisquam ea debitis numquam explicabo, facilis
                    voluptatem! Ea voluptatum sapiente ratione aliquid!
                    Provident unde deserunt repellat excepturi?
                </SectionContent>
              </WrapSectionContent>
            </WrapSection>
            <WrapSection>
              <SectionTitle ref="UDPM-3">3. Tính chất ngành học</SectionTitle>
              <WrapSectionContent>
                <SectionContent>
                  Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Doloremque quos nostrum voluptates ipsum
                    quisquam ea debitis numquam explicabo, facilis
                    voluptatem! Ea voluptatum sapiente ratione aliquid!
                    Provident unde deserunt repellat excepturi?
                  Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Doloremque quos nostrum voluptates ipsum
                    quisquam ea debitis numquam explicabo, facilis
                    voluptatem! Ea voluptatum sapiente ratione aliquid!
                    Provident unde deserunt repellat excepturi?
                </SectionContent>
              </WrapSectionContent>
            </WrapSection>
          </WrapMajor>

          {/* Bài 2 */}
          <WrapMajor>
            <WrapSection>
              <MajorTitle ref="TKW">THIẾT KẾ WEBSITE</MajorTitle>
              <WrapMajorContent>
                <MajorContent>
                  Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Doloremque quos nostrum voluptates ipsum
                    quisquam ea debitis numquam explicabo, facilis
                    voluptatem! Ea voluptatum sapiente ratione aliquid!
                    Provident unde deserunt repellat excepturi?
                  Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Doloremque quos nostrum voluptates ipsum
                    quisquam ea debitis numquam explicabo, facilis
                    voluptatem! Ea voluptatum sapiente ratione aliquid!
                    Provident unde deserunt repellat excepturi?
                </MajorContent>
              </WrapMajorContent>
            </WrapSection>
            <WrapSection>
              <SectionTitle ref="TKW-1">1. Môi trường học tập</SectionTitle>
              <WrapSectionContent>
                <SectionContent>
                  Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Doloremque quos nostrum voluptates ipsum
                    quisquam ea debitis numquam explicabo, facilis
                    voluptatem! Ea voluptatum sapiente ratione aliquid!
                    Provident unde deserunt repellat excepturi?
                  Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Doloremque quos nostrum voluptates ipsum
                    quisquam ea debitis numquam explicabo, facilis
                    voluptatem! Ea voluptatum sapiente ratione aliquid!
                    Provident unde deserunt repellat excepturi?
                </SectionContent>
              </WrapSectionContent>
            </WrapSection>
            <WrapSection>
              <SectionTitle ref="TKW-2">2. Môi trường làm việc</SectionTitle>
              <WrapSectionContent>
                <SectionContent>
                  Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Doloremque quos nostrum voluptates ipsum
                    quisquam ea debitis numquam explicabo, facilis
                    voluptatem! Ea voluptatum sapiente ratione aliquid!
                    Provident unde deserunt repellat excepturi?
                  Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Doloremque quos nostrum voluptates ipsum
                    quisquam ea debitis numquam explicabo, facilis
                    voluptatem! Ea voluptatum sapiente ratione aliquid!
                    Provident unde deserunt repellat excepturi?
                </SectionContent>
              </WrapSectionContent>
            </WrapSection>
            <WrapSection>
              <SectionTitle ref="TKW-3">3. Tính chất ngành học</SectionTitle>
              <WrapSectionContent>
                <SectionContent>
                  Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Doloremque quos nostrum voluptates ipsum
                    quisquam ea debitis numquam explicabo, facilis
                    voluptatem! Ea voluptatum sapiente ratione aliquid!
                    Provident unde deserunt repellat excepturi?
                  Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Doloremque quos nostrum voluptates ipsum
                    quisquam ea debitis numquam explicabo, facilis
                    voluptatem! Ea voluptatum sapiente ratione aliquid!
                    Provident unde deserunt repellat excepturi?
                </SectionContent>
              </WrapSectionContent>
            </WrapSection>
          </WrapMajor>

          {/* Bài. 3 */}
          <WrapMajor>
            <WrapSection>
              <MajorTitle ref="TKDH">THIẾT KẾ ĐỒ HỌA</MajorTitle>
              <WrapMajorContent>
                <MajorContent>
                  Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Doloremque quos nostrum voluptates ipsum
                    quisquam ea debitis numquam explicabo, facilis
                    voluptatem! Ea voluptatum sapiente ratione aliquid!
                    Provident unde deserunt repellat excepturi?
                  Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Doloremque quos nostrum voluptates ipsum
                    quisquam ea debitis numquam explicabo, facilis
                    voluptatem! Ea voluptatum sapiente ratione aliquid!
                    Provident unde deserunt repellat excepturi?
                </MajorContent>
              </WrapMajorContent>
            </WrapSection>
            <WrapSection>
              <SectionTitle ref="TKDH-1">1. Môi trường học tập</SectionTitle>
              <WrapSectionContent>
                <SectionContent>
                  Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Doloremque quos nostrum voluptates ipsum
                    quisquam ea debitis numquam explicabo, facilis
                    voluptatem! Ea voluptatum sapiente ratione aliquid!
                    Provident unde deserunt repellat excepturi?
                  Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Doloremque quos nostrum voluptates ipsum
                    quisquam ea debitis numquam explicabo, facilis
                    voluptatem! Ea voluptatum sapiente ratione aliquid!
                    Provident unde deserunt repellat excepturi?
                </SectionContent>
              </WrapSectionContent>
            </WrapSection>
            <WrapSection>
              <SectionTitle ref="TKDH-2">2. Môi trường làm việc</SectionTitle>
              <WrapSectionContent>
                <SectionContent>
                  Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Doloremque quos nostrum voluptates ipsum
                    quisquam ea debitis numquam explicabo, facilis
                    voluptatem! Ea voluptatum sapiente ratione aliquid!
                    Provident unde deserunt repellat excepturi?
                  Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Doloremque quos nostrum voluptates ipsum
                    quisquam ea debitis numquam explicabo, facilis
                    voluptatem! Ea voluptatum sapiente ratione aliquid!
                    Provident unde deserunt repellat excepturi?
                </SectionContent>
              </WrapSectionContent>
            </WrapSection>
            <WrapSection>
              <SectionTitle ref="TKDH-3">3. Tính chất ngành học</SectionTitle>
              <WrapSectionContent>
                <SectionContent>
                  Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Doloremque quos nostrum voluptates ipsum
                    quisquam ea debitis numquam explicabo, facilis
                    voluptatem! Ea voluptatum sapiente ratione aliquid!
                    Provident unde deserunt repellat excepturi?
                  Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Doloremque quos nostrum voluptates ipsum
                    quisquam ea debitis numquam explicabo, facilis
                    voluptatem! Ea voluptatum sapiente ratione aliquid!
                    Provident unde deserunt repellat excepturi?
                </SectionContent>
              </WrapSectionContent>
            </WrapSection>
          </WrapMajor>

          {/* Bài. 4 */}
          <WrapMajor>
            <WrapSection>
              <MajorTitle ref="LTDD">LẬP TRÌNH MOBILE</MajorTitle>
              <WrapMajorContent>
                <MajorContent>
                  Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Doloremque quos nostrum voluptates ipsum
                    quisquam ea debitis numquam explicabo, facilis
                    voluptatem! Ea voluptatum sapiente ratione aliquid!
                    Provident unde deserunt repellat excepturi?
                  Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Doloremque quos nostrum voluptates ipsum
                    quisquam ea debitis numquam explicabo, facilis
                    voluptatem! Ea voluptatum sapiente ratione aliquid!
                    Provident unde deserunt repellat excepturi?
                </MajorContent>
              </WrapMajorContent>
            </WrapSection>
            <WrapSection>
              <SectionTitle ref="LTDD-1">1. Môi trường học tập</SectionTitle>
              <WrapSectionContent>
                <SectionContent>
                  Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Doloremque quos nostrum voluptates ipsum
                    quisquam ea debitis numquam explicabo, facilis
                    voluptatem! Ea voluptatum sapiente ratione aliquid!
                    Provident unde deserunt repellat excepturi?
                  Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Doloremque quos nostrum voluptates ipsum
                    quisquam ea debitis numquam explicabo, facilis
                    voluptatem! Ea voluptatum sapiente ratione aliquid!
                    Provident unde deserunt repellat excepturi?
                </SectionContent>
              </WrapSectionContent>
            </WrapSection>
            <WrapSection>
              <SectionTitle ref="LTDD-2">2. Môi trường làm việc</SectionTitle>
              <WrapSectionContent>
                <SectionContent>
                  Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Doloremque quos nostrum voluptates ipsum
                    quisquam ea debitis numquam explicabo, facilis
                    voluptatem! Ea voluptatum sapiente ratione aliquid!
                    Provident unde deserunt repellat excepturi?
                  Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Doloremque quos nostrum voluptates ipsum
                    quisquam ea debitis numquam explicabo, facilis
                    voluptatem! Ea voluptatum sapiente ratione aliquid!
                    Provident unde deserunt repellat excepturi?
                </SectionContent>
              </WrapSectionContent>
            </WrapSection>
            <WrapSection>
              <SectionTitle ref="LTDD-3">3. Tính chất ngành học</SectionTitle>
              <WrapSectionContent>
                <SectionContent>
                  Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Doloremque quos nostrum voluptates ipsum
                    quisquam ea debitis numquam explicabo, facilis
                    voluptatem! Ea voluptatum sapiente ratione aliquid!
                    Provident unde deserunt repellat excepturi?
                  Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Doloremque quos nostrum voluptates ipsum
                    quisquam ea debitis numquam explicabo, facilis
                    voluptatem! Ea voluptatum sapiente ratione aliquid!
                    Provident unde deserunt repellat excepturi?
                </SectionContent>
              </WrapSectionContent>
            </WrapSection>
          </WrapMajor>
        </WrapBody>
      </WrapSharedArticleTab>
    );
  }
}
