import React from 'react';
import { Router } from 'dva/router';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

import IndexPage from './routes/IndexPage';

function RouterConfig({ history }) {
  return (
    <LocaleProvider locale={zhCN}>
      <Router history={history}>
        <IndexPage></IndexPage>
      </Router>
      {/*<Router history={history}>*/}
        {/*<Switch>*/}
          {/*<Route path="/Index" component={IndexPage} />*/}
          {/*<Redirect from="/" to="/Index"></Redirect>*/}
        {/*</Switch>*/}
      {/*</Router>*/}
    </LocaleProvider>
  );
}

export default RouterConfig;
