import React from 'react';
import { Input, Button, message } from 'antd';
import styles from './CallForm.less';

class MapPage extends React.Component {
  // constructor(props) {
  //   super(props);
  // };

  componentDidMount() {
    let _this = this;
    // 地图绘制
    let BMap = window.BMap;
    // 百度地图API功能
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(117.188963, 39.089488);
    map.centerAndZoom(point,12);
    map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
    map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用
    map.addEventListener("click",function(e){
      let gis = {
        gisX: e.point.lng,
        gisY: e.point.lat,
      };
      _this.props.setPositionGeographic(gis);
    });  //单击地图获取经纬度

  }

  componentWillReceiveProps () {
    let _this = this;
    const { searchPosition } = this.props;
    if (searchPosition !== '') {
      let BMap = window.BMap;
      // 百度地图API功能
      var map = new BMap.Map("allmap");
      var point = new BMap.Point(117.188963, 39.089488);
      // 创建地址解析器实例
      var myGeo = new BMap.Geocoder();
      // 将地址解析结果显示在地图上,并调整地图视野
      myGeo.getPoint(searchPosition, function(point){
        if (point) {
          map.centerAndZoom(point, 16);
          map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
          map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用
          map.addOverlay(new BMap.Marker(point));
        }else{
          alert("您选择地址没有解析到结果!");
        }
      }, "天津市");
      map.addEventListener("click",function(e){
        let gis = {
          gisX: e.point.lng,
          gisY: e.point.lat,
        };
        _this.props.setPositionGeographic(gis);
      });  //单击地图获取经纬度
    } else {
      message.warning('请输入检索地址！');
    }
  }

  render() {
    return (
      <div>
        <div id="allmap" style={{minHeight: '500px'}}></div>
      </div>
    )
  }
}

export default MapPage;
