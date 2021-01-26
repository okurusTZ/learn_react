import React from 'react'

function WarningBanner(props) {
  if(!props.warn) {
    return null;
  }
  return (
    <div>
      Warning!
    </div>
  )
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isShow: true};
    this.click = this.click.bind(this);
  }
  click() {
    this.setState(state => ({
      isShow: !state.isShow
    }))
  }
  render() {
    return (
      <div>
      {/* 注意这里的isShow需要this.state */}
        <WarningBanner warn={this.state.isShow}></WarningBanner>
        <button onClick={this.click}>{this.isShow ? 'Hide' : 'Show'}</button>
      </div>
    )
  }
}

export default Page