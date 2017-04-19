import React from 'react'

import TransactionForm from './TransactionForm'

const TransactionWindow = ( props ) => {

  const transactionWindowClass = props.show ? 'transaction-window' : 'hidden'

  return (
    <div className={ transactionWindowClass }>
      <p className='i'>{`Order: ${ props.transactionQuantity } @ ${ props.currentPrice } = ${ ((props.transactionQuantity * props.currentPrice).toFixed(2)) }`}</p>
      <TransactionForm
        valid={ props.valid }
        onSubmit={ props.onSubmit }
        onChange={ props.onChange }
        transactionQuantity={props.transactionQuantity }
      />
      <button onClick={ props.onHide }>Hide</button>
    </div>
  )
}

export default TransactionWindow
