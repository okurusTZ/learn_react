import React from 'react'

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <tr>
        <td>
          <label>{this.props.id}</label>
        </td>
        <td>
          <input type="text"/>
        </td>
        <td>
          <label>{this.props.createdAt.toTimeString()}</label>
        </td>
      </tr>
    )
  }
}

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    const date = new Date()
    const todoCounter = 1;
    this.state = {
      // 用于存储todo的列表
      todoCounter: todoCounter,
      list: [
        {
        id: todoCounter,
        createdAt: date,
        },
      ],
    }
    // this.addToStart = this.addToStart.bind(this);
    // this.addToEnd = this.addToEnd.bind(this);
    // this.sortByEarliest = this.sortByEarliest.bind(this);
    // this.sortByLatest = this.sortByLatest.bind(this);
  }
  addToStart() {
    const date = new Date();
    const nextId = this.state.todoCounter + 1;
    const newList = [{
      id: nextId,
      createdAt: date
    },
    ...this.state.list];
    this.setState({
      list: newList,
      todoCounter: nextId
    })
    // console.log('add to start')
  }
  addToEnd() {
    const date = new Date();
    const nextId = this.state.todoCounter + 1;
    const newList = [
      ...this.state.list,
      {
      id: nextId,
      createdAt: date
      }
    ];
    this.setState({
      list: newList,
      todoCounter: nextId
    })
  }
  sortByEarliest() {
    const sortList = this.state.list.sort((a,b) => {
      return a.createdAt - b.createdAt;
    })
    this.setState({
      list: [...sortList]
    })
  }
  sortByLatest() {
    const sortList = this.state.list.sort((a,b) => {
      return b.createdAt - a.createdAt;
    })
    this.setState({
      list: [...sortList]
    })
  }
  render() {
    return (
      // 注意这里return的表达式必须有一个父元素
      <div>
        <code>key=index</code>
        <br/>
        <button onClick={this.addToStart.bind(this)}>Add New to Start</button>
        <button onClick={this.addToEnd.bind(this)}>Add New to End</button>
        <button onClick={this.sortByEarliest.bind(this)}>Sort by Earliest</button>
        <button onClick={this.sortByLatest.bind(this)}>Sort by Latest</button>
        <table>
          <tr>
            <th>ID</th>
            <th></th>
            <th>created at</th>
          </tr>
          {/* 注意这里map((todo, index) => 后面不跟{})
          针对JSX时，使用小括号 */}
          {this.state.list.map((todo, index) => 
            <ToDo key={todo.id} {...todo} onClick={console.log(todo.id)}/>
          )}
        </table>
      </div>
    )
  }
}

export default ToDoList