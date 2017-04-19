import React, { Component } from 'react'

import Wallet from '../components/Wallet'
import InvestmentsPanel from '../components/InvestmentsPanel'
import TransactionWindow from '../components/TransactionWindow'

class Investments extends Component {
  constructor() {
    super()
    this.state = {
      funds: 10000.00,
      investments: [],
      transaction: {
        id: 1,
        quantity: '',
        price: null,
        type: null
      },
      windowShow: false
    }
  }

  handleClickBuy() {
    let transaction = this.state.transaction
    transaction = Object.assign( {}, transaction, { type: 'buy' } )
    this.setState({
      transaction: transaction,
      windowShow: true
    })
  }

  handleClickSell( transactionSelected ) {
    let investments = this.state.investments
    investments = investments.filter( ( transaction ) => transaction.id !== transactionSelected.id )

    this.setState( {
      funds: this.state.funds + transactionSelected.quantity * this.props.stock.price,
      investments: investments
    })
  }

  handleTransaction( event ) {
    event.preventDefault()

    let transaction = this.state.transaction
    transaction = Object.assign( {}, transaction, { price: parseFloat((this.props.stock.price).toString()) } )
    this.setState( {
      funds: this.state.funds - transaction.quantity * transaction.price,
      investments: [...this.state.investments, transaction ],
      transaction: {
        id: this.state.transaction.id + 1,
        quantity: '',
        price: null,
        type: null
      },
      windowShow: false
    })
  }

  handleQuantityChange( event ) {
    if ( !(isNaN(event.target.value)) ) {
      let transaction = this.state.transaction
      transaction = Object.assign( {}, transaction, { quantity: Math.round( event.target.value ) })
      this.setState( { transaction: transaction } )
    }
  }

  hideTransactionWindow() {
    this.setState( { windowShow: false } )
  }

  checkTransactionValidity() {
    return ( (this.state.funds >= (this.state.transaction.quantity * this.props.stock.price)) && this.state.transaction.quantity > 0 )
  }

  render() {
    const validTransaction = this.checkTransactionValidity()

    return (
      <div className='investment'>
        <Wallet funds={this.state.funds} />

        <InvestmentsPanel
          currentPrice={ this.props.stock.price }
          investments={ this.state.investments }
          onBuyClick={ this.handleClickBuy.bind( this ) }
          onSellClick={ this.handleClickSell.bind( this ) }
        />

        <TransactionWindow
          onHide={ this.hideTransactionWindow.bind( this ) }
          onSubmit={ this.handleTransaction.bind( this ) }
          onChange={ this.handleQuantityChange.bind( this ) }
          show={ this.state.windowShow }
          currentPrice={ this.props.stock.price }
          transactionQuantity={ this.state.transaction.quantity }
          transactionType={ this.state.transaction.type }
          valid={ validTransaction }
        />

      </div>
    );
  }
}

export default Investments
