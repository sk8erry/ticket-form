import React, { Component } from 'react';

//Import dummy data
import data from './data/Data'

//Import components
import Ticket from './components/Ticket'
import CustomerInfo from './components/CustomerInfo'
import Subtotal from './components/Subtotal'

import './App.css';

class App extends Component {
  state = {
    cart: [],
    userPhone: '',
    userEmail: '',
    sponsors: []
  }

  //Add one ticket (id) to cart
  handleAddOne = (item) => {
    let ticketCount = this.getTicketCount(item)
    if (ticketCount > item.remaining - 1) { //item.remaining - 1 because we are about to put one in cart
      return
    } else {
      this.setState({
        cart: [...this.state.cart, item.id]
      })
    }
  }


  //Remove one ticket (id) from cart
	handleRemoveOne = (item) => {
    let index = this.state.cart.indexOf(item.id);
    if (index === -1) {
      return
    } else {
      this.setState({
        cart: [
          ...this.state.cart.slice(0, index),
          ...this.state.cart.slice(index + 1)
        ]
      })
    }
  }

  //Given ticket, return how many such tickets are in cart
  getTicketCount = (item) => {
    let ticketCount = 0
    this.state.cart.forEach(ticketId => {
      if (ticketId === item.id) {
        ticketCount += 1
      }
    })
    return ticketCount
  }

  //Handle user input email
  handleEmailChange = (e) => {
    this.setState({
      userEmail: e.target.value
    })
  }

  //Handle user input phone number
  handlePhoneNumberChange = (e) => {
    this.setState({
      userPhone: e.target.value
    })
  }

  handleSubmit = () => {
    
  }

  render() {
    const ticketsInfo = data.data
    const cart = this.state.cart
    return (
      <div className="App">
        <div className="tickets-wrapper">
          <div className="ticket-component-title">选择票种</div>
          {ticketsInfo.map(ticketInfo => <Ticket ticketInfo={ticketInfo} key={ticketInfo.id} onAddOne={this.handleAddOne} onRemoveOne={this.handleRemoveOne} cart={this.state.cart}/>)}
        </div>
        <div className="customer-wrapper">
          <div className="customer-info-title">购票人信息</div>
          <CustomerInfo onEmailChange={this.handleEmailChange} onPhoneNumberChange={this.handlePhoneNumberChange}/>
        </div>
        <Subtotal ticketsInfo={ticketsInfo} cart={cart} onSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default App
