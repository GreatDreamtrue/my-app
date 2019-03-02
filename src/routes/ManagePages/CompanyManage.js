import React from 'react';
import { Route, Switch, Redirect, Link } from 'dva/router';

import { Table, Button, Card, Row, Col, Form, Input, Icon, message } from 'antd';
import Ellipsis from './../../components/Ellipsis';

const FormItem = Form.Item;

@Form.create()
class CompanyManage extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  state = {
    expandForm: false,
    btnDisabled: true,
    columns: [
      {
        title: '单位名称',
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
      }, {
        title: '单位类型',
        dataIndex: 'oType',
        width: 100,
        render: (text, record) => {
          return (
            <div>
              单位
            </div>
          );
        },
      }, {
        title: '单位分类',
        dataIndex: 'orgClassName',
        width: 120,
      }, {
        title: '单位简称',
        dataIndex: 'oShortName',
        width: 120,
      }, {
        title: '地址',
        dataIndex: 'oAddress',
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
        title: '联系人',
        dataIndex: 'oContact',
        width: 80,
      },{
        title: '电话',
        dataIndex: 'oTel',
        width: 120,
      },{
        title: '单位排序',
        dataIndex: 'oIndex',
        width: 100,
        sorter: (a, b) => a.oIndex - b.oIndex,
      }, {
        title: '是否可用',
        dataIndex: 'leaf',
        width: 80,
        render: (text, record) => {
          return (
            <div style={{fontWeight: 'bold'}}>
              √
            </div>
          );
        },
      },{
        title: '创建时间',
        dataIndex: 'createTime',
        width:150,
        sorter: (a, b) => a.createTime - b.createTime,
      },
    ],
  };


  data = [
    {
      key: '1',
      createTime: "2018-07-27 20:17:56",
      createUserId: "1",
      dIdOrgClass: "09f4ef01-f598-4e67-99cf-9e0b77ebad7d",
      deleteStatus: 1,
      id: "1",
      leaf: true,
      level: 0,
      oAddress: "天津市河西区环湖中道9号",
      oContact: "丁总",
      oIndex: 1,
      oName: "天津市中环系统工程有限责任公司",
      oShortName: "中环系统",
      oTel: "1",
      oType: 0,
      orgClassName: "运维单位",
    },{
      key: '2',
      createTime: "2018-07-26 20:17:56",
      createUserId: "1",
      dIdOrgClass: "09f4ef01-f598-4e67-99cf-9e0b77ebad7d",
      deleteStatus: 1,
      id: "1",
      leaf: true,
      level: 0,
      oAddress: "天津市交管局",
      oContact: "交管",
      oIndex: 2,
      oName: "天津交管局",
      oShortName: "交管局",
      oTel: "1212",
      oType: 0,
      orgClassName: "甲方单位",
    },{
      key: '3',
      createTime: "2018-07-30 20:17:56",
      createUserId: "1",
      dIdOrgClass: "09f4ef01-f598-4e67-99cf-9e0b77ebad7d",
      deleteStatus: 1,
      id: "1",
      leaf: true,
      level: 0,
      oAddress: "项目管理",
      oContact: "宋超",
      oIndex: 4,
      oName: "项目管理",
      oShortName: "项目管理",
      oTel: "18622515624",
      oType: 0,
      orgClassName: "项目管理单位",
    },{
      key: '4',
      createTime: "2018-07-28 20:17:56",
      createUserId: "1",
      dIdOrgClass: "09f4ef01-f598-4e67-99cf-9e0b77ebad7d",
      deleteStatus: 1,
      id: "1",
      leaf: true,
      level: 0,
      oAddress: "监理公司",
      oContact: "杨烁",
      oIndex: 5,
      oName: "监理公司",
      oShortName: "监理公司",
      oTel: "153478622567",
      oType: 0,
      orgClassName: "监理公司",
    },{
      key: '5',
      createTime: "2018-08-28 20:17:56",
      createUserId: "1",
      dIdOrgClass: "09f4ef01-f598-4e67-99cf-9e0b77ebad7d",
      deleteStatus: 1,
      id: "1",
      leaf: true,
      level: 0,
      oAddress: "中智机电",
      oContact: "刘星驰",
      oIndex: 6,
      oName: "天津市中智机电工程有限公司",
      oShortName: "中智机电",
      oTel: "13820779086",
      oType: 0,
      orgClassName: "维修单位",
    }
  ];

  handleResize = index => (e, { size }) => {
    // console.log(index)
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

  render() {
    const {btnDisabled} = this.state;
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
        // this.props.setRelateCase(selectedRows[0].caseNo)
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
          <div style={{margin: '20px 0'}}>
            <Button icon="sync" style={{marginRight: 20}}>刷新</Button>
            <Button icon="plus" style={{marginRight: 20}}>添加</Button>
            <Button icon="sync" style={{marginRight: 20}} disabled={btnDisabled}>编辑</Button>
            <Button icon="sync" style={{marginRight: 20}} disabled={btnDisabled}>查看</Button>
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

export default CompanyManage;
