import React from 'react'

/**
 * 条件渲染
 */
function UserGreeting(props) {
  return (
    <h1>Welcome back!</h1>
  )
}

function GuestGreeting(props) {
  return (
    <h1>Please sign up~</h1>
  )
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      login
    </button>
  )
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      logout
    </button>
  )
}

function Greeting(props) {
  if(props.isLoggedIn) {
    return <UserGreeting/>
  } else {
    return <GuestGreeting/>
  }
}

class Loggin extends React.Component {
  constructor(props) {
    super(props);
    this.logginClick = this.logginClick.bind(this);
    this.loggoutClick = this.loggoutClick.bind(this);
    this.state = {
      isLoggedIn: false
    }
  }
  logginClick() {
    this.setState({
      isLoggedIn: true
    })
  }
  loggoutClick() {
    this.setState({
      isLoggedIn: false
    })
  }
  render() {
    let button;
    if(this.state.isLoggedIn) {
      button = <LogoutButton onClick={this.loggoutClick}/>
    } else {
      button = <LoginButton onClick={this.logginClick} />;
    }
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn}></Greeting>
        {/* 这里要用{button} */}
        {button}
      </div>
    )
  }
}


export default Loggin