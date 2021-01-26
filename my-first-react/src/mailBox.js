import React from 'react'

/**
 * 内联条件渲染
 */
class MailBox extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello~</h1>
        {/* 之所以可以这样做是因为， 
        true&&expression总是返回expression
        而false&&expression返回false */}
        { this.props.Message.length > 0 &&
          <h2>
            You have {this.props.Message.length} unread message!
          </h2>
        }

        The mailBox is <b>{this.props.Message.length > 0 ? 'not empty' : 'empty'}</b>
      </div>
    );
  }
}

export default MailBox
