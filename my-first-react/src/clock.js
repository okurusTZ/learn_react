import React from 'react'

//  组件开头必须大写！！！
function FmtDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }
  // 生命周期方法
  // 组件被渲染到DOM后运行
  componentDidMount() {
    // 每隔一秒调用一次tick，进行一次UI更新，由于state已经改变，需要重新render
    this.timerID = setInterval(() => {
      this.tick()
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  tick() {
    this.setState({
      date: new Date()
    })
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FmtDate date={this.state.date}></FmtDate>
      </div>
    );    
  }
}

export default Clock