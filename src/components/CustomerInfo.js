import React from 'react'
import './CustomerInfo.css'

class CustomerInfo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="customer-info-wrapper">
          <div className="phone-number">手机号</div>
          <input onChange={this.props.onPhoneNumberChange}  className="input" placeholder="请输入您的手机号，将用于接收出票短信"></input>
        </div>
        <div className="customer-info-wrapper">
          <div className="phone-number">电子邮箱</div>
          <input onChange={this.props.onEmailChange}  className="input" placeholder="请输入您的电子邮箱，将用于接收出票邮件"></input>
        </div>
      </React.Fragment>
    )
  }
}

export default CustomerInfo