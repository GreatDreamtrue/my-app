import React from 'react';
// import { connect } from 'dva';
// import styles from './IndexPage.css';

import CallList from './CallList/CallList';
import CallForm from './CallForm/CallForm';

import PeopleManage from './ManagePages/PeopleManage';
import CompanyManage from './ManagePages/CompanyManage';
import RoleManage from './ManagePages/RoleManage';

import { Route, Switch, Redirect, Link } from 'dva/router';
import { Layout, Menu, Icon, Card, Dropdown, Button } from 'antd';
const { Content } = Layout;
// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

class IndexPage extends React.Component {

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <Link to='/PeopleManage'>人员管理</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/CompanyManage'>单位管理</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/RoleManage'>角色管理</Link>
        </Menu.Item>
      </Menu>
    );
    return (
      <Layout style={{height: '100%'}}>
        <div style={{padding: '0 30px', lineHeight: '46px', height: 46, color: 'rgba(255, 255, 255, 0.65)', background: '#001529', fontSize: 16}}>
          <span>客服系统</span>
          <div style={{display: 'inline-block',float: 'right'}}>
            <Dropdown overlay={menu} placement="bottomRight">
              <Icon style={{cursor: 'pointer'}} type="setting" theme="outlined" />
            </Dropdown>
          </div>
        </div>
        <Content style={{padding: 50, overflow: 'auto'}}>
          <Switch>
            <Route path="/CallList" component={CallList} />
            <Route path="/CallForm" exact component={CallForm} />
            <Route path="/PeopleManage" component={PeopleManage} />
            <Route path="/CompanyManage" component={CompanyManage} />
            <Route path="/RoleManage" component={RoleManage} />
            <Redirect from="/" to="/CallList"></Redirect>
          </Switch>
        </Content>
      </Layout>
    );
  }
}

export default IndexPage;
