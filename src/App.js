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
    userEmail: ''
  }

  handleAddOne = (item) => {
		this.setState({
      cart: [...this.state.cart, item.id]
    })
    console.log("ADD ONE")
	}

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

  handleEmailChange = (e) => {
    console.log(e.target.value)
  }

  handlePhoneNumberChange = (e) => {
    this.setState({
      userPhone: e.target.value
    })
  }

  render() {
    const ticketsInfo = data.data
    console.log("In cart:", this.state.cart)
    console.log("Phone # is:", this.state.userPhone)
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
        <Subtotal />
      </div>
    )
  }
}

export default App
