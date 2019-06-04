import React from 'react';
import {
  Grid,
} from '@material-ui/core';
import {
  Link,
} from 'react-router-dom';

import theme from '@src/root/theme';

import {
  WrapHeader,
  HeaderLink,
  WrapHeaderLogo,
  WrapHeaderMenu,
  HeaderLogo,
} from './styled';

const Header = () => {
  return (
    <WrapHeader>

      <WrapHeaderLogo>
        <Link to="/">
          <HeaderLogo src="http://localhost:8080/images/logo.png" alt="" />
        </Link>
      </WrapHeaderLogo>

      <WrapHeaderMenu container>
        <Grid item xs={3}>
          <HeaderLink
            to="/test"
            activeStyle={{ color: theme.color.orange }}
          >
            BÀI KIỂM TRA
          </HeaderLink>
        </Grid>
        <Grid item xs={3}>
          <HeaderLink
            to="/share"
            activeStyle={{ color: theme.color.orange }}
          >
            CHIA SẺ
          </HeaderLink>
        </Grid>
        <Grid item xs={3}>
          <HeaderLink
            to="/learn"
            activeStyle={{ color: theme.color.orange }}
          >
            HỌC THỬ
          </HeaderLink>
        </Grid>
        <Grid item xs={3}>
          <HeaderLink
            to="/view"
            activeStyle={{ color: theme.color.orange }}
          >
            THAM QUAN TRƯỜNG
          </HeaderLink>
        </Grid>
      </WrapHeaderMenu>

    </WrapHeader>
  );
};

export default Header;
