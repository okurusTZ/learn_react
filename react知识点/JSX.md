### JSX语法

#### 命名规则：小驼峰camelCase

> 例如， JSX里的class变成了className， tabindex变成了tabIndex

#### JSX表示对象

以下代码完全等效

```react
const element = (
    <h1 className="greeting">
    Hello!
    </h1>
);

const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello!'
);

const element = {
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'Hello!'
    }
}
```



#### React的元素渲染

元素是构成React<u>应用的最小砖块</u>

```react
const element = <h1>Hello!</h1>
```

##### 将一个元素渲染为DOM 

```html
<div id="root"></div>
```

为根DOM节点，该节点内所有的内容都由React DOM管理

想要把一个React元素渲染到根DOM节点中，只需把它传入<u>ReactDOM.render()</u>

```react
const element = <h1>hello!</h1>;
ReactDOM.render(
    element,
    document.getElementById('root')
);
```

##### 更新已渲染的元素

更新UI的唯一方式是创建一个新的元素，并将其传入<u>ReactDOM.render()</u>



### 组件

#### 函数组件

定义组件最简单的方式就是编写JS函数，如下，该函数就是一个有效的React组件，因为它接受位以待有数据的props对象并返回一个React元素。

```react
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}
```

#### Class组件

```react
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {props.name}</h1>
    }
}
```

#### 渲染组件

当React元素为用户自定义组件时，会将JSX接受的属性以及子组件转换为单个对象传递给组件，这个对象被称为“props”

```react
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

在这过程中发生了什么？

1. 调用了ReactDOM.render()函数，并传入<Welcome name="sara" />作为参数
2. React调用Welcome组件，并将{name: 'Sara'}作为props传入
3. Welcome组件将<h1>Hello, Sara<h1/>元素作为返回值
4. React DOM更新DOM

> **组件名称必须以大写字母开头，不然会被识别为原生DOM**标签

![image-20210126221335017](C:\Users\sylwi\AppData\Roaming\Typora\typora-user-images\image-20210126221335017.png)

如上图，这里的组件因为开头没有大写，被识别成了原生组件，因此渲染不出来。

#### Props的只读性

所有React组件都必须像纯函数一样保护他们的props不被更改

#### State&生命周期

##### 如何正确使用State？

1. 不要直接修改state

   ```react
   // Wrong
   this.state.comment = 'hello';
   
   // Correct
   this.setState({comment: 'hello'})
   ```

2. state的更新可能是异步的：出于性能考虑，React可能会把多个setState()调用合并成一个。因为this.props和this.state可能会异步更新，所以不要依赖他们的值来更新下一个状态。例如

   ```react
   // Wrong 
   this.setState({
       counter: this.state.counter + this.props.increment,
   })
   
   // correct
   this.setState((state, props) => ({
       counter: state.counter + props.increment
   }))
   ```

3. state的更新会被合并



#### 事件处理

* 命名采用小驼峰式（camelCase），而不是纯小写
* 使用JSX语法需要传入一个函数作为事件处理函数，而不是字符串

HTML

```html
<button onclick="activateLasers()"></button>
```

React

```react
<button onClick={activateLaser}></button>
```

##### 将事件处理函数声明为class中的方法

> 必须谨慎对待JSX回调函数中的this，在JS中，class的方法默认不会绑定this。如果忘记绑定this.click并把它传入了onClick，当你调用这个函数的时候，this的值为undefined。

```react
class Toggle extends React.Component {
  constructor(props) {
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
```

1. 使用bind()
2. 使用实验性的public class fields语法
3. 在回调函数中使用箭头函数（每次渲染都会创建不同的回调函数，当回调函数当做props传入子组件时，可能会进行额外的渲染。

##### 理解js里的bind()函数

bind方法会创造一个新的函数，当这个新函数被调用时，他的this是传递给bind的第一个参数，他的参数时bind的其他参数和其原本的参数

