import React from 'react';
import Table from 'rc-table';
//import 'antd/dist/antd.css';

class Home extends React.Component {
  render () {
    return <div>hello world</div>
  }
}
function Func(props){
  return (
    <Table title={()=><div style={{textAlign:'center'}}>111111</div>} columns={props.columns} data={props.data} {...props} />
  )
}
export default Func;