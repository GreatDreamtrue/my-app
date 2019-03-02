import React from 'react';
import { Input, Button, Table, Modal } from 'antd';
import styles from './CallForm.less';

class CaseList extends React.Component {
  // constructor(props) {
  //   super(props);
  // };

  render() {
    const columns = [{
      title: '业务单号',
      dataIndex: 'caseNo',
    }, {
      title: '重复次数',
      dataIndex: 'repeatNum',
    }, {
      title: '来电号码',
      dataIndex: 'callTel',
    },{
      title: '故障位置',
      dataIndex: 'casePosition',
    }];
    const data = [{
      key: '1',
      caseNo: '13120181012164733001',
      repeatNum: 4,
      callTel: '13112341234',
      casePosition: '天津市北辰区',
    }, {
      key: '2',
      caseNo: '13120181012164733002',
      repeatNum: 2,
      callTel: '15612341234',
      casePosition: '天津市北辰区',
    }, {
      key: '3',
      caseNo: '13120181012164733003',
      repeatNum: 10,
      callTel: '15612342345',
      casePosition: '天津市北辰区',
    }, {
      key: '4',
      caseNo: '13120181012164733004',
      repeatNum: 5,
      callTel: '18823451267',
      casePosition: '天津市北辰区',
    }];

// rowSelection object indicates the need for row selection
    const rowSelection = {
      type: 'radio',
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        this.props.setRelateCase(selectedRows[0].caseNo)
      },
    };

    return (
      <div>
        <Table
          bordered
          showHeader
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          size="small"
          pagination={{
            total: data.length,
            current: 1,
            showSizeChanger: true,
            showQuickJumper: true,
          }}
        />
      </div>
    )
  }
}

export default CaseList;
