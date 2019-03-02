import React from 'react';
import { Switch, Link } from 'dva/router';
import { Table, Button, Card, Row, Col, Form, Input, Icon, Select } from 'antd';
import styles from './../CallList/CallList.less'
import Ellipsis from './../../components/Ellipsis';
import DropOption from './../../components/DropOption';

const FormItem = Form.Item;
const Option = Select.Option;

@Form.create()
class PeopleManage extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  state = {
    expandForm: false,
    btnDisabled: true,
    columns: [
      {
        title: '用户名称',
        dataIndex: 'uName',
        width: 80,
      }, {
        title: '真实姓名',
        dataIndex: 'uRealName',
        width: 80,
      }, {
        title: '性别',
        dataIndex: 'uSex',
        width: 60,
      }, {
        title: '联系电话',
        dataIndex: 'uTelephone',
        width: 120,
      }, {
        title: '角色',
        dataIndex: 'roleName',
        width: 100,
        render: (text, record) => {
          return (
            <div>
              <Ellipsis tooltip lines={1}>
                {text}
              </Ellipsis>
            </div>
          );
        },
      }, {
        title: '所属单位',
        dataIndex: 'oName',
        render: (text, record) => {
          return (
            <div>
              <Ellipsis tooltip lines={1}>
                {text}
              </Ellipsis>
            </div>
          );
        },
      },{
        title: '所属部门',
        dataIndex: 'oType',
        render: (text, record) => {
          return (
            <div>
              <Ellipsis tooltip lines={1}>
                {text}
              </Ellipsis>
            </div>
          );
        },
      },{
        title: '是否正常',
        dataIndex: 'deleteStatus',
        width: 80,
        render: (text, record) => {
          let checked = text === 1 ? true : false;
          return (
            <div>
              <Switch defaultChecked={checked} />,
            </div>
          );
        },
      }, {
        title: '是否锁定',
        dataIndex: 'uLocked',
        width: 80,
        render: (text, record) => {
          let checked = text === 1 ? true : false;
          return (
            <div>
              <Switch defaultChecked={checked} />,
            </div>
          );
        },
      },{
        title: '创建时间',
        dataIndex: 'userCreateTime',
        width: 150,
        sorter: (a, b) => a.userCreateTime - b.userCreateTime,
      },{
        title: '最后一次登录时间',
        dataIndex: 'uLastOnLine',
        width: 170,
        sorter: (a, b) => a.uLastOnLine - b.uLastOnLine,
      },{
        title: '在线时长（小时）',
        dataIndex: 'onlineTime',
        width: 150,
      },
    ],
  };


  data = [
    {
      key: '1',
      createUserId: "1",
      deleteStatus: 1,
      groName: "维修",
      groupId: "339d0b2a-e0da-46a3-bccc-b73b375ba643",
      id: "d5e6e1c4-24fa-4b58-baa6-b9fa0f965967",
      oId: "32",
      oName: "天津市中环富士智能设备有限公司",
      oType: '',
      onlineTime: 1249,
      roleName: "系统管理员",
      uCredentialsSalt: "0df1d151-b3a7-458e-94da-33fa0f9ee605",
      uLastOnLine: "2018-09-21 16:50:05",
      uLocked: 0,
      uName: "zhanglu",
      uPassword: "20e6ec3d723785eaa919098e36c54fc6",
      uRealName: "张璐",
      uSex: "男",
      uTelephone: "18522021580",
      userCreateTime: "2018-09-21 16:38:58",
      userInfoCreateTime: "2018-09-21 16:38:58",
      zh: 0,
    },{
      key: '2',
      createUserId: "1",
      deleteStatus: 1,
      groName: "维修",
      groupId: "339d0b2a-e0da-46a3-bccc-b73b375ba643",
      id: "d5e6e1c4-24fa-4b58-baa6-b9fa0f965967",
      oId: "32",
      oName: "武汉中科通达高新技术有限公司",
      oType: '',
      onlineTime: 29.8,
      roleName: "组长",
      uCredentialsSalt: "0df1d151-b3a7-458e-94da-33fa0f9ee605",
      uLastOnLine: "2018-10-09 16:50:05",
      uLocked: 1,
      uName: "wangjialin",
      uPassword: "20e6ec3d723785eaa919098e36c54fc6",
      uRealName: "王佳琳",
      uSex: "男",
      uTelephone: "18722425974",
      userCreateTime: "2018-09-21 16:36:25",
      userInfoCreateTime: "2018-09-21 16:36:25",
      zh: 0,
    },{
      key: '3',
      createUserId: "1",
      deleteStatus: 1,
      groName: "主管",
      groupId: "339d0b2a-e0da-46a3-bccc-b73b375ba643",
      id: "d5e6e1c4-24fa-4b58-baa6-b9fa0f965967",
      oId: "32",
      oName: "武汉中科通达高新技术有限公司",
      oType: '',
      onlineTime: 0.7,
      roleName: "维修人员",
      uCredentialsSalt: "0df1d151-b3a7-458e-94da-33fa0f9ee605",
      uLastOnLine: "2018-10-11 11:50:05",
      uLocked: 1,
      uName: "yamgliang",
      uPassword: "20e6ec3d723785eaa919098e36c54fc6",
      uRealName: "杨亮",
      uSex: "男",
      uTelephone: "13920659606",
      userCreateTime: "2018-09-21 16:35:25",
      userInfoCreateTime: "2018-09-21 16:35:25",
      zh: 0,
    },{
      key: '4',
      createUserId: "1",
      deleteStatus: 1,
      groName: "中心",
      groupId: "339d0b2a-e0da-46a3-bccc-b73b375ba643",
      id: "d5e6e1c4-24fa-4b58-baa6-b9fa0f965967",
      oId: "32",
      oName: "天津市中环系统工程有限责任公司",
      oType: '',
      onlineTime: 21.9,
      roleName: "话务员",
      uCredentialsSalt: "0df1d151-b3a7-458e-94da-33fa0f9ee605",
      uLastOnLine: "2018-10-10 10:50:05",
      uLocked: 1,
      uName: "周明",
      uPassword: "20e6ec3d723785eaa919098e36c54fc6",
      uRealName: "周明",
      uSex: "男",
      uTelephone: "13820681576",
      userCreateTime: "2018-08-29 16:35:25",
      userInfoCreateTime: "2018-08-29 16:35:25",
      zh: 0,
    }
  ];

  handleResize = index => (e, { size }) => {
    this.setState(({ columns }) => {
      const nextColumns = [...columns];
      nextColumns[index] = {
        ...nextColumns[index],
        width: size.width,
      };
      return { columns: nextColumns };
    });
  };

  gotoForm = () => {
    this.props.history.push('/CallForm');
  };

  renderSimpleForm() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <Form layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label="用户名称">
              {getFieldDecorator('alarmerName')(
                <Input placeholder="请输入关键字" onChange={this.onChangeDockerName} />
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="真实姓名">
              {getFieldDecorator('PhoneNum')(
                <Input placeholder="请输入关键字" onChange={this.onChangeDatabaseName} />
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <span className={styles.submitButtons}>
              <Button type="primary" onClick={this.onRefresh}>
                查询
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
                重置
              </Button>
              <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
                展开 <Icon type="down" />
              </a>
            </span>
          </Col>
        </Row>
      </Form>
    );
  }

  renderAdvancedForm() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <Form layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label="用户名称">
              {getFieldDecorator('alarmerName')(
                <Input placeholder="请输入关键字" onChange={this.onChangeDockerName} />
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="真实姓名">
              {getFieldDecorator('PhoneNum')(
                <Input placeholder="请输入关键字" onChange={this.onChangeDatabaseName} />
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="性别">
              {getFieldDecorator('PhoneNum')(
                <Select>
                  <Option value="1">男</Option>
                  <Option value="2">女</Option>
                </Select>
              )}
            </FormItem>
          </Col>
        </Row>
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          {/*<Col md={8} sm={24}>*/}
            {/*<FormItem label="单位">*/}
              {/*{getFieldDecorator('PhoneNum')(*/}
                {/*<Input placeholder="请输入关键字" onChange={this.onChangeDatabaseName} />*/}
              {/*)}*/}
            {/*</FormItem>*/}
          {/*</Col>*/}
          {/*<Col md={8} sm={24}>*/}
            {/*<FormItem label="最后一次登陆日期">*/}
              {/*{getFieldDecorator('PhoneNum')(*/}
                {/*<Input placeholder="请输入关键字" onChange={this.onChangeDatabaseName} />*/}
              {/*)}*/}
            {/*</FormItem>*/}
          {/*</Col>*/}
          <Col md={8} sm={24}>
            <span className={styles.submitButtons}>
              <Button type="primary" onClick={this.onRefresh}>
                查询
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
                重置
              </Button>
              <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
                收起 <Icon type="up" />
              </a>
            </span>
          </Col>
        </Row>
      </Form>
    );
  }

  renderForm() {
    const { expandForm } = this.state;
    return expandForm ? this.renderAdvancedForm() : this.renderSimpleForm();
  }

  toggleForm = () => {
    const { expandForm } = this.state;
    this.setState({
      expandForm: !expandForm,
    });
  };

  render() {
    const { btnDisabled } = this.state;

    const columns = this.state.columns.map((col, index) => ({
      ...col,
      onHeaderCell: column => ({
        width: column.width,
      }),
    }));

    const rowSelection = {
      type: 'checkbox',
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        if (selectedRows.length === 1) {
          this.setState({
            btnDisabled: false,
          })
        } else {
          this.setState({
            btnDisabled: true,
          })
        }
      },
    };

    return (
      <div>
        <div style={{margin: '0 0 10px 10px'}}><Link to='/CallList'>返回工单</Link></div>
        <Card style={{height: '100%'}}>
          <div className={styles.tableListForm}>
            {this.renderForm()}
          </div>
          <div style={{margin: '20px 0'}}>
            <Button icon="sync" style={{marginRight: 20}}>刷新</Button>
            <Button icon="sync" style={{marginRight: 20}}>导出数据</Button>
            <Button icon="plus" style={{marginRight: 20}}>添加</Button>
            <Button icon="sync" style={{marginRight: 20}} disabled={btnDisabled}>编辑</Button>
            <Button icon="sync" style={{marginRight: 20}} disabled={btnDisabled}>查看</Button>
            <Button icon="sync" style={{marginRight: 20}} disabled={btnDisabled}>所属单位</Button>
            <Button icon="sync" style={{marginRight: 20}} disabled={btnDisabled}>数据权限</Button>
            <Button icon="sync" style={{marginRight: 20}} disabled={btnDisabled}>其它权限</Button>
            <Button icon="sync" style={{marginRight: 20}} disabled={btnDisabled}>重置密码</Button>
          </div>
          <Table
            bordered
            columns={columns}
            dataSource={this.data}
            size="small"
            rowSelection={rowSelection}
            pagination={{
              total: this.data.length,
              current: 1,
              showSizeChanger: true,
              showQuickJumper: true,
            }}
          />
        </Card>
      </div>
    );
  }
}

export default PeopleManage;
