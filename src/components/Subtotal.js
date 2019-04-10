import React from 'react'
import './Subtotal.css'

class Subtotal extends React.Component {
  getSum = (cart, ticketsInfo) => {
    let sum = 0
    cart.forEach(cartItem => {
      ticketsInfo.forEach(ticketInfo => {
        if (ticketInfo.id === cartItem) {
          sum += (ticketInfo.price * 100)
        }
      })
    })
    return sum / 100
  }

  render() {
    const cart = this.props.cart
    const ticketsInfo = this.props.ticketsInfo
    return (
      <React.Fragment>
        <div className="filler"></div>
        <div className="subtotal-wrapper">
          <div className="total">
            <div className="total-tickets">共计 <span class="blue">{cart.length}</span> 张</div>
            <div className="sum">合计 <span className="blue">{this.getSum(cart, ticketsInfo)}</span> 元</div>
          </div>
          <div className="pay">
            <button className="btn pay" onClick={this.props.onSubmit}>
              立即支付
            </button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Subtotal