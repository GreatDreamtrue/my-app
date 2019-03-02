import React from 'react';
import { Input, Button } from 'antd';
import styles from './CallForm.less';

class SearchPage extends React.Component {
  // constructor(props) {
  //   super(props);
  // };

  render() {
    return (
      <div>
        <div className={styles.searchContent}>
          <Input className={styles.searchInput} placeholder="请输入查询内容" />
          <Button className={styles.searchBtn} type="primary">搜索</Button>
        </div>
        <div className={styles.searchResult}>

        </div>
      </div>
    )
  }
}

export default SearchPage;
