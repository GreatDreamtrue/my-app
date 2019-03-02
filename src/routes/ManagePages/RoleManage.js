import React from 'react';
import { Route, Switch, Redirect, Link } from 'dva/router';
import { Table, Button, Card, Row, Col, Form, Input, Icon, message } from 'antd';
import styles from './../CallList/CallList.less'
import Ellipsis from './../../components/Ellipsis';
import DropOption from './../../components/DropOption';

const FormItem = Form.Item;

@Form.create()
class RoleManage extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  state = {
    expandForm: false,
    btnDisabled: true,
    columns: [
      {
        title: '角色名称',
        dataIndex: 'rName',
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
        title: '角色描述',
        dataIndex: 'rDescription',
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
      },{
        title: '创建时间',
        dataIndex: 'createTime',
        width: 100,
        sorter: (a, b) => a.createTime - b.createTime,
      },
    ],
  };


  data = [
    {
      key: 1,
      createTime: "2018-09-07 17:44:47",
      createUserId: "28",
      deleteStatus: 1,
      id: "f0740013-4782-4e09-9ea9-e0a5b7fc4716",
      leaf: false,
      rDescription: "超级管理员",
      rName: "主管",
      zh: 0,
    },
    {
      key: 2,
      createTime: "2018-09-07 18:44:47",
      createUserId: "28",
      deleteStatus: 1,
      id: "f0740013-4782-4e09-9ea9-e0a5b7fc4716",
      leaf: false,
      rDescription: "班长",
      rName: "班长",
      zh: 0,
    },
    {
      key: 3,
      createTime: "2018-09-07 17:59:47",
      createUserId: "28",
      deleteStatus: 1,
      id: "f0740013-4782-4e09-9ea9-e0a5b7fc4716",
      leaf: false,
      rDescription: "副班长",
      rName: "副班长",
      zh: 0,
    },
    {
      key: 4,
      createTime: "2018-09-07 17:34:40",
      createUserId: "28",
      deleteStatus: 1,
      id: "f0740013-4782-4e09-9ea9-e0a5b7fc4716",
      leaf: false,
      rDescription: "组长",
      rName: "组长",
      zh: 0,
    },
    {
      key: 5,
      createTime: "2018-09-07 17:41:33",
      createUserId: "28",
      deleteStatus: 1,
      id: "f0740013-4782-4e09-9ea9-e0a5b7fc4716",
      leaf: false,
      rDescription: "客服",
      rName: "客服人员",
      zh: 0,
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
      columnWidth: 50,
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
            <Button icon="sync" style={{marginRight: 20}} disabled={btnDisabled}>分配人员</Button>
            <Button icon="sync" style={{marginRight: 20}} disabled={btnDisabled}>删除</Button>
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

export default RoleManage;
