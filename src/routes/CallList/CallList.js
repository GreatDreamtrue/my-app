import React from 'react';
import { Table, Button, Card, Row, Col, Form, Input, Icon, message, Modal, Select } from 'antd';
import { Resizable } from 'react-resizable';
import styles from './CallList.less'
import Ellipsis from './../../components/Ellipsis';
import DropOption from './../../components/DropOption';

const FormItem = Form.Item;
const Option = Select.Option;


@Form.create()
class CallList extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  state = {
    expandForm: false,
    visible: false,
    selectCase: null,
    columns: [
      {
      title: '业务单号',
      dataIndex: 'caseNo',
      width: 100,
      }, {
        title: '业务类型',
        dataIndex: 'dIdCaseType',
        width: 80,
      }, {
        title: '业务分类',
        dataIndex: 'dIdCaseSort',
        width: 80,
      }, {
        title: '来电号码',
        dataIndex: 'callTel',
        width: 80,
      }, {
        title: '来电详情',
        dataIndex: 'caseDetail',
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
        title: '故障位置',
        dataIndex: 'casePosition',
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
        title: '工单状态',
        dataIndex: 'caseStatus',
        width: 80,
        render: (text, record) => {
          return (
            <div>
              {text}
            </div>
          );
        },
      },{
        title: '操作',
        dataIndex: '',
        key: '',
        width: '50px',
        render: (text, record) => {
          const disabled = record.caseStatus === '已关闭' ? true : false;
          const result = [{ key: 1, name: '查看' }, { key: 2, name: '关闭' }];
          return (
            <div>
            <span style={{ marginRight: 20 }}>
              <DropOption
                menuOptions={[
                  { key: 1, name: '查看'},
                  { key: 2, name: '关闭', disabled: disabled },
                ]}
                onMenuClick={e => this.handleMenuClick(record, e)} />
            </span>
            </div>
          );
        },
      },
    ],
  };


  data = [{
    key: 0,
    caseNo: '13120181012164733001',
    dIdCaseType: '咨询',
    dIdCaseSort: 'CA',
    callTel: '188123671235',
    caseDetail: '火警',
    casePosition: '红桥支队空调及UPS设备和电脑及配件',
    caseStatus:'已回复',
  }, {
    key: 1,
    caseNo: '13120181012164733002',
    dIdCaseType: '咨询',
    dIdCaseSort: '运维',
    callTel: '188123671235',
    caseDetail: '火警',
    casePosition: '南开支队空调及UPS设备和电脑及配件',
    caseStatus:'已派发',
  }, {
    key: 2,
    caseNo: '13120181012164733002',
    dIdCaseType: '咨询',
    dIdCaseSort: '运维',
    callTel: '188123671235',
    caseDetail: '火警',
    casePosition: '南开支队空调及UPS设备和电脑及配件',
    caseStatus:'已关闭',
  }];

  handleMenuClick = (record, e) => {
    if (e.key === '1') {
      // 查看
      this.setState({
        visible: true,
        selectCase: record,
      });
    } else if (e.key === '2') {
      // 关闭
      message.success('工单已关闭');
    }
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
            <FormItem label="业务单号">
              {getFieldDecorator('alarmerName')(
                <Input placeholder="请输入业务单号" onChange={this.onChangeDockerName} />
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="业务类型">
              {getFieldDecorator('dIdCaseType')(
                <Select>
                  <Option value="1">咨询</Option>
                  <Option value="2">投诉</Option>
                  <Option value="3">故障报修</Option>
                </Select>
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
            <FormItem label="业务单号">
              {getFieldDecorator('alarmerName')(
                <Input placeholder="请输入业务单号" onChange={this.onChangeDockerName} />
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="业务类型">
              {getFieldDecorator('didCaseType')(
                <Select>
                  <Option value="1">咨询</Option>
                  <Option value="2">投诉</Option>
                  <Option value="3">故障报修</Option>
                </Select>
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

  handleOk = () => {
    this.setState({
      visible: false,
      selectCase: null
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
      selectCase: null
    });
  };

  closeCase = () => {
    message.success('工单已关闭');
  };

  render() {
    const {selectCase} = this.state;
    const columns = this.state.columns.map((col, index) => ({
      ...col,
      onHeaderCell: column => ({
        width: column.width,
      }),
    }));

    return (
      <div>
        <Card style={{height: '100%'}}>
          <Modal
            title="工单查看"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <Button key="back" onClick={this.handleCancel}>确定</Button>,
            ]}
          >
            <p><span style={{fontWeight: 'bold'}}>业务单号：</span><span style={{marginLeft: 15}}>{selectCase ? selectCase.caseNo : ''}</span></p>
            <p><span style={{fontWeight: 'bold'}}>业务分类：</span><span style={{marginLeft: 15}}>{selectCase ? selectCase.dIdCaseSort : ''}</span></p>
            <p><span style={{fontWeight: 'bold'}}>来电详情：</span><span style={{marginLeft: 15}}>{selectCase ? selectCase.caseDetail: ''}</span></p>
            <p><span style={{fontWeight: 'bold'}}>回复：</span><span style={{marginLeft: 15}}>运维人员已合闸处理，故障已修复</span></p>
            <p><span style={{fontWeight: 'bold'}}>状态：</span><span style={{marginLeft: 15,marginRight: 30}}>{selectCase ? selectCase.caseStatus: ''}</span><a style={{display: selectCase && selectCase.caseStatus === '已关闭' ? 'none' : 'inline-block'}} onClick={this.closeCase}>关闭工单</a></p>
          </Modal>
          <div className={styles.tableListForm}>
            {this.renderForm()}
          </div>
          <div style={{margin: '20px 0'}}>
            <Button icon="sync" style={{marginRight: 20}}>刷新</Button>
            <Button icon="plus" onClick={this.gotoForm}>添加</Button>
          </div>
          <Table
            bordered
            columns={columns}
            dataSource={this.data}
            size="small"
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

export default CallList;
