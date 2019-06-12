import React, { Component } from 'react';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';

import { createBrowserHistory } from 'history';

import Header from '@components/Header';
import TestResult from '@components/TestResult';
import TestingTab from '@src/containers/TestingTab';
import CourseTab from '@containers/CourseTab';
import SchoolViewTab from '@containers/SchoolViewTab';
import SharedArticleTab from '@containers/SharedArticleTab';

import {
  WrapApp,
  WrapBodyApp,
  WrapHeaderApp,
} from './styled';

const history = createBrowserHistory();

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <WrapApp>
        <Router history={history}>
          <WrapHeaderApp>
            <Header />
          </WrapHeaderApp>
          <WrapBodyApp>
            <Switch style={{ height: '100%' }}>
              <Route path="/" exact component={TestResult} />
              <Route path="/test" component={TestingTab} />
              <Route path="/share" component={SharedArticleTab} />
              <Route path="/learn" component={CourseTab} />
              <Route path="/view" component={SchoolViewTab} />
              <Route path="/test-result" component={TestResult} />
            </Switch>
          </WrapBodyApp>
        </Router>
      </WrapApp>
    );
  }
}
