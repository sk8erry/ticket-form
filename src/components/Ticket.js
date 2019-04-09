import React from 'react'
import './Ticket.css'

class Ticket extends React.Component {
  getTicketCount(cart, ticketInfo) {
    let count = 0
    cart.forEach(el => {
      if (el === ticketInfo.id) {
        count += 1
      } 
    })
    return count
  }

  render() {
    const ticketInfo = this.props.ticketInfo
    const cart = this.props.cart
    let ticketCount = 0
    return (
      <React.Fragment>
        <div className="ticket-wrapper">
          <div className="ticket-info">
            <div className="ticket-title">{ticketInfo.title}</div>
            <div className="ticket-description">{ticketInfo.description}</div>
            <div className="ticket-price">
              <span>{ticketInfo.price}元</span>
              {ticketInfo.remaining < 5 ? <span className="remaining">仅剩{ticketInfo.remaining}张</span> : null}
            </div>
          </div>
          <div className="ticket-control">
            <button
              className="add"
              onClick={() => {this.props.onRemoveOne(ticketInfo)}}
              >&ndash;</button>
            <span className="ticket-count">{this.getTicketCount(cart, ticketInfo)}</span>
            <button
              className="remove"
              onClick={() => {this.props.onAddOne(ticketInfo)}}
              >+</button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Ticket