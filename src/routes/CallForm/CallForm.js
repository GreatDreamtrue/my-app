import React from 'react';
// import { connect } from 'dva';
import { Form, Card, Select, Input, Button, Checkbox, Radio, Icon } from 'antd';

import SearchPage from './SearchPage';
import MapPage from './mapPage';
import CaseList from './caseListPage';

import styles from './CallForm.less'
const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;
const RadioGroup = Radio.Group;

@Form.create()
class CallForm extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   };
  // };

  state = {
    rightShow: false,
    selectRightPage: '1',
    callSexValue: 1,
    caseLevelValue: 1,
    casePosition: '',
    alarmRepeat: false,
    caseNo: null,
  };

  componentWillMount() {
    let num = null;
    if (localStorage.caseNo) {
      num = Number(localStorage.caseNo) + 1;
      localStorage.setItem('caseNo', num);
    } else {
      num = 0;
      localStorage.setItem('caseNo', num);
    }
    let dateTime = new Date();
    let caseNo = '131';
    caseNo += (this.numFormat(dateTime.getFullYear(), 4) + this.numFormat(dateTime.getMonth(), 2)+ this.numFormat(dateTime.getDay(),2) + this.numFormat(dateTime.getHours(), 2) + this.numFormat(dateTime.getMinutes(), 2)+ this.numFormat(dateTime.getSeconds(), 2));
    caseNo += this.numFormat(num, 4);
    this.setState({caseNo: caseNo})
  }

  numFormat = (num, length) => {
    return (Array(length).join('0') + num).slice(-length);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      console.log(values);
    });
  };

  gotoList = () => {
    this.props.history.push('/CallList');
  };

  onChangeRepeat = () => {
    this.setState({
      alarmRepeat: !this.state.alarmRepeat,
    });
    if (!this.state.alarmRepeat) {
      this.setState({
        selectRightPage: '3',
      });
      if (!this.state.rightShow){
        this.setState({
          rightShow: true,
        })
      }
    }
  };

  onChangeCaseLevel = () => {

  };

  onChangeSex = () =>{

  };

  getMapPosition = () => {
    if (!this.state.rightShow) {
      this.setState({
        rightShow: true
      })
    }
    this.setState({
      selectRightPage: '2'
    })
  };

  showRight = () => {
    this.setState({
      rightShow: true
    })
  };

  hideRight = () => {
    this.setState({
      rightShow: false,
      selectRightPage: '1'
    })
  };

  postWork = () => {

  };

  searchPosition = () => {
    let position = this.props.form.getFieldValue('casePosition');
    this.setState({
      casePosition: position,
    })
  };
  setPositionGeographic = (gis) => {
    this.props.form.setFieldsValue({'gisX': gis.gisX});
    this.props.form.setFieldsValue({'gisY': gis.gisY});
  };

  setRelateCase = (relateNo) => {
    this.props.form.setFieldsValue({'caseRelateNo': relateNo});
  };

  gotoSearchPage = () => {
    this.setState({
      selectRightPage: '1'
    })
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { rightShow, selectRightPage, casePosition, alarmRepeat, caseNo } = this.state;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };
    let rightPage;
    if (selectRightPage === '1') {
      rightPage = (<SearchPage></SearchPage>);
    } else if (selectRightPage === '2') {
      rightPage = (<MapPage searchPosition = {casePosition} setPositionGeographic={gis=>this.setPositionGeographic(gis)}></MapPage>);
    } else if (selectRightPage === '3') {
      rightPage = (<CaseList setRelateCase = {relateNo => this.setRelateCase(relateNo)}></CaseList>);
    }
    return (
      <div className={styles.mainContent}>
        <div className={styles.leftContent} style={{width: rightShow ? '50%' : '100%'}}>
          <Card style={{height: '100%'}}>
            <Form>
              <FormItem {...formItemLayout} label="业务单号">
                {getFieldDecorator('caseNo', {
                  initialValue: caseNo,
                })(<Input placeholder="请输入业务单号" disabled/>)}
              </FormItem>
              <FormItem {...formItemLayout} label="业务类型">
                {getFieldDecorator('dIdCaseType', {
                  initialValue: '1',
                  rules: [
                    {
                      required: true,
                      message: '此项为必填项!',
                    },
                  ],
                })(<Select>
                  <Option value="1">咨询</Option>
                  <Option value="2">投诉</Option>
                  <Option value="3">故障报修</Option>
                </Select>)}
              </FormItem>
              <FormItem {...formItemLayout} label="业务分类">
                {getFieldDecorator('dIdCaseSort', {
                  initialValue: '1',
                  rules: [
                    {
                      required: true,
                      message: '此项为必填项!',
                    },
                  ],
                })(<Select>
                  <Option value="1">运维</Option>
                  <Option value="2">CA</Option>
                </Select>)}
              </FormItem>
              <FormItem {...formItemLayout} label="来电详情">
                {getFieldDecorator('caseDetail', {
                  rules: [
                    {
                      max: 200,
                      message: '长度不能超过200个字符!',
                    },
                    {
                      required: true,
                      message: '此项为必填项!',
                    },
                  ],
                })(<TextArea  placeholder="请输入来电详情" rows="4"></TextArea>)}
              </FormItem>
              <FormItem {...formItemLayout} label="故障位置">
                {getFieldDecorator('casePosition', {
                  rules: [
                    {
                      max: 200,
                      message: '长度不能超过200个字符!',
                    },
                    {
                      required: true,
                      message: '此项为必填项!',
                    },
                  ],
                })(<div><TextArea placeholder="请输入故障位置" rows={2} onFocus={this.getMapPosition}/><a onClick={this.searchPosition}>地图检索</a></div>)}
              </FormItem>

              <FormItem {...formItemLayout} label="经度">
                {getFieldDecorator('gisX', {
                })(<Input placeholder="请输入经度" />)}
              </FormItem>
              <FormItem {...formItemLayout} label="纬度">
                {getFieldDecorator('gisY', {
                })(<Input placeholder="请输入纬度" />)}
              </FormItem>
              <FormItem {...formItemLayout} label="是否重复报警">
                {getFieldDecorator('isRepeat', {
                })(<Checkbox onChange={this.onChangeRepeat}>重复报警</Checkbox>)}
              </FormItem>
              <FormItem {...formItemLayout} label="关联编号">
                {getFieldDecorator('caseRelateNo', {
                  rules: [
                    {
                      required: alarmRepeat,
                      message: '此项为必填项!',
                    },
                  ],
                })(<Input placeholder="请输入关联编号" />)}
              </FormItem>
              <FormItem {...formItemLayout} label="来电号码">
                {getFieldDecorator('callTel', {
                  rules: [
                    {
                      required: true,
                      message: '此项为必填项!',
                    },
                  ],
                })(<Input placeholder="请输入来电号码" />)}
              </FormItem>
              <FormItem {...formItemLayout} label="来电姓名">
                {getFieldDecorator('callName', {
                  rules: [
                    {
                      required: true,
                      message: '此项为必填项!',
                    },
                  ],
                })(<Input placeholder="请输入来电姓名" />)}
              </FormItem>
              <FormItem {...formItemLayout} label="来电性别">
                {getFieldDecorator('callSex', {
                  initialValue: 1,
                  rules: [
                    {
                      required: true,
                      message: '此项为必填项!',
                    },
                  ],
                })(<RadioGroup onChange={this.onChangeSex}>
                  <Radio value={1}>男</Radio>
                  <Radio value={2}>女</Radio>
                </RadioGroup>)}
              </FormItem>
              <FormItem {...formItemLayout} label="回访电话">
                {getFieldDecorator('caseReturnTel', {
                  rules: [
                    {
                      required: true,
                      message: '此项为必填项!',
                    },
                  ],
                })(<Input placeholder="请输入回访电话" />)}
              </FormItem>
              <FormItem {...formItemLayout} label="等级">
                {getFieldDecorator('caseLevel', {
                  initialValue: 1,
                  rules: [
                    {
                      required: true,
                      message: '此项为必填项!',
                    },
                  ],
                })(<RadioGroup onChange={this.onChangeCaseLevel}>
                  <Radio value={1}>极高</Radio>
                  <Radio value={2}>高</Radio>
                  <Radio value={3}>中</Radio>
                  <Radio value={4}>低</Radio>
                </RadioGroup>)}
              </FormItem>
              <FormItem wrapperCol={{ span: 24}}>
                <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>
                  保存
                </Button>
                <Button type="primary" style={{marginLeft: 20}} onClick={this.postWork}>
                  派单
                </Button>
                <Button type="primary" style={{marginLeft: 20}} onClick={this.gotoList}>
                  关闭
                </Button>
              </FormItem>
            </Form>
          </Card>
        </div>
        <div className={styles.rightContent} style={{display: rightShow ? 'inline-block' : 'none'}}>
          <Card style={{height: '100%'}}>
            <div style={{marginBottom: 20, display: selectRightPage === '1' ? 'none' : 'block',}} onClick={this.gotoSearchPage}><a>返回搜索页</a></div>
            {rightPage}
          </Card>
        </div>
        <div className={styles.showBtn} style={{display: rightShow ? 'none' : 'inline-block'}} onClick={this.showRight}><Icon type="double-left" theme="outlined" /></div>
        <div className={styles.hideBtn} style={{display: rightShow ? 'inline-block' : 'none'}} onClick={this.hideRight}><Icon type="double-right" theme="outlined" /></div>
      </div>
    );
  }
}

export default CallForm;
