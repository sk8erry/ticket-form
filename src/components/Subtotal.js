import React from 'react'
import './Subtotal.css'

class Subtotal extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="filler"></div>
        <div className="subtotal-wrapper">
          <div className="total">
            <div className="total-tickets">共计</div>
            <div className="sum">合计</div>
          </div>
          <div className="pay">
            <button class="btn pay">
              立即支付
            </button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Subtotal