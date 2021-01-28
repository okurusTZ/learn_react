import React from 'react';
import ReactDOM from 'react-dom';

// const name = 'xinyi';
// function fullName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'XINYI',
//   lastName: 'zhao'
// }

// function greetings(user) {
//   if(user) {
//     return <h1>Hello, {fullName(user)}</h1>
//   } else {
//     return <h1>Hello, Stranger!</h1>
//   }
// }
// /**
//  * JSX语法
//  * 便于阅读，会拆分成多行
//  */
// const element = (
//   <div>{greetings(user)}</div>
// )

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   // 每次更新UI，都需要通过reactDOM来操作
//   // React只更新需要更新的部分
//   ReactDOM.render(element, document.getElementById('root'))
// }

// setInterval(tick, 1000);

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// )


/**
 * state的使用
 * state和props类似，但是是私有的，完全受控于当前组件
 */


//  组件开头必须大写！！！
// function FmtDate(props) {
//   return <h2>It is {props.date.toLocaleTimeString()}.</h2>
// }

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: new Date()
//     }
//   }
//   // 生命周期方法
//   // 组件被渲染到DOM后运行
//   componentDidMount() {
//     // 每隔一秒调用一次tick，进行一次UI更新，由于state已经改变，需要重新render
//     this.timerID = setInterval(() => {
//       this.tick()
//     }, 1000);
//   }
//   componentWillUnmount() {
//     clearInterval(this.timerID)
//   }
//   tick() {
//     this.setState({
//       date: new Date()
//     })
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <FmtDate date={this.state.date}></FmtDate>
//       </div>
//     );    
//   }
// }

// function App() {
//   function click(e) {
//     e.preventDefault();
//     console.log('The link was clicked.')
//   }
//   return (
//     <div>
//     {/* 这三个组件是完全独立的 */}
//       <Clock/>
//       <Clock/>
//       <Clock/>
//       <a href=""  onClick={click}>
//         呀哈哈
//       </a>
//     </div>
//   )
// }
// ReactDOM.render(
//   <App/>,
//   document.getElementById('root')
// );

import Event from './event.js'
import Loggin from './login'
import MailBox from './mailBox'
import Page from './showWarn'
import ToDoList from './toDoList'

// const messages = [ 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <ToDoList/>,
  document.getElementById('root')
)