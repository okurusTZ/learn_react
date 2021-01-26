
import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    // 必须调用，因为子类没有自己的this对象，继承父类的this对象
    super(props);
    this.state = {
      isToggleOn: true
    };
    // 为了在回调中使用this，这个绑定必不可少
    // 在js中，class的方法默认不绑定this
    // this.toggleClick = this.toggleClick.bind(this)
  }
  // 可以利用实验性的public class fields语法来避免bind
  toggleClick = () => {
    // 不能直接更改state
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
  }
  render() {
    return (
      // 此处如果不绑定，那么this.toggleClick是undefined
      // 也可以在回调中使用箭头函数来避免
      <button onClick={() => this.toggleClick()}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}

export default Toggle